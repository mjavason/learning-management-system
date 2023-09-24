import { Document, Types } from 'mongoose';

export default interface IAssignment extends Document {
  _id?: string | Types.ObjectId;
  subject_id: string | Types.ObjectId;
  description: string;
  deleted?: boolean;
}
