"use client";
import React, { ReactElement } from "react";
import { Form, Formik, Field } from "formik";
interface initialVals {
  name: string;
  mail: string;
}
function ContactForm(): ReactElement {
  const initValues: initialVals = {
    name: "",
    mail: "",
  };
  return (
    <Formik
      initialValues={initValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
      }}
    >
      <Form className="flex flex-col gap-3 w-full">
        <div className="flex flex-col gap-3">
          <label htmlFor="name">Name:</label>
          <Field
            id="name"
            name="name"
            placeholder="Please insert your name"
            className="text-black w-2/3 py-1 pl-2"
            as="input"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="mail">Email:</label>
          <Field
            id="mail"
            name="mail"
            placeholder="Please insert your email"
            className="text-black w-2/3 py-1 pl-2"
            as="input"
          />
              </div>
              <div className="flex flex-col gap-3">
                  <label htmlFor="message">Message:</label>
                  <Field id="message" name="message" placeholder="Please tell me how we can help" as="textarea" className="text-black w-2/3 py-1 pl-2"/>
              </div>
              <div className="flex flex-col gap-3">
                  <button type="submit" className="bg-green-600 text-white py-4 px-2 w-36">Send Message</button>
              </div>
      </Form>
    </Formik>
  );
}

export default ContactForm;
