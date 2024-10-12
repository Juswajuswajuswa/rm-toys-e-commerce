import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { connectDb } from "./lib/db.js";
import { handleError } from "./middleware/handleError.js";

// routes
import authRoutes from "../api/routes/auth.route.js";
import productRoutes from "../api/routes/product.route.js";
import userRoutes from '../api/routes/user.route.js'
import filterRoutes from '../api/routes/filter.route.js'
//
import cors from "cors";

// Load environment variables from .env file
config();

const app = express();
const PORT = process.env.PORT;

// Verify that the environment variables are loaded
app.use(cors({
  origin: process.env.CLIENT_URL, // Make sure this matches the frontend origin
  credentials: true
}));

console.log(process.env.CLIENT_URL)
app.use(express.json());
app.use(cookieParser());

app.use(`/api/auth`, authRoutes);
app.use(`/api/products`, productRoutes);
app.use(`/api/user`, userRoutes)
app.use(`/api/filter`, filterRoutes)

app.use(handleError);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server running on ${PORT}`);
});
