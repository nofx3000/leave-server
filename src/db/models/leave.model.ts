import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import User from "./user.model";
import Task from "./task.model";

@Table({
  timestamps: false,
})
export default class Leave extends Model {
  @Column({
    allowNull: false,
  })
  length!: number;

  @Column({
    allowNull: false,
    defaultValue: new Date(),
  })
  created_at!: Date;

  @ForeignKey(() => User)
  @Column
  user_id!: number;

  @BelongsTo(() => User)
  user!: User;

  @ForeignKey(() => Task)
  @Column
  task_id!: number;

  @BelongsTo(() => Task)
  task!: Task;

  @Column
  comment!: string;

  @Column({
    allowNull: false,
    defaultValue: false,
  })
  approved!: boolean;
}
