
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import authRoutes from './routes/UserRoutes.js';
import adminRoutes from './routes/AdminRoutes.js';
import productRoutes from './routes/ProductRoutes.js';
import cartRoutes from './routes/CartRoutes.js'; // ✅ add this

dotenv.config();
const app = express();

app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes); // ✅ Product-specific
app.use("/api/cart", cartRoutes);        // ✅ Cart-specific

const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
