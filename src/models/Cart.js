// import mongoose from 'mongoose';

// const cartSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   items: [
//     {
//       id: String,
//       name: String,
//       price: Number,
//       quantity: Number,
//       size: String
//     }
//   ],
//   total: {
//     type: Number,
//     required: true
//   }
// });

// export default mongoose.model('Cart', cartSchema);



import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      id: String,
      name: String,
      size: String,
      price: Number,
      quantity: Number
    }
  ],
  total: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Cart', CartSchema);
