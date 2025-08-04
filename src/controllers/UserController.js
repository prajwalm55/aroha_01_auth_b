// import User from "../models/User.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config();
// export const registerUser = async (req, res) => {
//   try {
//     const { name, email, mobile, password } = req.body;
//     if (!name || !email || !mobile || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already registered" });
//     }
//     const hashed = await bcrypt.hash(password, 10);

//     const user = new User({ name, email, mobile, password: hashed });
//     await user.save();

//     res.status(201).json({ message: "User Registered Successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Server error.", data: error });
//   }
// };


// export const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     console.log("Login attempt for:", email);

//     if (!email || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "User does not exist" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid password" });
//     }

//     // ✅ DEBUG: check if JWT_SECRET is loaded
//     console.log("JWT_SECRET:", process.env.JWT_SECRET);

//     if (!process.env.JWT_SECRET) {
//       return res.status(500).json({ message: "JWT_SECRET is missing in environment variables" });
//     }

//     const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: false,
//       sameSite: "Lax",
//       maxAge: 1 * 24 * 60 * 60 * 1000,
//     });

//     return res.status(200).json({
//       message: "Login Successful",
//       token,
//     });

//   } catch (error) {
//     console.error("Login error:", error);
//     return res.status(500).json({ message: "Server error", error: error.message });
//   }
// };


// export const getUserDetails = async (req, res) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) {
//       return res.status(401).json({ message: "Token missing" });
//     }
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log(decoded);
    
//     const user = await User.findOne({_id:decoded.userID});
//     if (!user) {
//       res.status(404).json({ message: "User Not Found" });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     return res.status(500).json({ message: "Server error", error });
//   }
// };

// export const logout=async(req,res)=>{
//     try {
//         res.cookie("token", "", {
//       httpOnly: true,
//       secure: false,
//       sameSite: "Lax",
//       expires:new Date(0),
//     });

//     res.status(200).json({message:"Logout Successfull"});
//     } catch (error) {
//             return res.status(500).json({ message: "Server error", error });

//     }
// }


import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// ✅ Register User with Role (admin or user)
export const registerUser = async (req, res) => {
  try {
    const { name, email, mobile, password, role } = req.body;

    if (!name || !email || !mobile || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      mobile,
      password: hashed,
      role: role === "admin" ? "admin" : "user", // ✅ store correct role
    });

    await user.save();

    res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error.", data: error });
  }
};


// ✅ Login User
// export const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     console.log("Login attempt for:", email);

//     if (!email || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "User does not exist" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid password" });
//     }

//     if (!process.env.JWT_SECRET) {
//       return res.status(500).json({ message: "JWT_SECRET is missing in environment variables" });
//     }

//     const token = jwt.sign(
//       { userID: user._id, role: user.role }, // include role in token
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: false,
//       sameSite: "Lax",
//       maxAge: 1 * 24 * 60 * 60 * 1000,
//     });

//     return res.status(200).json({
//       message: "Login Successful",
//       token,
//       role: user.role,
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     return res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

export const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body; // include role in frontend request

    if (!email || !password || !role) {
      return res.status(400).json({ message: "All fields including role are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // ❌ If role does not match, reject login
    if (user.role !== role) {
      return res.status(403).json({ message: `Access denied for ${role} login` });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userID: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });

    // return res.status(200).json({
    //   message: "Login successful",
    //   token,
    //   role: user.role,
    // });

    // controllers/auth.js or similar
res.status(200).json({
  name: user.name,
  email: user.email,
  role: user.role,
});


  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};



// ✅ Get Logged In User Details
export const getUserDetails = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Token missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded JWT:", decoded);

    const user = await User.findById(decoded.userID);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

// ✅ Logout
export const logout = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      expires: new Date(0),
    });

    res.status(200).json({ message: "Logout Successful" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};
