import { z } from 'zod';

export const signUpSchema = z.object({
  name: z.string().min(2, 'Name is required').max(20, 'Name must be less than 20 characters'),
  email: z.string().email('Invalid email'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(25, 'Password must be less than 25 characters'),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
