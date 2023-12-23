import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import userRouter from "./routes/user.route.js";
import authroute from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";

// import listingRouter from "./routes/listing.route.js";
// import cors from 'cors';
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => [console.log("Connected to MongoDB")])
  .catch((err) => {
    console.log("Error-Could not connect to Mongo");
  });
const app = express();
// app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.listen(3000, () => {
  console.log("Server is Running");
});
app.use("/api", userRouter);
app.use("/api/auth", authroute);
// app.use("/api/listing", listingRouter);
// app.use("/api/auth", authroute);

// app.use((err, req, res, next) => {
//   const statusCode = err.message || 500;
//   const message = err.message || "Internal Server Error ";
//   return res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });
app.use((err, req, res, next) => {
  // console.error(err); // Log the error

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "../client/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
// });
