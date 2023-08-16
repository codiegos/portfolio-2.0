import { Resend } from 'resend'
import { EmailTemplate } from '@/components/EmailTemplate'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['diegosebsk@gmail.com'],
      subject: 'Portfolio Contact Form',
      react: EmailTemplate({ name, email, message }),
      text: '',
    })

    return NextResponse.json({ message: 'Email sent!' }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: 'Email not sent!' }, { status: 500 })
  }
}
