import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

mongoose.set("strictQuery", false);

const connect = () => {
  mongoose
    .connect(process.env.MONGO, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};


connect();

app.use(cookieParser());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
