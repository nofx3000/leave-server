import { Table, Column, Model, HasMany } from "sequelize-typescript";

@Table({
  timestamps: false,
})
export default class Right extends Model {
  @Column({
    allowNull: false,
  })
  role_name!: string;

  @Column({
    allowNull: false,
  })
  right_list!: string;
}
