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

export const activateAccount = async (email: string): Promise<void> => {
  const emailVerified = await db.user.update({
    where: { email },
    data: {
      emailVerified: new Date(),
    },
  })
}

export const verificationAccount = async (token: string) => {
  try {
    const tokenValid = await db.verificationToken.findUnique({
      where: { token },
    })

    if (tokenValid) {
      const isActivatedUser = await db.user.findFirst({
        where: { email: tokenValid.email },
      })

      if (isActivatedUser?.emailVerified !== null) {
        return { error: 'Account activated' }
      }
      if (tokenValid?.expires > new Date()) {
        await activateAccount(tokenValid.email)
      } else {
        return { error: 'Token expired!' }
      }
    }

    if (!tokenValid) return { error: 'Token is invalid' }
    return {
      success: 'Account was successfull activated!',
    }
  } catch (err) {
    return { error: 'Something went wrong!' }
  }
}
