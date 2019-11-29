const express = require('express');
const router = express.Router({ mergeParams: true });

const { adminProtect } = require('../middleware/adminAuth');

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
  .post(adminProtect, createProduct);

router
  .route('/:id')
  .get(getProduct)
  .put(adminProtect, updateProduct)
  .delete(adminProtect, removeProduct);

module.exports = router;
