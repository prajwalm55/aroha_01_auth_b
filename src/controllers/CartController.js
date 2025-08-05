import Cart from '../models/Cart.js';

export const saveCart = async (req, res) => {
  try {
    const { cartItems, total } = req.body;
    const userId = req.user.id; // From token via isAuthenticated

    const cart = new Cart({
      user: userId,
      items: cartItems,
      total
    });

    await cart.save();
    res.status(201).json({ message: 'Cart saved successfully!' });
  } catch (error) {
    console.error("Save Cart Error:", error);
    res.status(500).json({ message: 'Failed to save cart' });
  }
};
