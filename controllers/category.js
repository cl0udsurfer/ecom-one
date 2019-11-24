const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Category = require('../models/Category');

// @desc    Get all Categories
// @route   GET /api/v1/category
// @access  Public
exports.getCategories = asyncHandler(async (req, res, next) => {
  const categories = await Category.find().populate('product');

  res.status(200).json({
    success: true,
    count: categories.length,
    data: categories
  });
});

// @desc    Get Single Category
// @route   GET /api/v1/category/:id
// @access  Public
exports.getCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return next(
      new ErrorResponse(`Category not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: category });
});

// @desc    Create Category
// @route   POST /api/v1/category
// @access  Private
exports.createCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.create(req.body);

  res.status(201).json({
    success: true,
    data: category
  });
});

// @desc    Delete Category
// @route   DELETE /api/v1/category/:id
// @access  Private
exports.removeCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(400).json({ success: false });
  }

  await category.remove();

  res.status(200).json({ success: true, data: {} });
});

// @desc    Update Category
// @route   PUT /api/v1/category/:id
// @access  Private
exports.updateCategory = asyncHandler(async (req, res, next) => {
  let category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(400).json({
      success: false
    });
  }

  category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({ success: true, data: category });
});
