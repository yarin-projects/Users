import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { TOKENS } from '../tokens';

@Table({ tableName: TOKENS.users, modelName: TOKENS.User, timestamps: false })
export class User extends Model {
  @Column({
    type: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
  })
  _id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;
}
