import React from 'react'
interface EmailTemplateProps {
    name: string,
    phone: number,
    email: string,
    topic: string,
    message: string
}
function EmailTemplate( {name, phone, email, topic, message }:EmailTemplateProps) {
  return (
      <div>
            <h2>Hi {name}</h2>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Topic: {topic}</p>
            <p>Message: {message}</p>
    </div>
  )
}

export default EmailTemplate