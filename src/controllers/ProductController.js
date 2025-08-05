import Cart from '../models/Cart.js';

export const saveCart = async (req, res) => {
  try {
    const { cartItems, total } = req.body;
    const userId = req.user.id;

    const newCart = new Cart({
      user: userId,
      items: cartItems,
      total
    });

    await newCart.save();

    res.status(201).json({ message: 'Cart saved successfully' });
  } catch (err) {
    console.error('❌ Error saving cart:', err);
    res.status(500).json({ message: 'Failed to save cart' });
  }
};
