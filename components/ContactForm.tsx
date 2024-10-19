import React from 'react'
import {sendEmail} from '@/actions/formActions'

function ContactForm() {
  return (
      <form action={sendEmail} className='w-full shadow-md py-3 px-2'>
          <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" />
          </div>
          <div>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
          </div>
          <div>
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" name="Phone" id="phone" />
          </div>
          <div>
              <label htmlFor="topic">Topic:</label>
              <select name="topic" id="topic">
                  <option value="new web">Request a cuote for Website</option>
                  <option value="new app">Request a cuote for Mobile App</option>
                  <option value="new software">Request a cuote for Custom Software</option>
              </select>
          </div>
          <div>
              <label htmlFor="message">Your Message:</label>
              <textarea name="message" id="message"></textarea>
          </div>
          <div>
              <input type="submit" value="Send Message" />
            </div>
    </form>
  )
}

export default ContactForm