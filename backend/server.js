import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 4002;

app.get("/", (req, res) => {
  res.send("heello world");
});
app.listen(PORT, () => console.log(`port started at ${PORT}`));
