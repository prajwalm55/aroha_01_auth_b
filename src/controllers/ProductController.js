// // controllers/ProductController.js
// import Stock from '../models/Product.js';

// // ✅ Add a Single Product
// export const addProduct = async (req, res) => {
//   try {
//     const { name, size, style, category, price, quantity, color } = req.body;

//     if (!name || !size || !style || !category || !price || !quantity || !color) {
//       return res.status(400).json({ message: "All fields are required including style and color" });
//     }

//     const newProduct = new Stock({ name, size, style, category, price, quantity, color });
//     await newProduct.save();

//     res.status(201).json({ message: 'Product added successfully' });
//   } catch (error) {
//     console.error('Product Add Error:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };
// export const addProducts = async (req, res) => {
//     try {
//       const products = req.body;
  
//       if (
//         !Array.isArray(products) ||
//         products.some(
//           (p) =>
//             !p.name ||
//             !p.size ||
//             !p.style ||
//             !p.category ||
//             !p.color ||       // ✅ ensure color is validated
//             !p.price ||
//             !p.quantity
//         )
//       ) {
//         return res
//           .status(400)
//           .json({ message: "All fields are required including style and color" });
//       }
  
//       await Stock.insertMany(products);
//       res.status(201).json({ message: "Products added successfully" });
//     } catch (error) {
//       console.error("Bulk Product Add Error:", error);
//       res.status(500).json({ message: "Internal Server Error" });
//     }
//   };
  
// // ✅ Get All Products
// export const getAllProducts = async (req, res) => {
//   try {
//     const products = await Stock.find();
//     res.status(200).json(products);
//   } catch (error) {
//     console.error('Get Products Error:', error);
//     res.status(500).json({ message: 'Failed to fetch products' });
//   }
// };

// // ✅ Add Default Style to Existing Products
// export const addStyleToExistingProducts = async (req, res) => {
//   try {
//     const bulkOps = await Stock.updateMany(
//       { style: { $exists: false } },
//       { $set: { style: 'Regular Fit' } }
//     );

//     res.status(200).json({ message: 'Styles updated', result: bulkOps });
//   } catch (err) {
//     console.error('Error updating styles:', err);
//     res.status(500).json({ message: 'Failed to update styles' });
//   }
// };

// // ✅ Delete All Products
// export const deleteAllProducts = async (req, res) => {
//   try {
//     await Stock.deleteMany({});
//     res.status(200).json({ message: 'All products deleted' });
//   } catch (error) {
//     console.error('Delete Products Error:', error);
//     res.status(500).json({ message: 'Error deleting products' });
//   }
// };
// controllers/ProductController.js
import Stock from '../models/Product.js';

// ✅ Add a Single Product
export const addProduct = async (req, res) => {
  try {
    const { name, size, style, category, price, quantity, image } = req.body;

    if (!name || !size || !style || !category || !price || !quantity || !image) {
      return res.status(400).json({ message: "All fields are required including style and image" });
    }

    const newProduct = new Stock({ name, size, style, category, price, quantity, image });
    await newProduct.save();

    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    console.error('Product Add Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// ✅ Bulk Insert Products
export const addProducts = async (req, res) => {
  try {
    const products = req.body;

    if (
      !Array.isArray(products) ||
      products.some(
        (p) =>
          !p.name ||
          !p.size ||
          !p.style ||
          !p.category ||
          !p.image ||         // ✅ updated from color → image
          !p.price ||
          !p.quantity
      )
    ) {
      return res.status(400).json({ message: 'All fields are required including style and image' });
    }

    await Stock.insertMany(products);
    res.status(201).json({ message: 'Products added successfully' });
  } catch (error) {
    console.error('Bulk Product Add Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// ✅ Get All Products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Stock.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Get Products Error:', error);
    res.status(500).json({ message: 'Failed to fetch products' });
  }
};

// ✅ Add Default Style to Existing Products
export const addStyleToExistingProducts = async (req, res) => {
  try {
    const result = await Stock.updateMany(
      { style: { $exists: false } },
      { $set: { style: 'Regular Fit' } }
    );
    res.status(200).json({ message: 'Styles updated', result });
  } catch (error) {
    console.error('Update Style Error:', error);
    res.status(500).json({ message: 'Failed to update styles' });
  }
};

// ✅ Delete All Products
export const deleteAllProducts = async (req, res) => {
  try {
    await Stock.deleteMany({});
    res.status(200).json({ message: 'All products deleted' });
  } catch (error) {
    console.error('Delete Products Error:', error);
    res.status(500).json({ message: 'Error deleting products' });
  }
};
