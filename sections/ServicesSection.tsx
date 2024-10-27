import React from 'react'

function ServicesSection() {
  return (
    <section className="flex flex-row h-screen gap-2 justify-between container px-5 py-5">
      <div className="w-1/3">
        <h2>Websites</h2>
        <p>Design, Development & Hosting of websites</p>
      </div>
      <div className="w-1/3">
        <h2>Mobile Apps</h2>
        <p>Design, Development & publishing mobile apps in iOs & Android</p>
      </div>
      <div className="w-1/3">
        <h2>Custom Software</h2>
        <p>Adapting your issues to software with</p>
      </div>
    </section>
  )
}

export default ServicesSection