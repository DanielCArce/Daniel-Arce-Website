import ContactForm from '@/components/ContactForm'
import Link from 'next/link';
import React from 'react'
import { FaEnvelope, FaPhone, FaAddressCard } from "react-icons/fa6";

function ContactSection() {
  return (
    <section id="contact" className="w-1/2">
      <ContactForm/>
    </section>
  )
}

export default ContactSection