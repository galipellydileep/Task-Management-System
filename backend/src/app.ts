import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import taskRoutes from "./routes/task.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use(taskRoutes);

app.get("/", (req, res) => {
  res.send("Task Management API is running");
});

export default app;
