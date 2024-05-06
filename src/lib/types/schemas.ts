import { z } from 'zod';
import { UserType } from '@prisma/client';

export const UserSignUpSchema = z.object({
  name: z.string().min(1, 'Enter a valid name').max(100, 'Name must be less than 100 characters').regex(/^[a-zA-Z\s'-]+$/, 'Enter a valid name'),
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string().min(1, 'Enter a valid value'),
  type: z.nativeEnum(UserType, {
    invalid_type_error: 'Invalid user type',
  }),
  location: z.string().min(1, 'Enter a valid location').max(100, 'Location must be less than 100 characters').regex(/^\S+(?:\s\S+)*,\s\S+(?:\s\S+)*$/, 'Location must be a state and country separated by a comma (eg. Lagos, Nigeria)'),
  skills: z.string().regex(/^(?:(?:\s*[^,\s]+(?:\s*,\s*|$))+|\s*)$/, 'Enter a valid list of skills').nullish(),
  field: z.string().nullish(),
}).superRefine((data, ctx) => {
  if (data.password !== data.confirmPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['password'],
      fatal: true,
      message: 'Passwords must match',
    });
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['confirmPassword'],
      fatal: true,
      message: 'Passwords must match',
    });
  }

  if (data.type === UserType.CLIENT) {
    if (data.skills) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['skills'],
        fatal: true,
        message: `Skills cannot be present for a user type of ${UserType.CLIENT}`,
      });
    }

    if (!data.field) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['field'],
        fatal: true,
        message: `Field must be present for a user type of ${UserType.CLIENT}`,
      });
    }
  }

  if (data.type === UserType.FREELANCER) {
    if (data.field) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['field'],
        fatal: true,
        message: `Field cannot be present for a user type of ${UserType.FREELANCER}`,
      });
    }

    if (!data.skills) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['skills'],
        fatal: true,
        message: `Skills must be present for a user type of ${UserType.FREELANCER}`,
      });
    }
  }
});

export const UserSignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
