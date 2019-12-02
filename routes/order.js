const express = require('express');
const router = express.Router();

const { adminProtect } = require('../middleware/adminAuth');
const { userProtect } = require('../middleware/userAuth');

const {
  getAllOrders,
  getSingleOrder,
  getOrdersByUser,
  createOrder,
  removeOrder
} = require('../controllers/order');

router
  .route('/')
  .get(userProtect, getAllOrders)
  .post(userProtect, createOrder);

router
  .route('/:id')
  .delete(adminProtect, removeOrder)
  .get(userProtect, getSingleOrder);

router.route('/user/:userId').get(userProtect, getOrdersByUser);

module.exports = router;
