import { Document, Types } from 'mongoose';

export default interface IMaterial extends Document {
  _id?: string | Types.ObjectId;
  subject_id: string | Types.ObjectId;
  link: string;
  deleted?: boolean;
}
