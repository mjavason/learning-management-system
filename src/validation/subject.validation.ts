import { Types } from 'mongoose';
import z from 'zod';

class Validation {
  // Validation schema for creating a new subject
  create = {
    body: z.object({
      title: z.string().min(1).max(255),
      teacher_id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
    }),
  };

  // Validation schema for updating a subject
  update = {
    params: z.object({
      id: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
    }),
    body: z.object({
      title: z.string().min(1).max(255).optional(),
      teacher_id: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
      deleted: z.boolean().optional(),
    }),
  };

  // Validation schema for finding subjects
  find = {
    query: z.object({
      _id: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
      title: z.string().min(1).max(255).optional(),
      teacher_id: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
      deleted: z.string().optional(),
    }),
  };

  // Validation schema for reading a subject by ID
  getById = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
    }),
  };
}

export const subjectValidation = new Validation();
