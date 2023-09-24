import { Schema, model, Types } from "mongoose";
import ISubject from "../../interfaces/subject.interface";
import { DATABASES } from "../../constants";

const SubjectSchema = new Schema<ISubject>(
  {
    title: {
      type: String,
      required: true,
    },
    teacher_id: {
      type: Schema.Types.ObjectId,
      ref: DATABASES.USER, // Replace with the actual model name for users
      required: true,
      autopopulate: true, // Enable autopopulate for this field
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Apply the mongoose-autopopulate plugin to the schema
SubjectSchema.plugin(require('mongoose-autopopulate'));

const SubjectModel = model<ISubject>(
  DATABASES.SUBJECT, // Replace with the actual model name for subjects
  SubjectSchema
);

export default SubjectModel;
