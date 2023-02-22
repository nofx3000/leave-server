import { Table, Column, Model, HasMany } from "sequelize-typescript";
import Leave from "./leave.model";

@Table({
  timestamps: false,
})
export default class Task extends Model {
  @Column({
    allowNull: false,
  })
  task_name!: string;

  @Column({
    allowNull: false,
  })
  operator_list!: string;

  @HasMany(() => Leave)
  leaves!: Leave[];
}
