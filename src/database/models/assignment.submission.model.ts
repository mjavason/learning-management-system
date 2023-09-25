import { Schema, model, Types } from 'mongoose';
import IAssignmentSubmission from '../../interfaces/assignment.submission.interface';
import { DATABASES } from '../../constants';

const AssignmentSubmissionSchema = new Schema<IAssignmentSubmission>(
  {
    assignment_id: {
      type: Schema.Types.ObjectId,
      autopopulate: true, // Enable autopopulate for this field
      ref: DATABASES.ASSIGNMENT, // Replace with the actual model name for assignments
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: DATABASES.USER, // Replace with the actual model name for users
      required: true,
      autopopulate: true, // Enable autopopulate for this field
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
  },
);

// Apply the mongoose-autopopulate plugin to the schema
AssignmentSubmissionSchema.plugin(require('mongoose-autopopulate'));

const AssignmentSubmissionModel = model<IAssignmentSubmission>(
  DATABASES.ASSIGNMENT_SUBMISSION,
  AssignmentSubmissionSchema,
);

export default AssignmentSubmissionModel;
