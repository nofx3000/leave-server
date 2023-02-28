import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
  HasMany,
} from "sequelize-typescript";
import Role from "./role.model";
import Division from "./division.model";
import Leave from "./leave.model";
import Record from "./record.model";

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

  @ForeignKey(() => Division)
  @Column
  division_id!: number;

  @BelongsTo(() => Division)
  division!: Division;

  @HasMany(() => Leave)
  leaves!: Leave[];

  @HasMany(() => Record)
  records!: Record[];
}
