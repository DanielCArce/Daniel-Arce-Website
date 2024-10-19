'use server';
import { RESEND_KEY } from '@/config/constants'
import {Resend} from 'resend'
import {redirect} from 'next/navigation'
const resend = new Resend(RESEND_KEY)
export async function sendEmail(formData: FormData) {
    let message = formData.get('message')
    console.log({ formData })
    console.log({ msg: formData.get('message') })
    resend.emails.send({
        from: 'onboarding@resend.dev',
  to: ['daniel.camposarce@gmail.com'],
  subject:`[${formData.get('topic')}] ${formData.get('name')}`,
  text: `it works!  ${message}`,
    })
    redirect('/')
    
}