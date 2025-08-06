// import express from 'express';
// import isAuthenticated from '../middlewares/isAuthenticated.js';
// import { saveCart } from '../controllers/ProductController.js';

// const router = express.Router();

// router.post('/save', isAuthenticated, saveCart);

// export default router;


// ✅ src/routes/CartRoutes.js

import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { saveCart } from '../controllers/CartController.js'; // ✅ changed from ProductController

const router = express.Router();

router.post('/save', isAuthenticated, saveCart);

export default router;
