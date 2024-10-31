import React from 'react'
import {FaCode,FaMobile, FaLaptopCode } from 'react-icons/fa6'

function ServicesSection() {
  return (
    <section id="services" className="px-5 py-5">
      <h2 className='mb-3 text-2xl font-semibold'>Services</h2>
    <section className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-2 md:justify-between sm:justify-between xl:justify-between">
        <div className="w-screen md:w-1/3 lg:w-1/3 xl:w-1/3">
        <div className='flex gap-2 flex-row items-center justify-center'>
            <FaLaptopCode size={28} />
            <h2 className='text-center text-lg md:text-2xl lg:text-2xl xl:text-3xl font-bold'>Websites</h2>
          </div>
        <p>Design, Development & Hosting of websites</p>
      </div>
      <div className="w-screen md:w-1/3 lg:w-1/3 xl:w-1/3">
        <div className='flex gap-2 flex-row items-center justify-center'>
            <FaMobile  size={28}/>
            <h2 className='text-center text-lg md:text-2xl lg:text-2xl xl:text-3xl font-bold'>Mobile Apps</h2>
          </div>
        <p>Design, Development & publishing mobile apps in iOs & Android</p>
      </div>
      <div className="w-screen md:w-1/3 lg:w-1/3 xl:w-1/3">
          <div className='flex gap-2 flex-row items-center justify-center'>
            <FaCode size={28}/>
            <h2 className='text-center text-lg md:text-2xl lg:text-2xl xl:text-3xl font-bold'>Custom Software</h2>
          </div>
        <p>Adapting your issues to software with</p>
      </div>
    </section>
    </section>
  )
}

export default ServicesSection