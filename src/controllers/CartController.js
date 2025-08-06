// import Cart from '../models/Cart.js';

// export const saveCart = async (req, res) => {
//   try {
//     const { cartItems, total } = req.body;
//     const userId = req.user?.id; // ✅ from isAuthenticated middleware

//     if (!userId) {
//       return res.status(401).json({ message: 'User not authenticated' });
//     }

//     const cart = new Cart({
//       user: userId,
//       items: cartItems,
//       total
//     });

//     await cart.save();
//     res.status(201).json({ message: 'Cart saved successfully!' });
//   } catch (error) {
//     console.error("Save Cart Error:", error);
//     res.status(500).json({ message: 'Failed to save cart' });
//   }
// };


// ✅ src/controllers/CartController.js

import CartModel from '../models/Cart.js';

export const saveCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { cartItems, total } = req.body;

    const newCart = new CartModel({
      user: userId,
      items: cartItems,
      total
    });

    await newCart.save();

    res.status(201).json({ message: 'Cart saved successfully' });
  } catch (error) {
    console.error('Cart Save Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
