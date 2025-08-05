import express from 'express';
import { saveCart } from '../controllers/ProductController.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = express.Router();

// Route: POST /api/cart/save
router.post('/cart/save', isAuthenticated, saveCart);

export default router;
