import { z } from 'zod';
import { TOKENS } from '../strings/tokens';

export const signUpSchema = z.object({
  name: z
    .string()
    .min(TOKENS.validations.name.min.value, TOKENS.validations.name.min.message)
    .max(TOKENS.validations.name.max.value, TOKENS.validations.name.max.message),
  email: z.string().email(TOKENS.validations.email.message),
  password: z
    .string()
    .min(TOKENS.validations.password.min.value, TOKENS.validations.password.min.message)
    .max(TOKENS.validations.password.max.value, TOKENS.validations.password.max.message),
});

export const loginSchema = z.object({
  email: z.string().email(TOKENS.validations.email.message),
  password: z
    .string()
    .min(TOKENS.validations.password.min.value, TOKENS.validations.password.min.message)
    .max(TOKENS.validations.password.max.value, TOKENS.validations.password.max.message),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
