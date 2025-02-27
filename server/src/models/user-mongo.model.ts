import { Document, model, Schema } from 'mongoose';
import IUser from '../interfaces/IUser';
import { TOKENS } from '../tokens';

type IUserDocument = IUser & Document;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model<IUserDocument>(TOKENS.User, userSchema);

export default User;
