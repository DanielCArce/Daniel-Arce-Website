import ContactForm from '@/components/ContactForm'
import React from 'react'
import { FaEnvelope, FaPhone, FaAddressCard } from "react-icons/fa6";

function ContactSection() {
  return (
    <section id="contact" className='container flex flex-row justify-between mt-6'>
      <div className='w-1/2'>
        <h2 className='text-3xl font-semibold text-center'>Contact</h2>
              <ContactForm />
      </div>
      <div className='w-1/2'>
        <h2 className='text-3xl font-semibold text-center pb-5'>Contact</h2>
        <p className="flex flex-row gap-3 items-center"><FaEnvelope/> dev@darce.com</p>
        <p className='flex flex-row gap-3 items-center'><FaPhone/> +506 8681-3736</p>
        <p className='flex flex-row gap-3 items-center'><FaAddressCard/> Heredia, Costa Rica.</p>
      </div>
    </section>
  )
}

export default ContactSection