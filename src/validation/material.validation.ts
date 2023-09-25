import { Types } from 'mongoose';
import z from 'zod';

class MaterialValidation {
  // Validation schema for creating a new material
  create = {
    body: z.object({
      subject_id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid Subject ObjectId format in subject_id',
      }),
      link: z.string().min(1).max(255),
    }),
  };

  // Validation schema for updating a material
  update = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid Material ObjectId format in id',
      }),
    }),
    body: z.object({
      subject_id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid Subject ObjectId format in subject_id',
      }).optional(),
      link: z.string().min(1).max(255).optional(),
      deleted: z.boolean().optional(),
    }),
  };

  // Validation schema for finding materials
  find = {
    query: z.object({
      _id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format in _id',
      }).optional(),
      subject_id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid Subject ObjectId format in subject_id',
      }).optional(),
      link: z.string().min(1).max(255).optional(),
      deleted: z.string().optional(),
    }),
  };

  // Validation schema for reading a material by ID
  getById = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid Material ObjectId format in id',
      }),
    }),
  };
}

export const materialValidation = new MaterialValidation();
