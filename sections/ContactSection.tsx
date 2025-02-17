import ContactForm from '@/components/ContactForm'
import Link from 'next/link'
import React from 'react'
import {FaMap, FaPhone, FaEnvelope,FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6'


function ContactSection() {
  return (
    <section id="contact" className="px-2 md:px-7 my-10 w-screen max-h-screen py-6 flex flex-col md:flex-row md:gap-3">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
              <h3 className="text-2xl font-semibold mb-3 text-center">Contact</h3>
              <ContactForm />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaMap className="mr-2 h-5 w-5 text-gray-400" />
                  <span>Heredia, Costa Rica.</span>
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-2 h-5 w-5 text-gray-400" />
                <Link href="https://wa.me/+50664857937"><span>(506) 6485-7937</span></Link>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-2 h-5 w-5 text-gray-400" />
                  <Link href="mailto:danarce.dev@gmail.com"><span>danarce.dev@gmail.com</span></Link>
                </li>
              </ul>
      </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="https://linkedin.com/in/danielcarce" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Linkedin</span>
                  <FaLinkedin className="h-6 w-6" />
                </Link>
                <Link href="https://x.com/danielarcedev" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="h-6 w-6" />
                </Link>
                <Link href="https://instagram.com/darcedev" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="h-6 w-6" />
                </Link>
                <Link href="https://github.com/danielcarce" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Github</span>
                  <FaGithub className="h-6 w-6" />
                </Link>
              </div>
      </div>
    </section>
  )
}

export default ContactSection