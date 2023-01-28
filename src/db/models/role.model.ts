import { Table, Column, Model, HasMany } from "sequelize-typescript";
import User from "./user.model";

@Table({
  timestamps: false,
})
export default class Role extends Model {
  @Column({
    allowNull: false,
  })
  role_name!: string;

  @Column({
    allowNull: false,
  })
  right_list!: string;

  @HasMany(() => User)
  users!: User[];
}
