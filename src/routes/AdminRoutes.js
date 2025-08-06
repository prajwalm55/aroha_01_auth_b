// import express from "express";
// import Product from "../models/Product.js";
// import { isAdmin } from "../middlewares/isAdmin.js";

// const router = express.Router();

// // Get all products
// router.get("/products", isAdmin, async (req, res) => {
//   const products = await Product.find();
//   res.status(200).json(products);
// });

// // Update product
// router.put("/products/:id", isAdmin, async (req, res) => {
//   try {
//     const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json(updated);
//   } catch (err) {
//     res.status(500).json({ message: "Update failed" });
//   }
// });

// // Delete product
// router.delete("/products/:id", isAdmin, async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Product deleted" });
//   } catch (err) {
//     res.status(500).json({ message: "Delete failed" });
//   }
// });

// export default router;








// routes/AdminRoutes.js
import express from "express";
import { isAdmin } from "../middlewares/isAdmin.js";
import {
  addProduct,
  addProducts,
  getAllProducts,
  deleteAllProducts,
  addStyleToExistingProducts
} from "../controllers/ProductController.js";

const router = express.Router();

// ✅ Routes for Admin Product Management
router.get("/products", isAdmin, getAllProducts);
router.post("/products/add", isAdmin, addProduct);
router.post("/products/add-many", isAdmin, addProducts);
router.delete("/products/delete-all", isAdmin, deleteAllProducts);
router.put("/products/add-style", isAdmin, addStyleToExistingProducts);

export default router;