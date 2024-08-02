import React from 'react'
import type {Metadata} from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import SocialWidget from '@/components/SocialWidget'
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
        <p>Phone: <Link href={"https://wa.me/+50664857937"}> +50664857937 </Link> </p>
        <SocialWidget/>
      </section>
    </div>
  )
}

export default page