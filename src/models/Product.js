// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   size: { type: String, required: true },
//   style: { type: String, required: true },
//   category: { type: String, required: true },
//   price: { type: Number, required: true },
//   quantity: { type: Number, required: true },
//   color: { type: String } // Optional
// });

// const Stock = mongoose.model('Stock', productSchema);

// export default Stock;


// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   size: { type: String, required: true },
//   style: { type: String, required: true },     // ✅
//   category: { type: String, required: true },  // ✅
//   color: { type: String, required: true },     // ✅
//   price: { type: Number, required: true },
//   quantity: { type: Number, required: true },
// });

// const Stock = mongoose.model('Stock', productSchema);
// export default Stock;

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: { type: String, required: true },
  style: { type: String, required: true },
  category: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const Stock = mongoose.model('Stock', productSchema);
export default Stock;
