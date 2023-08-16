import { Resend } from 'resend'
import { EmailTemplate } from '@/components/EmailTemplate'
import { NextResponse } from 'next/server'
import { validateString, getErrorMessage } from '@/lib/utils'

const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()
    if (!validateString(name, 100)) {
      return {
        error: 'Invalid sender name',
      }
    }
    if (!validateString(email, 150)) {
      return {
        error: 'Invalid sender email',
      }
    }
    if (!validateString(message, 2500)) {
      return {
        error: 'Invalid message',
      }
    }
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['diegosebsk@gmail.com'],
      subject: 'Portfolio Contact Form',
      react: EmailTemplate({ name, email, message }),
      text: '',
    })

    return NextResponse.json({ message: 'Email sent!' }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: getErrorMessage(err) }, { status: 500 })
  }
}
