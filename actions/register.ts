'use server'
import * as z from 'zod'
import bcrypt from 'bcryptjs'
import { RegisterSchema } from '@/schemas'
import { addUser, generateVerificationToken, getUserByEmail } from '@/data'
export const createUser = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid fields' }
  }

  const { firstName, lastName, email, password } = validatedFields.data

  const fullName = firstName + ' ' + lastName
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)
  if (existingUser) {
    return { error: 'Email already in use' }
  }
  await addUser(fullName, email, hashedPassword)
  const verificationToken = await generateVerificationToken(email)

  //todo sent email
  return {
    success: 'Confirmation email sent!',
  }
}
