"use client";
import React from "react";
import { Formik } from "formik";
function ContactForm() {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "", phone: "" }}
      onSubmit={(values, helpers) => {
        console.log({ values });
      }}
    >
      {({ handleBlur, handleChange, handleSubmit }) => {
        return (
          <div className="text-black">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                placeholder="Write your name"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                placeholder="Write your email"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
