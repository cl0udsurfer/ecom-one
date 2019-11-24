const express = require('express');
const router = express.Router({ mergeParams: true });

const { protect } = require('../middleware/auth');

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  removeProduct
} = require('../controllers/product');

router
  .route('/')
  .get(getProducts)
  .post(protect, createProduct);

router
  .route('/:id')
  .get(getProduct)
  .put(protect, updateProduct)
  .delete(protect, removeProduct);

module.exports = router;
