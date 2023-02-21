import { Table, Column, Model, HasMany } from "sequelize-typescript";
import User from "./user.model";

@Table({
  timestamps: false,
})
export default class Division extends Model {
  @Column({
    allowNull: false,
  })
  realname!: string;

  @HasMany(() => User)
  people!: User[];
}
