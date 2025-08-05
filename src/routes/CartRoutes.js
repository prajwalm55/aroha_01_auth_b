import express from 'express';
import { saveCart } from '../controllers/CartController.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.post('/save', isAuthenticated, saveCart);

export default router;
