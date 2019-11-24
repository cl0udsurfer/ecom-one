const mongoose = require('mongoose');
const slugify = require('slugify');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxlength: 50
  },
  slug: String,
  description: {
    type: String,
    required: true,
    maxlength: 2000
  },
  price: {
    type: Number,
    trim: true,
    required: true,
    maxlength: 32
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: true
  },
  quantity: {
    type: Number
  },
  sold: {
    type: Number,
    default: 0
  },
  // Photo Upload Method überarbeiten!
  photo: {
    data: Buffer,
    contentType: String
  },
  shipping: {
    required: false,
    type: Boolean
  }
});

// Create Project Slug from name
ProductSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model('Product', ProductSchema);
