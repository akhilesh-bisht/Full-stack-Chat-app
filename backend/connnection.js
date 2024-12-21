import mongoose from "mongoose";

export async function ConnectMongoDB(url) {
  if (!url) {
    console.error("MongoDB URI is missing. Check your environment variables.");
    throw new Error("MongoDB URI is required");
  }
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}
