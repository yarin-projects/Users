import { Types } from "mongoose";
import IBaseUser from "./base-user.interface";

export interface IMongoUser extends IBaseUser {
  _id: Types.ObjectId;
  name: string;
}
