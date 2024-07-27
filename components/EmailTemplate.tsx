import { EmailTemplateType } from '@/types'

const EmailTemplate = ({ name, token }: EmailTemplateType) => {
  return `
    <div>
      <h1>Hello ${name},</h1>
      <p>
        Thank you for creating an account with Support ticket. To activate your account and start using our services,
        please click the link below:
      </p>
      <a href="http://localhost:3000/verification?token=${token}">Activate Your Account</a>
      <p>Best regards, Support Ticket Team</p>
    </div>
  `
}

export default EmailTemplate
