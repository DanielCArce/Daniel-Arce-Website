import React from 'react'
import type {Metadata} from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import SocialWidget from '@/components/SocialWidget'
import {FaEnvelope, FaPhone, FaCalendar} from 'react-icons/fa6'
export const metadata: Metadata = {
  title: 'Daniel Arce - Lets talk',
  description:'Devlopment'
}
function page() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-black mt-4">
      <section className="w-1/2 px-2 py-1">
        <ContactForm/>
      </section>
      <section className="w-1/2 px-2 py-1">
        <h3 className="text-3xl font-light text-center">The other way</h3>
        <p>Phone: <Link href={"https://wa.me/+50664857937"}><FaPhone/> +50664857937 </Link> </p>
        <p>Email: <Link href={"https://mailto:daniel.camposarce@gmail.com"}><FaEnvelope/> daniel.camposarce@gmail.com </Link> </p>
        <p>Request a meeting <Link href={"https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ37vmihGu5jaN2DhLC81bGDH5gHkOeOzcASVhb_wt0xV4tCV4vxjs00tHZBiyPqCHby3oR2FfGg"}><FaCalendar/> Google Meet</Link></p>
        <SocialWidget/>
      </section>
    </div>
  )
}

export default page