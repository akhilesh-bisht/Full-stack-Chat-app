import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { ConnectMongoDB } from "./connnection.js";
import router from "./routes/user.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config();

// middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;
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

app.use("/api/user", router);
