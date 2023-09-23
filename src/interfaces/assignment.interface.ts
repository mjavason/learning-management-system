import { Types } from "mongoose";

export default interface IAssignment {
  _id?: string | Types.ObjectId;
  subject_id: string | Types.ObjectId;
  description: string;
  deleted?:boolean;
}