// 'use client'
import type {Metadata} from 'next'
import React from 'react'
import {Field, Form, Formik} from 'formik'
export const metadata: Metadata = {
    title:'Daniel Campos Arce - Lets Talk'
}
function page() {
  return (
    <section>
      {/* <Formik initialValues={{ name: '' }} onSubmit={(values) => { console.log({ values }) }}>
        { ({values, handleSubmit})=>{
          return (
            <Form onSubmit={handleSubmit}>
              <label>Nombre:</label>
              <Field name="name"/>
            </Form>
          )
        } }
        </Formik> */}
    <p>Holi</p>
    </section>
  )
}

export default page