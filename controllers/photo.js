const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Product = require('../models/Product');

// Request Photo
exports.photo = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (product.photo.data) {
    res.set('Content-Type', product.photo.contentType);
    return res.send(product.photo.data);
  }
});
