// import express from 'express';
// import {
//   addProduct,
//   addProducts,
//   getAllProducts,
//   addStyleToExistingProducts,
//   deleteAllProducts
// } from '../controllers/ProductController.js';

// const router = express.Router();

// // ✅ Single Product Add
// router.post('/add', addProduct);

// // ✅ Bulk Product Add
// router.post('/addProducts', addProducts);

// // ✅ Get All Products
// router.get('/all', getAllProducts);

// // ✅ Update missing styles
// router.put('/update-style', addStyleToExistingProducts);

// // ✅ Delete All Products
// router.delete('/delete-all', deleteAllProducts);

// export default router;



import express from 'express';
import {
  addProduct,
  addProducts,
  getAllProducts,
  addStyleToExistingProducts,
  deleteAllProducts,
  updateProductById,
  deleteProductById
} from '../controllers/ProductController.js';

const router = express.Router();

// ✅ Single Product Add
router.post('/add', addProduct);

// ✅ Bulk Product Add
router.post('/addProducts', addProducts);

// ✅ Get All Products
router.get('/all', getAllProducts);

// ✅ Update missing styles
router.put('/update-style', addStyleToExistingProducts);

// ✅ Delete All Products
router.delete('/delete-all', deleteAllProducts);

// ✅ Update Product by ID
router.put('/update/:id', updateProductById);

// ✅ Delete Product by ID
router.delete('/delete/:id', deleteProductById);

export default router;


