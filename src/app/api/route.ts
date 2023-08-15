import { Resend } from 'resend'
import { EmailTemplate } from '@/components/EmailTemplate'
import { NextResponse } from 'next/server'

const resend = new Resend('apikey')

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: '',
      to: '',
      subject: 'Hello World',
      react: EmailTemplate({ firstName: 'John' }),
      text: '',
    })
    console.log(data)

    return NextResponse.json({ message: 'Email sent!' }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: 'Email not sent!' }, { status: 400 })
  }
}
