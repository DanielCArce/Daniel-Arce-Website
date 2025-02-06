'use server';
import { RESEND_KEY, CONTACT_EMAIL } from '@/config/constants'
import {formSchema} from '@/schemasValidation/contactFormValidation'
import {Resend} from 'resend'
import EmailTemplate from '@/components/EmailTemplate';
import { FormProps } from '@/types/types';
const resend = new Resend(RESEND_KEY)

export async function sendEmail(prevState:FormProps, formData: FormData) {
    let formDta = Object.fromEntries(formData);
    let result = formSchema.safeParse(formDta);
    if (!result.success) {
        return {
            ...prevState,
            isError: true,
            errors: result.error.flatten().fieldErrors
        }
     }
    let name = formData.get('name') as string;
    let phone = formData.get('phone') as string;
    let email = formData.get('email') as string;
    let topic = formData.get('topic') as string;
    let message = formData.get('message') as string;
    const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: [CONTACT_EMAIL],
        subject: `[${topic}] ${name}`,
        react: EmailTemplate({ name, phone, email, topic, message }),
        cc: [email],
        
    })
    if (error) {
        return {
            ...prevState,
            isError: true,
            isCompleted:true,
            message: 'Something is happeen when send the email',
            errors:error
        }
    }
    console.log({data})
    return {...prevState,
        isCompleted: true,
        message:'Email was sent correctly.',
        errors:{}
    }

}