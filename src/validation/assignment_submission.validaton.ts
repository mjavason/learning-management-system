import z from 'zod';
import { Types } from 'mongoose';

class AssignmentSubmissionValidation {
  // Validation schema for creating a new assignment submission
  create = {
    body: z.object({
      assignment_id: z.string().refine(this.isValidObjectIdString, {
        message: 'Invalid Assignment ObjectId format in assignment_id',
      }),
      link: z.string().min(1).max(255),
      user_id: z.string().refine(this.isValidObjectIdString, {
        message: 'Invalid User ObjectId format in user_id',
      }),
    }),
  };

  // Validation schema for updating an assignment submission
  update = {
    params: z.object({
      id: z.string().refine(this.isValidObjectIdString, {
        message: 'Invalid AssignmentSubmission ObjectId format in id',
      }),
    }),
    body: z.object({
      assignment_id: z
        .string()
        .refine(this.isValidObjectIdString, {
          message: 'Invalid Assignment ObjectId format in assignment_id',
        })
        .optional(),
      link: z.string().min(1).max(255).optional(),
      user_id: z
        .string()
        .refine(this.isValidObjectIdString, {
          message: 'Invalid User ObjectId format in user_id',
        })
        .optional(),
      deleted: z.boolean().optional(),
    }),
  };

  // Validation schema for finding assignment submissions
  find = {
    query: z.object({
      _id: z
        .string()
        .refine(this.isValidObjectIdString, {
          message: 'Invalid ObjectId format in _id',
        })
        .optional(),
      assignment_id: z
        .string()
        .refine(this.isValidObjectIdString, {
          message: 'Invalid Assignment ObjectId format in assignment_id',
        })
        .optional(),
      link: z.string().min(1).max(255).optional(),
      user_id: z
        .string()
        .refine(this.isValidObjectIdString, {
          message: 'Invalid User ObjectId format in user_id',
        })
        .optional(),
      deleted: z.string().optional(),
    }),
  };

  // Validation schema for reading an assignment submission by ID
  getById = {
    params: z.object({
      id: z.string().refine(this.isValidObjectIdString, {
        message: 'Invalid AssignmentSubmission ObjectId format in id',
      }),
    }),
  };

  // Helper method to validate ObjectId strings
  isValidObjectIdString(value: string) {
    return typeof value === 'string' && Types.ObjectId.isValid(value);
  }
}

export const assignmentSubmissionValidation = new AssignmentSubmissionValidation();
