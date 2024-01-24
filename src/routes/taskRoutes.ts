import express from 'express';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController';

// Create an Express router
const router = express.Router();

// Define routes for different task-related actions

/**
 * Get all tasks
 * @route GET /tasks
 */
router.get('/tasks', getTasks);

/**
 * Create a new task
 * @route POST /tasks
 */
router.post('/tasks', createTask);

/**
 * Update a task by ID
 * @route PUT /tasks/:id
 */
router.put('/tasks/:id', updateTask);

/**
 * Delete a task by ID
 * @route DELETE /tasks/:id
 */
router.delete('/tasks/:id', deleteTask);

// Export the router for use in other parts of the application
export default router;
