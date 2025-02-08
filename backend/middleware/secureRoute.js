import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const secureRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt; // Corrected token extraction

    if (!token) {
      return res.status(401).json({ error: "No token, authorization denied" });
    }

    const decoded = jwt.verify(token, process.env.JWT_TOKEN); // Verify token

    const user = await User.findById(decoded.userId).select("-password"); // Fetch user without password

    if (!user) {
      return res.status(401).json({ error: "No user found" });
    }

    req.user = user; // Attach user to request object
    next();
  } catch (error) {
    console.error("Error in secureRoute:", error);
    res.status(401).json({ error: "Invalid token or unauthorized" });
  }
};

export default secureRoute;
