import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import authRoute from './routes/UserRoutes.js';
import adminRoutes from './routes/AdminRoutes.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config(); // ⬅️ This must come BEFORE using process.env


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

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});
