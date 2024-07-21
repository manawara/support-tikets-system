'use server'
import * as z from 'zod'

import { RegisterSchema } from '@/schemas'
import bcrypt from 'bcrypt'
import { db } from '@/lib/db'
export const createUser = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid fields' }
  }

  const { firstName, lastName, email, password } = validatedFields.data

  const fullName = firstName + ' ' + lastName
  const hashedPassword = await bcrypt.hash(password, 10)
  const existingUser = await db.user.findFirst({
    where: {
      email,
    },
  })

  if (existingUser) {
    return { error: 'Email already in use' }
  }

  await db.user.create({
    data: {
      name: fullName,
      email,
      password: hashedPassword,
    },
  })
  return {
    success: 'The user has been created!',
  }
}
