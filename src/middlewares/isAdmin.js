import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const isAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userID);
    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json({ message: "Error verifying admin access" });
  }
};
