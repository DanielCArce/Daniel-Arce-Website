import React from 'react'
import { FaCode, FaMobileScreen, FaComputer } from 'react-icons/fa6'

function ServiceSection() {
  return (
      <section id="services" className="px-2 md:px-7 w-screen my-10 py-3">
          <h3 className="text-2xl font-semibold mb-3 text-center">Services</h3>
          <section className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center gap-3">
              <div className="w-screen md:w-1/4 lg:w-1/4 xl:w-1/4 px-2 py-2 shadow-md">
                  <div className="flex flex-row gap-1 mb-3 items-center justify-center">
                      <FaComputer size={32}/>
                      <h3 className="text-lg md:text-2xl lg:text-2xl xl:text-3xl text-center">Profesional Website</h3>
                </div>
                <p>Boost your online presence with a website that attracts and engages your customers.</p>
              </div>
              <div className="w-screen md:w-1/4 lg:w-1/4 xl:w-1/4 px-2 py-2 shadow-md">
                  <div className="flex flex-row gap-1 mb-3 items-center justify-center">
                      <FaMobileScreen size={32}/>
                      <h3 className="text-lg md:text-2xl lg:text-2xl xl:text-3xl text-center">Mobile App</h3>
                </div>
                <p>Grow your business with a custom mobile app that keeps you connected to your customers anytime, anywhere</p>
              </div>
              <div className="w-screen md:w-1/4 lg:w-1/4 xl:w-1/4 px-2 py-2 shadow-md">
                <div className="flex flex-row gap-1 mb-3 items-center justify-center">
                      <FaCode size={32}/>
                      <h3 className="text-lg md:text-2xl lg:text-2xl xl:text-3xl text-center">Custom Software</h3>
                </div>
                <p>Optimize your business with custom software tailored to your needs—efficient, scalable, and built to drive your success.</p>
              </div>
          </section>
      </section>)
}

export default ServiceSection