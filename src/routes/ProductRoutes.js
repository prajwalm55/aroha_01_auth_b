// import express from 'express';
// import {
//   addProduct,
//   getAllProducts,
//   addStyleToExistingProducts,
//   deleteAllProducts
// } from '../controllers/ProductController.js';

// const router = express.Router();

// router.post('/add', addProduct);       // ✅ Public POST
// router.get('/all', getAllProducts);    // ✅ Public GET
// router.put('/update-style', addStyleToExistingProducts);  // Optional
// router.delete('/delete-all', deleteAllProducts);          // DELETE /api/stocks/delete-all

// export default router;





import express from 'express';
import {
  addProduct,
  addProducts,
  getAllProducts,
  addStyleToExistingProducts,
  deleteAllProducts
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

export default router;