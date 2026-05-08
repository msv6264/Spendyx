import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js"

dotenv.config();

export async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(404).json({ message: "Token not found !!" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: "User no longer exists" });
    }

    req.user = { id: decoded.userId };
    next();

  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}
