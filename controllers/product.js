const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Product = require('../models/Product');
const Category = require('../models/Category');

// @desc    Get all Products
// @route   GET /api/v1/product
// @route   GET /api/v1/category/:categoryId/product
// @access  Public
exports.getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find().populate({
    path: 'category',
    select: 'name'
  });

  res.status(200).json({
    success: true,
    count: products.length,
    data: products
  });
});

// @desc    Get single Product
// @route   GET /api/v1/product/:id
// @access  Public
exports.getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id).populate({
    path: 'category',
    select: 'name'
  });

  if (!product) {
    return next(
      new ErrorResponse(`No Product found with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: product
  });
});

// @desc    Create Product
// @route   POST /api/v1/category/:categoryId/product
// @access  Private
exports.createProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    success: true,
    data: product
  });
});

// @desc    Update Product
// @route   PUT /api/v1/product/:id
// @access  Private
exports.updateProduct = asyncHandler(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(
      new ErrorResponse(`No Product found with the id of ${req.params.id}`, 404)
    );
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    data: product
  });

  res.status(200).json({
    success: true,
    data: product
  });
});

// @desc    Delete Product
// @route   DELETE /api/v1/product/:id
// @access  Private
exports.removeProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(
      new ErrorResponse(`No Product found with the id of ${req.params.id}`, 404)
    );
  }

  await product.remove();

  res.status(200).json({
    success: true,
    data: {}
  });
});
