import express from 'express';
import sequelize from './db'; 
import taskRoutes from './routes/taskRoutes';
import 'reflect-metadata';

// Create an Express application
const app = express();
// Set the port to default 3000
const PORT = process.env.PORT || 3000;  

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use the taskRoutes for handling task-related routes
app.use(taskRoutes);

// Sync the Sequelize models with the database and start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});
