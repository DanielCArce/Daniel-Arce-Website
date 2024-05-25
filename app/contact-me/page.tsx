import ContactForm from '@/components/ContactForm'
import type {Metadata} from 'next'
import React from 'react'
export const metadata: Metadata = {
    title:'Daniel Campos Arce - Lets Talk'
}
function page() {
  return (
    <section className='flex flex-row gap-2'>
      <section className="flex flex-col gap-4 w-1/2">
        <div>
          <h2 className="xl:text-3xl text-">Contact</h2>
          <h3>Lets talk about your project</h3>
        </div>
        <ContactForm/>
      </section>
      <section>
        <p>Aqui empieza la otra info </p>
        </section>
    </section>
  )
}

export default page