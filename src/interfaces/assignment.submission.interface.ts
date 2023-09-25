import { Types, Document } from 'mongoose';

export default interface IAssignmentSubmission extends Document {
  _id?: string;
  assignment_id: string | Types.ObjectId;
  link: string;
  user_id: string | Types.ObjectId;
  deleted?: boolean;
}
