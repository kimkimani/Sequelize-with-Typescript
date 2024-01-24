// sequelize.ts
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: 'Task',
  host: 'localhost',
  username: 'postgres',
  password: 'pass',
  dialect: 'postgres', // or 'mysql' for MySQL
  // specify the path to your models
  //port: 5344,
  models: [__dirname + '/models'],
});

export default sequelize;
