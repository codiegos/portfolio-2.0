import { FC } from 'react'
interface EmailTemplateProps {
  name: string
  email: string
  message: string
}

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h2>
      I'm {name} {email}
    </h2>
    <p>{message}</p>
  </div>
)
