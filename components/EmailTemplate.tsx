import { EmailTemplateProps } from '@/types/types'
import React from 'react'

function EmailTemplate({name,topic, email,message, phone}:EmailTemplateProps) {
  return (
      <div>
          <p>From: {name}</p>
          <div>
          <p>Topic: {topic}</p>
              <p>Phone Number: {phone}</p>
              <p>Email: {email}</p>
              <p>Name: {name}</p>
          </div>
          <div className='shadow-md'>
              <p>{message}</p>
          </div>
      </div>
  )
}

export default EmailTemplate