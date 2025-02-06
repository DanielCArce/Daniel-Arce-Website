'use client'
import React, { useActionState } from 'react'
import {sendEmail} from '@/actions/formActions'
function ContactForm() {
  const [state, action, isPending] = useActionState(sendEmail, { isCompleted: false, isError: false, message: '', errors: {} });
  return (
      <form action={action} className="flex flex-col gap-3 items-center shadow-lg rounded py-3">
          <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input id="name" className="border border-b-2 w-80 py-2 px-1" type='text' name='name' autoComplete='off' placeholder="Ex: Daniel Arce"/>
        {state.errors?.name && <p className="text-red-500">{state.errors.name}</p>}
          </div>
          <div className="flex flex-col gap-2">
          <label htmlFor="phone">Phone</label>
          <input id="phone" className="border border-b-2 w-80 py-2 px-1" type='tel' name='phone' autoComplete='off' placeholder="+50686813736"/>
          {state.errors?.phone && <p className="text-red-500">{state.errors.phone}</p>}
          </div>
          <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input id="email" className="border border-b-2 w-80 py-2 px-1" type='email' name='email' autoComplete='off' placeholder='ex:yourname@mail.com'/>
          {state.errors?.email && <p className="text-red-500">{state.errors.email}</p>}
          </div>
          <div className="flex flex-col gap-2">
          <label htmlFor="topic">Topic</label>
          <select id="topic" className="border border-b-2 w-80 py-2 px-1" name='topic'>
                <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="custom">Custom Software Development</option>
                  <option value="hr">HR 4 Humans</option>
                  <option value="hire">Talk about a job</option>
          </select>
          </div>
          <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
        <textarea id="message" className="border border-b-2 w-80 py-2 px-1 h-26 resize-none" name='message' placeholder='Explain about what you need about the topic.'></textarea>
        {state.errors?.message && <p className="text-red-500">{state.errors.message}</p>}
          </div>
          <div className="flex flex-col gap-2">
          <input className="border border-b-2 w-80 py-2 px-1 bg-blue-600" type='submit' value="Send Message"/>
          </div>
    </form>
  )
}

export default ContactForm