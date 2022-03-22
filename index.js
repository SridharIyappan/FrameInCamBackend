import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectdb from "./Middlewares/dbConnection.js";
import vendorAccount from "./Routes/vendorAccount.js";
// import imageRouter from './Route/pictureRoute.js';
import cookieParser from "cookie-parser";
import errorMiddleware from "./Middlewares/error.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 3001;

connectdb();

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use("/api", vendorAccount);
// app.use("/api", imageRouter);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`http://localhost:${port}, on ${process.env.NODE_ENV} mode`);
});
