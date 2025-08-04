

// import mongoose from "mongoose";
// import dotenv from 'dotenv';
// // dotenv.config();
// dotenv.config({ path: './.env' });


// const connectDB = async () => {
//   try {
//     console.log("MONGO_URI from .env:", process.env.MONGO_URI); // 👈 Add this line

//     // await mongoose.connect(process.env.MONGO_URI);
//     await mongoose.connect("mongodb://localhost:27017/authDB");

//     console.log("Mongoose Connected!!!");
//   } catch (error) {
//     console.log("Connection Failed", error);
//     process.exit(1);
//   }
// };

// export default connectDB;

// ✅ src/config/db.js
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config(); // load from .env

const connectDB = async () => {
  try {
    console.log("MONGO_URI from .env:", process.env.MONGO_URI); // For debugging

    // ✅ USE process.env.MONGO_URI instead of hardcoded string
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ Mongoose Connected!!!");
  } catch (error) {
    console.log("❌ Connection Failed", error);
    process.exit(1);
  }
};

export default connectDB;
