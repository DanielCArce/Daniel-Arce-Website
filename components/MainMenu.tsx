'use client'
import React, { useLayoutEffect, useState } from 'react'
import Link from 'next/link'
import {FaBars, FaXmark} from 'react-icons/fa6'
function MainMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useLayoutEffect(function () {
    setIsMenuOpen(false)
  }, [])
  const handleMenuButton = (e: any) => {
    setIsMenuOpen((prev) => !prev)
  }
  return (<>
    <nav className="xl:hidden 2xl:hidden">
      <span className='flex items-center justify-center'>
        {isMenuOpen ? <FaXmark onClick={handleMenuButton} /> : <FaBars onClick={handleMenuButton} />}
      </span>
        <ul className={isMenuOpen ? 'flex flex-col xl:hidden 2xl:hidden' : 'hidden'}>
          <li><Link className="block text-center" href='/'>Home</Link></li>
          <li><Link className="block text-center" href='/#me'>About</Link></li>
          <li><Link className="block text-center" href='/#services'>Services </Link> </li>
        <li><Link className="block text-center" href='/#contact'>Contact</Link></li>
        <li><Link className="block text-center" href='/blog'>Blog</Link></li>
        </ul>
    </nav>
    <nav className="hidden xl:flex 2xl:flex">
      <ul className="xl:flex 2xl:flex xl:flex-row 2xl:flex-row gap-3">
        <li><Link className="block hover:border-b-2 hover:border-blue-800" href='/'>Home</Link></li>
        <li><Link className="block hover:border-b-2 hover:border-blue-800" href='/#me'>About</Link></li>
        <li><Link className="block hover:border-b-2 hover:border-blue-800" href='/#services'>Services</Link></li>
        <li><Link className="block hover:border-b-2 hover:border-blue-800" href='/#contact'>Contact</Link></li>
        <li><Link className="block text-center" href='/blog'>Blog</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default MainMenu