import { Router } from "express";
import { register } from "../controllers/auth.controller";

const router = Router();

// Register route
router.post("/register", register);

export default router;
