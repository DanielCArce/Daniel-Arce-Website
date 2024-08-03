'use server'
import { RESEND_KEY } from '@/config/constants'
import {Resend} from 'resend'
export async function sendEmail(formData: FormData) {
    const mailer = new Resend(RESEND_KEY)
    let message = formData.get('message')
    console.log({ formData })
    console.log({ msg: formData.get('message') })
    Alert(`${message}`)
    
}