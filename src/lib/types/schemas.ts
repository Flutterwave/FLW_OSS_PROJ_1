import { z } from 'zod';

export const UserSignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
