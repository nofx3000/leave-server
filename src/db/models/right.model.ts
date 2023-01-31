import { Table, Column, Model, HasMany } from "sequelize-typescript";

type MethodType = "get" | "post" | "put" | "delete" | "patch";

@Table({
  timestamps: false,
})
export default class Right extends Model {
  @Column({
    allowNull: false,
  })
  right_name!: string;

  @Column
  pid!: number;

  @Column
  service_name!: string;

  @Column
  service_action!: string;

  @Column({
    defaultValue: false,
  })
  is_menu!: boolean;
}
