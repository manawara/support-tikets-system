import { db } from '@/lib/db'
import { User } from 'next-auth'
import { v4 as uuidv4 } from 'uuid'

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

//verificationtoken

export const getVerificationToken = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        email,
      },
    })
    return verificationToken
  } catch (err) {
    return null
  }
}

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4()
  const expires = new Date(new Date().getTime() + 3600 * 1000)
  const existingToken = await getVerificationToken(email)
  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        email_token: {
          email: existingToken.email,
          token: existingToken.token,
        },
      },
    })
  }
  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  })

  return verificationToken
}
