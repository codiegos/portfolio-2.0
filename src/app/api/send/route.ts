import { Resend } from 'resend'
import { EmailTemplate } from '@/components/EmailTemplate'
import { NextResponse } from 'next/server'
import { validateString, getErrorMessage } from '@/lib/utils'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { name, email, message } = await request.json()

    if (!validateString(name, 100)) {
      return NextResponse.json(
        { error: 'Invalid sender name' },
        { status: 400 }
      )
    }

    if (!validateString(email, 150)) {
      return NextResponse.json(
        { error: 'Invalid sender email' },
        { status: 400 }
      )
    }

    if (!validateString(message, 2500)) {
      return NextResponse.json(
        { error: 'Invalid message' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['diegosebsk@gmail.com'],
      subject: 'Portfolio Contact Form',
      react: EmailTemplate({ name, email, message }),
      text: '',
    })

    return NextResponse.json(
      { message: 'Email sent!' },
      { status: 200 }
    )
  } catch (err) {
    return NextResponse.json(
      { error: getErrorMessage(err) },
      { status: 500 }
    )
  }
}
