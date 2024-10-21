import React from 'react'
export interface EmailTemplateProps {
    name: string;
    phone: string;
    email: string;
    topic: string;
    message: string;
}
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