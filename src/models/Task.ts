// models/Task.ts
import { Table, Column, DataType,Model} from 'sequelize-typescript';

@Table({
   timestamps: true ,
   tableName: "tasks",
   modelName: "Task"
})

export class Task extends Model {

  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })

  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
   title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;
}
