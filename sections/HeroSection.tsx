import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
      <section className='h-screen w-full flex flex-col justify-center items-center bg-gray-800 text-white gap-5'>
          <h2 className="text-xl md:text-4xl font-medium">Hi, I am Daniel Arce</h2>
          <h2 className="text-lg md:text-3xl font-semibold">Fullstack Developer from Costa Rica</h2>
          <h3 className="text-base text-center md:text-3xl font-light">Turn your idea into reality with the perfect solution!🚀</h3>
          <div className="flex flex-row gap-3 my-2">
              <Link className="block" href="/#contact">Lets talk today</Link>
              <Link className="block" href="/#services">Explore Services</Link>
          </div>
    </section>
  )
}

export default HeroSection