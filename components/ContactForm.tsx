"use client";
import React from "react";
import {sendEmail} from '@/actions/formActions'
function ContactForm() {
  return (
    <>
      <h3 className="text-2xl font-bold uppercase font-sans text-black mb-3 text-center">Contact</h3>
    <form action={sendEmail} className="text-black text-xl flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name</label>
        <input type="text" className="w-72 border-2" name="name" id="name"/>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className="w-72 border-2"/>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" className="w-72 border-2"></textarea>
      </div>
      <div className="flex flex-col gap-1 mb-10">
        <button className="py-2 px-4 bg-cyan-700 text-slate-800">Send Message</button>
      </div>
  </form>
    </>
)
}

export default ContactForm;
