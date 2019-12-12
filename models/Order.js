const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  transactionId: {
    type: String
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  address: {
    type: String,
    required: true,
    maxlength: 50
  },
  postalCode: {
    type: String,
    required: true,
    maxlength: 20
  },
  city: {
    type: String,
    required: true,
    maxlength: 20
  },
  state: {
    type: String,
    required: true,
    maxlength: 20
  },
  payment: {
    type: Boolean,
    required: true,
    default: false
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  orderedProducts: {
    type: Array,
    default: []
  },
  amount: {
    type: String,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', OrderSchema);
