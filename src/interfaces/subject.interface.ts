import { Document, Types } from 'mongoose';

export default interface ISubject extends Document {
  _id?: string | Types.ObjectId;
  title: string;
  teacher_id: string | Types.ObjectId;
  deleted?: boolean;
}
