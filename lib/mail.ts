import { Resend } from 'resend'
import EmailTemplate from '@/components/EmailTemplate'
import { auth } from '../auth'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendVerificationEmail = async (token: string, email: string, name: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Support ticket <onboarding@resend.dev>',
      to: [email],
      subject: 'Activation account  - Support ticket',
      html: EmailTemplate({
        name,
        token,
      }),
    })

    return data
  } catch (error) {
    console.log(error)
  }
}
