import { Types } from 'mongoose';
import z from 'zod';

class AssignmentValidation {
  // Validation schema for creating a new assignment
  create = {
    body: z.object({
      subject_id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid Subject ObjectId format in subject_id',
      }),
      description: z.string().min(1).max(255),
    }),
  };

  // Validation schema for updating an assignment
  update = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid Assignment ObjectId format in id',
      }),
    }),
    body: z.object({
      subject_id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid Subject ObjectId format in subject_id',
      }).optional(),
      description: z.string().min(1).max(255).optional(),
      deleted: z.boolean().optional(),
    }),
  };

  // Validation schema for finding assignments
  find = {
    query: z.object({
      _id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format in _id',
      }).optional(),
      subject_id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid Subject ObjectId format in subject_id',
      }).optional(),
      description: z.string().min(1).max(255).optional(),
      deleted: z.string().optional(),
    }),
  };

  // Validation schema for reading an assignment by ID
  getById = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid Assignment ObjectId format in id',
      }),
    }),
  };
}

export const assignmentValidation = new AssignmentValidation();
