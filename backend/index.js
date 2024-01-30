import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

//routes
import adminRoutes from "./routes/adminRoutes.js";
import templateRoutes from "./routes/templateRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();
const app = express();
const PORT = 8000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongodb server");
  } catch (err) {
    console.log(err);
  }
};

//middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/admin", adminRoutes);
app.use("/api/template", templateRoutes);
app.use("/api/item", itemRoutes);

app.listen(PORT, async () => {
  console.log("Connecting to database...");
  await connect();
  console.log(`Server started on port ${PORT}`);
});
