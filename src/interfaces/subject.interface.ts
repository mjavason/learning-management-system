import { Types } from "mongoose";

export default interface ISubject {
  _id?: string | Types.ObjectId;
  title: string;
  teacher_id: string | Types.ObjectId;
  deleted?:boolean;
}