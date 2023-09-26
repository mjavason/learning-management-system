import { string, object } from 'zod';

class Validation {
  showDemo = {
    body: object({
      message: string({ required_error: 'message is required' }),
      title: string().optional(),
    }),
  };
}

export const demoValidation = new Validation();
