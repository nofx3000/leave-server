import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import Role from "./role.model";

@Table({
  timestamps: false,
})
export default class User extends Model {
  @Column({
    allowNull: false,
  })
  username!: string;

  @Column({
    allowNull: false,
  })
  password!: string;

  @Column({
    allowNull: false,
  })
  realname!: string;

  @Column({
    allowNull: false,
  })
  catagory!: number;

  @ForeignKey(() => Role)
  @Column
  role_id!: number;

  @BelongsTo(() => Role)
  role!: Role;
}
