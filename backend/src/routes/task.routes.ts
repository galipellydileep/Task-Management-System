import { Router } from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  toggleTask,
} from "../controllers/task.controller";

const router = Router();

router.post("/tasks", createTask);
router.get("/tasks", getTasks);
router.get("/tasks/:id", getTaskById);
router.patch("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);
router.patch("/tasks/:id/toggle", toggleTask);

export default router;
