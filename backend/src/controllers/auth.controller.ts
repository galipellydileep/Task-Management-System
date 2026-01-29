import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { hashPassword } from "../utils/hash";

// TEMP in-memory user store (we will replace with DB later)
const users: any[] = [];

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    const newUser = {
      id: users.length + 1,
      name,
      email,
      password: hashedPassword,
    };

    users.push(newUser);

    // Generate access token
    const accessToken = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "15m" },
    );

    return res.status(201).json({
      message: "User registered successfully",
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
