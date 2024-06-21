import React from 'react'
import type {Metadata} from 'next'
import ContactForm from '@/components/ContactForm'
export const metadata: Metadata = {
  title: 'Daniel Arce - Lets talk',
  description:'Devlopment'
}
function page() {
  return (
    <div>Contct Page
      <ContactForm/>
    </div>
  )
}

export default page