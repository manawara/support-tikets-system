'use server'
import * as z from 'zod'
import bcrypt from 'bcryptjs'
import { RegisterSchema } from '@/schemas'
import { addUser, generateVerificationToken, getUserByEmail } from '@/data'
import { sendVerificationEmail } from '@/lib/mail'

export const createUser = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid fields' }
  }

  const { firstName, lastName, email, password } = validatedFields.data

  const existingUser = await getUserByEmail(email)
  if (existingUser) {
    return { error: 'Email already in use' }
  }

  const fullName = firstName + ' ' + lastName
  const hashedPassword = await bcrypt.hash(password, 10)

  await addUser(fullName, email, hashedPassword)
  const verificationToken = await generateVerificationToken(email)

  await sendVerificationEmail(verificationToken.token, email, fullName)
  return {
    success: 'Confirmation email sent!',
  }
}
