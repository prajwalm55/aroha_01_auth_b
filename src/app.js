import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import authRoute from './routes/UserRoutes.js';
import adminRoutes from './routes/AdminRoutes.js';
import productRoutes from './routes/ProductRoutes.js';
import cookieParser from 'cookie-parser';
import cartRoutes from './routes/CartRoutes.js'

import dotenv from 'dotenv';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", productRoutes);
app.use('/api/cart', cartRoutes);


app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});