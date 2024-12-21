import express from "express";
import dotenv from "dotenv";
import { ConnectMongoDB } from "./connnection.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;

(async () => {
  try {
    // Connect to MongoDB
    await ConnectMongoDB(URI);
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error.message);
    process.exit(1);
  }
})();

// Routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});
