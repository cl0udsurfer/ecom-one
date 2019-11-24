const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/auth');

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
  .post(protect, createCategory);

router
  .route('/:id')
  .get(getCategory)
  .put(protect, updateCategory)
  .delete(protect, removeCategory);

module.exports = router;
