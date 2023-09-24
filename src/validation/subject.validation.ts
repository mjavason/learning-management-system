import { Types } from 'mongoose';
import z from 'zod';

class SubjectValidation {
  isValidObjectIdString(value: string) {
    return typeof value === 'string' && Types.ObjectId.isValid(value);
  }

  // Validation schema for creating a new subject
  create = {
    body: z.object({
      title: z.string().min(1).max(255),
      teacher_id: z.string().refine(this.isValidObjectIdString, {
        message: 'Invalid Teacher ObjectId format',
      }),
    }),
  };

  // Validation schema for updating a subject
  update = {
    params: z.object({
      id: z.string().refine(this.isValidObjectIdString, {
        message: 'Invalid Subject ObjectId format in id',
      }).optional(),
    }),
    body: z.object({
      title: z.string().min(1).max(255).optional(),
      teacher_id: z.string().refine(this.isValidObjectIdString, {
        message: 'Invalid Teacher ObjectId format in teacher_id',
      }).optional(),
      deleted: z.boolean().optional(),
    }),
  };

  // Validation schema for finding subjects
  find = {
    query: z.object({
      _id: z.string().refine(this.isValidObjectIdString, {
        message: 'Invalid ObjectId format in _id',
      }).optional(),
      title: z.string().min(1).max(255).optional(),
      teacher_id: z.string().refine(this.isValidObjectIdString, {
        message: 'Invalid ObjectId format in teacher_id',
      }).optional(),
      deleted: z.string().optional(),
    }),
  };

  // Validation schema for reading a subject by ID
  getById = {
    params: z.object({
      id: z.string().refine(this.isValidObjectIdString, {
        message: 'Invalid Subject ObjectId format in id',
      }).optional(),
    }),
  };
}

export const subjectValidation = new SubjectValidation();
