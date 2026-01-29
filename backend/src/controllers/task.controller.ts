import { Request, Response } from "express";

let tasks: any[] = [];

export const createTask = (req: Request, res: Response) => {
  const { title, description } = req.body;

  const newTask = {
    id: Date.now(),
    title,
    description,
    completed: false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const getTasks = (req: Request, res: Response) => {
  res.json(tasks);
};

export const getTaskById = (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};

export const updateTask = (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ message: "Task not found" });

  task.title = req.body.title ?? task.title;
  task.description = req.body.description ?? task.description;

  res.json(task);
};

export const deleteTask = (req: Request, res: Response) => {
  tasks = tasks.filter((t) => t.id !== Number(req.params.id));
  res.json({ message: "Task deleted" });
};

export const toggleTask = (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ message: "Task not found" });

  task.completed = !task.completed;
  res.json(task);
};
