import express from 'express';
import {
  addProduct,
  getAllProducts,
  addStyleToExistingProducts,
  deleteAllProducts
} from '../controllers/ProductController.js';

const router = express.Router();

router.post('/add', addProduct);       // ✅ Public POST
router.get('/all', getAllProducts);    // ✅ Public GET
router.put('/update-style', addStyleToExistingProducts);  // Optional
router.delete('/delete-all', deleteAllProducts);          // DELETE /api/stocks/delete-all

export default router;
