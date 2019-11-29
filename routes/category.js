const express = require('express');
const router = express.Router();

const { adminProtect } = require('../middleware/adminAuth');

const {
  getCategories,
  getCategory,
  createCategory,
  removeCategory,
  updateCategory
} = require('../controllers/category');

// Include other ressource routers
const productRouter = require('./product');

// Re-Route into other resource routers
router.use('/:categoryId/product', productRouter);

router
  .route('/')
  .get(getCategories)
  .post(adminProtect, createCategory);

router
  .route('/:id')
  .get(getCategory)
  .put(adminProtect, updateCategory)
  .delete(adminProtect, removeCategory);

module.exports = router;
