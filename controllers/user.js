const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// @desc    Get all Users
// @route   GET /api/v1/user
// @access  Private
exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find().populate({
    path: 'order',
    select: 'id'
  });
  res.status(200).json({
    success: true,
    count: users.length,
    data: users
  });
});
