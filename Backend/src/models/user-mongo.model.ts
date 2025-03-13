import { model, Schema } from 'mongoose';
import { TOKENS } from '../utils/tokens.utils';

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

const User = model(TOKENS.userModelName, userSchema);

export default User;
