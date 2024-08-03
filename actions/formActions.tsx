'use server'
import { RESEND_KEY } from '@/config/constants'
import {Resend} from 'resend'
export async function sendEmail(formData: FormData) {
    const mailer = new Resend(RESEND_KEY)
    let message = formData.get('message')
    console.log({ formData })
    console.log({ msg: formData.get('message') })
    mailer.emails.send({
        from: 'Acme <onboarding@resend.dev>',
  to: ['daniel.camposarce@gmail.com'],
  subject: 'hello world',
  text: 'it works!',
    })
    alert(`${message}`)
    
}