import React from 'react'

function ServicesSection() {
  return (
    <section className="px-5 py-5">

    <section className="flex flex-col md:flex-row lg:flex-row xl:flex-row h-screen gap-2 md:justify-between sm:justify-between xl:justify-between container">
      <div className="w-screen md:w-1/3 lg:w-1/3 xl:w-1/3">
        <h2 className="text-center text-lg md:text-2xl lg:text-2xl xl:text-3xl font-bold">Websites</h2>
        <p>Design, Development & Hosting of websites</p>
      </div>
      <div className="w-screen md:w-1/3 lg:w-1/3 xl:w-1/3">
        <h2 className='text-center text-lg md:text-2xl lg:text-2xl xl:text-3xl font-bold'>Mobile Apps</h2>
        <p>Design, Development & publishing mobile apps in iOs & Android</p>
      </div>
      <div className="w-screen md:w-1/3 lg:w-1/3 xl:w-1/3">
        <h2 className='text-center text-lg md:text-2xl lg:text-2xl xl:text-3xl font-bold'>Custom Software</h2>
        <p>Adapting your issues to software with</p>
      </div>
    </section>
    </section>
  )
}

export default ServicesSection