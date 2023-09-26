import z from 'zod';
import { Types } from 'mongoose';

class Validation {
  // Validation schema for creating a new assignment submission
  create = {
    body: z.object({
      assignment_id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
      link: z.string().min(1).max(255),
      user_id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
    }),
  };

  // Validation schema for updating an assignment submission
  update = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
    }),
    body: z.object({
      assignment_id: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
      link: z.string().min(1).max(255).optional(),
      user_id: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
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
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
      assignment_id: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
      link: z.string().min(1).max(255).optional(),
      user_id: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
      deleted: z.string().optional(),
    }),
  };

  // Validation schema for reading an assignment submission by ID
  getById = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
    }),
  };
}

export const assignmentSubmissionValidation = new Validation();
