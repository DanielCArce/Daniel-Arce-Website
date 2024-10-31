'use server';
import { RESEND_KEY, CONTACT_EMAIL } from '@/config/constants'
import {Resend} from 'resend'
import {redirect, } from 'next/navigation'
import EmailTemplate from '@/components/EmailTemplate';
const resend = new Resend(RESEND_KEY)
export async function sendEmail(formData: FormData) {
    let name = formData.get('name') as string;
    let phone = formData.get('phone') as string;
    let email = formData.get('email') as string;
    let topic = formData.get('topic') as string;
    let message = formData.get('message') as string;

console.info({name,phone,email,topic,message, formData})
    const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: [CONTACT_EMAIL],
        subject: `[${topic}] ${name}`,
        react: EmailTemplate({ name, phone, email, topic, message }),
        cc: [email],
        
    })
    if (error) {
        redirect('/')
    }

}