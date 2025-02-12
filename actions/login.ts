'use server'
import { LoginSchema } from '@/schemas'
import * as z from 'zod'
import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import { generateVerificationToken, getUserByEmail } from '@/data'
import { sendVerificationEmail } from '@/lib/mail'

const loginUser = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      error: 'Invalid fields',
    }
  }
  const { email, password } = validatedFields.data

  const existingUser = await getUserByEmail(email)
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return {
      error: 'Email does not exist or password invalid!',
    }
  }
  if (!existingUser.emailVerified) {
    const { token } = await generateVerificationToken(email)
    await sendVerificationEmail(token, email, existingUser.name as string)

    return { success: 'Confirmation sent to email' }
  }
  try {
    await signIn('credentials', { email, password, redirectTo: DEFAULT_LOGIN_REDIRECT })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials!' }
        default:
          return { error: 'Something went wrong!' }
      }
    }
    throw error
  }
}

export default loginUser
