import express from "express";
import mongoose from "mongoose";
import productRouter from './routes/product'
import authRouter from './routes/auth'
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", productRouter);
app.use("/api", authRouter);
mongoose.connect(`mongodb://localhost:27017/bai-thi`);

export const viteNodeApp = app;
