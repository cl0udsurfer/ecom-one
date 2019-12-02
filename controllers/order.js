const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');
const Order = require('../models/Order');

// @desc    Get all Orders
// @route   GET /api/v1/orders
// @access  Private
exports.getAllOrders = asyncHandler(async (req, res, next) => {
  const orders = await Order.find().populate({
    path: 'user',
    select: 'id'
  });
  res.status(200).json({
    success: true,
    count: orders.length,
    data: orders
  });
});

// @desc    Get all Orders by user
// @route   GET /api/v1/orders/user/:userId
// @access  Private
exports.getOrdersByUser = asyncHandler(async (req, res, next) => {
  const orders = await Order.find({
    user: req.params.userId
  }).populate({
    path: 'user',
    select: 'id'
  });

  res.status(200).json({
    success: true,
    count: orders.length,
    data: orders
  });
});

// @desc    Get Single Order
// @route   GET /api/v1/orders/:orderId
// @access  Private
exports.getSingleOrder = asyncHandler(async (req, res, next) => {
  const orders = await Order.findById(req.params.orderId).populate({
    path: 'user',
    select: 'id'
  });

  res.status(200).json({
    success: true,
    count: orders.length,
    data: orders
  });
});

// @desc    Create Order
// @route   POST /api/v1/order
// @access  Private
exports.createOrder = asyncHandler(async (req, res, next) => {
  const order = await Order.create(req.body);

  res.status(201).json({
    success: true,
    data: order
  });
});

// @desc    Delete Order
// @route   DELETE /api/v1/order/:id
// @access  Private
exports.removeOrder = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(
      new ErrorResponse(`No Order found with the id of ${req.params.id}`, 404)
    );
  }

  await order.remove();

  res.status(200).json({
    success: true,
    data: {}
  });
});
