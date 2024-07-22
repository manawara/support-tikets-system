import { db } from '@/lib/db'
import { User } from 'next-auth'
export const getUserByEmail = async (email: string) => {
  return await db.user.findFirst({
    where: {
      email,
    },
  })
}

export const addUser = async (fullName: string, email: string, hashedPassword: string): Promise<User> => {
  return await db.user.create({
    data: {
      name: fullName,
      email,
      password: hashedPassword,
    },
  })
}
