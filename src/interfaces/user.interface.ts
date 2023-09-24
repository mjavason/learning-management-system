import { Types } from "mongoose";

export default interface IUser {
  _id?: string | Types.ObjectId;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  role: 'teacher' | 'student' | 'admin';
  deleted?:boolean;
}