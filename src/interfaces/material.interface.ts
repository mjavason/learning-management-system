import { Types } from "mongoose";

export default interface IMaterial {
  _id?: string | Types.ObjectId;
  subject_id: string | Types.ObjectId;
  link: string;
  deleted?: boolean;
}