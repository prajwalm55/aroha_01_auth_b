import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
export default Product; // ✅ This line was missing or wrong
