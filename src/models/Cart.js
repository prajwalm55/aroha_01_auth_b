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
  }
}, { timestamps: true });

export default mongoose.model('Cart', CartSchema);
