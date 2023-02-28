import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
  DataType,
} from "sequelize-typescript";
import User from "./user.model";

@Table({
  timestamps: false,
})
export default class Record extends Model {
  @Column({
    allowNull: false,
    type: DataType.FLOAT,
  })
  length!: number;

  @Column({
    allowNull: false,
    defaultValue: new Date(),
  })
  leave_at!: Date;

  @ForeignKey(() => User)
  @Column
  user_id!: number;

  @BelongsTo(() => User)
  user!: User;

  @Column
  comment!: string;
}
