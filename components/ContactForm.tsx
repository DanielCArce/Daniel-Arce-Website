import React from 'react'
import {sendEmail} from '@/actions/formActions'

function ContactForm() {
  return (
      <>
      <form action={sendEmail} className="w-full px-9">
          <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" className="shadow-md border-b-2 py-2 pl-1 w-2/3" placeholder='Daniel'/>
          </div>
          <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" className="shadow-md border-b-2 py-2 pl-1 w-2/3" placeholder='dev@darce.com'/>
          </div>
          <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" name="phone" id="phone" className="shadow-md border-b-2 py-2 pl-1 w-2/3" placeholder='+506 6485 7937'/>
          </div>
          <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="topic">Topic:</label>
              <select name="topic" id="topic" className="shadow-md border-b-2 pl-1 py-2 w-2/3" defaultValue="new web">
                  <option value="new web">Request a cuote for Website</option>
                  <option value="new app">Request a cuote for Mobile App</option>
                  <option value="new software">Request a cuote for Custom Software</option>
              </select>
          </div>
          <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="message">Your Message:</label>
              <textarea name="message" id="message" className="shadow-md border-b-2 py-2 pl-1 h-24 resize-none w-2/3" placeholder='Need build one Website for my bussines of shoes.'></textarea>
          </div>
          <div className="">
              <input type="submit" value="Send Message" className=" py-4 px-2 bg-cyan-800 text-white hover:bg-cyan-600 w-1/3"/>
            </div>
    </form>
    </>
  )
}

export default ContactForm