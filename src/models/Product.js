import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: String,
  size: String,
  price: Number,
  quantity: Number
});

const Product = mongoose.model('Product', productSchema);

export default Product;
