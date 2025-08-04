import express from "express";
import Product from "../models/Product.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = express.Router();

// Get all products
router.get("/products", isAdmin, async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

// Update product
router.put("/products/:id", isAdmin, async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
});

// Delete product
router.delete("/products/:id", isAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
});

export default router;
