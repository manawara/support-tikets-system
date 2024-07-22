import { z } from 'zod'

export const RegisterSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First name is required' })

    .min(3, { message: 'First name must be at least 3 characters' })
    .max(50, { message: 'Fist name cannot exceed 50 characters' }),
  lastName: z
    .string()
    .min(3, { message: 'Last name must be at least 3 characters' })
    .max(50, { message: 'Last name cannot exceed 50 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
      message:
        'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
    }),
})

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: 'Password is required' }),
})
