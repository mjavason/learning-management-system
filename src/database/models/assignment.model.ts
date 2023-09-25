import { Schema, model, Types } from "mongoose";
import IAssignment from "../../interfaces/assignment.interface";
import { DATABASES } from "../../constants";

const AssignmentSchema = new Schema<IAssignment>(
  {
    subject_id: {
      type: Schema.Types.ObjectId,
      ref: DATABASES.SUBJECT,
      required: true,
      autopopulate: true, // Enable autopopulate for this field
    },
    description: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      required: true,
      select: false,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Apply the mongoose-autopopulate plugin to the schema
AssignmentSchema.plugin(require('mongoose-autopopulate'));

const AssignmentModel = model<IAssignment>(
  DATABASES.ASSIGNMENT,
  AssignmentSchema
);

export default AssignmentModel;
