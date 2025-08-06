// import mongoose from 'mongoose';

// // const productSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   size: { type: String, required: true },
// //   style: { type: String, required: true },
// //   category: { type: String, required: true },
// //   color: { type: String, required: true },
// //   price: { type: Number, required: true },
// //   quantity: { type: Number, required: true },
// // });


// const Stock = mongoose.model('Stock', productSchema);
// export default Stock;


// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: { type: String, required: true },
  style: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: { type: String, required: true } // ✅ Image field
});

const Stock = mongoose.model('Stock', productSchema);
export default Stock;
