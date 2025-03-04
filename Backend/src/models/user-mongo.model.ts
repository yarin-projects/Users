import { Document, model, Schema } from 'mongoose';
import IUser from '../interfaces/user.interface';
import { TOKENS } from '../utils/tokens.utils';

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
