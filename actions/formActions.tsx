'use server'
import { Resend } from 'resend';
export async function sendEmail(formData:FormData){
    console.log({ formData })

const resend = new Resend(process.env.RESEND_KEY);
    resend.emails.send({
        from: "daniel.camposarce@gmail.com",
        to: "daniel.camposarce@gmail.com",
        subject: " New Message From Website",
        text:formData.get('message')
    })
}