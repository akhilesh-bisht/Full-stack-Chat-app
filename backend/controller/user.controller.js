import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createToken from "../jwt/tokenGenerate.js";

export const signup = async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;
  try {
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: "User already exists" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    if (newUser) {
      createToken(newUser._id, res);
      res
        .status(200)
        .json({ message: "User registered successfully", newUser });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Failed to register user" });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    createToken(user._id, res);
  } catch (error) {
    res.status(500).json({ error: "Failed to login" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt-token");
    res.send({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to logout" });
  }
};
