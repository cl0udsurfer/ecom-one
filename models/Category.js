const mongoose = require('mongoose');
const slugify = require('slugify');

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: 50
    },
    slug: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Reverse Populate with virtuals
CategorySchema.virtual('product', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'category',
  justOne: false
});

// Create Category Slug from name
CategorySchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model('Category', CategorySchema);
