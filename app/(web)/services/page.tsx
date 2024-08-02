import React from 'react'
import type { Metadata } from 'next'
import {FaMobile, FaDesktop, FaCode} from 'react-icons/fa6'
export const metadata: Metadata = {
  title:'Daniel Arce - Services & Projects'
}
function page() {
  return (
    <>
      <h2 className="text-gray-400 text-center text-5xl font-black uppercase">Unleash Your Digital Potential</h2>
      <h2 className="text-center text-xl font-bold text-black my-4 uppercase">Services</h2>
    <div className="text-black flex flex-col md:flex-row justify-around pt-5">
      <section className="bg-gray-100 px-2 py-3 w-80 rounded">
        <div className="flex flex-row gap-2 justify-center items-center">
          <FaMobile/><h3 className="text-center font-semibold text-lg">Mobile Apps</h3>
        </div>
          <p>Develop cutting-edge mobile apps that engage your customers and drive business growth.</p>
      </section>
      <section className="bg-gray-200 px-2 py-1 w-80">
        <div className="flex flex-row gap-2 justify-center items-center">
          <FaDesktop/><h3 className="text-center font-semibold">Websites</h3>
        </div>
          <p>Create visually stunning and highly functional websites that captivate your audience.</p>
      </section>
      <section className="bg-gray-200 px-2 py-1 w-80">
        <div className="flex flex-row gap-2 justify-center items-center">
          <FaCode/><h3 className="text-center font-semibold">Custom Software</h3>
        </div>
          <p>Tailor-made software solutions that streamline your operations and boost productivity.</p>
      </section>
      </div>
      <section className='py-8'>
        <h3 className="text-center font-bold text-gray-700 text-4xl">Trusted by Businesses of All Sizes</h3>
      </section>
    </>
  )
}

export default page