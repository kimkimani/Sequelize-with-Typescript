// controllers/taskController.ts
import { Request, Response } from 'express';
import { Task } from '../models/Task';

export const createTask = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const task = await Task.create({ title, description });
  res.json(task);
};

export const getTasks = async (_: Request, res: Response) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};


export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;

  // Find the task by its primary key (ID)
  const task = await Task.findByPk(id);

  // Check if the task exists
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  // Update task properties with the new values
  task.title = title;
  task.description = description;

  // Save the updated task to the database
  await task.save();

  res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  // Find the task by its primary key (ID)
  const { id } = req.params;
  const task = await Task.findByPk(id);

  // Check if the task exists
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  // Delete the task from the database
  await task.destroy();
  // Respond with a success message
  res.json({ message: 'Task deleted successfully' });
};
