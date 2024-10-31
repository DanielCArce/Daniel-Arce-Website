import ContactForm from '@/components/ContactForm'
import Link from 'next/link';
import React from 'react'
import { FaEnvelope, FaPhone, FaAddressCard } from "react-icons/fa6";

function ContactSection() {
  return (
    <section id="contact" className="flex flex-col lg:flex-row xl:flex-row md:flex-row gap-3 justify-between px-8 py-8 items-center">
      <section className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
      <h2 className='text-3xl font-black my-4 text-center'>Contact</h2>
      <ContactForm/>
      </section>
      <section className="md:w-1/2 lg:w-1/2 xl:w-1/2 w-full">
        <h2 className='text-3xl font-black my-4 text-center'>Contact Info</h2>
        <div className='flex flex-row gap-2'>
          <FaEnvelope />
          <p>
            <Link href={"mailto:dev@darce.com"}>dev@darce.com</Link>
          </p>
        </div>
        <div className='flex flex-row gap-2'>
          <FaPhone/>
          <p>
            <Link href={"https://wa.me/+50664857937"}>+(506) 6485 7937</Link>
          </p>
        </div>
        <div className='flex flex-row gap-2'>
          <FaAddressCard />
          <p>
            Heredia, Costa Rica.
          </p>
        </div>
      </section>
    </section>
  )
}

export default ContactSection