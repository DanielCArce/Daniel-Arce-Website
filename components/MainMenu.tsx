'use client'
import React, { useLayoutEffect, useState } from 'react'
import Link from 'next/link'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa6'
function MainMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useLayoutEffect(function () {
    setIsMenuOpen(false)
  }, [])
  const handleMenuButton = (e: any) => {
    setIsMenuOpen((prev) => !prev)
  }
  return (<>
    <nav className="hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex">
      <ul className="md:flex lg:flex xl:flex 2xl:flex flex-row gap-3 justify-between items-center">
        <li>
          <Link href={"/"}>
          Home
          </Link>
          </li>
        <li>
          <Link href={"/#projects"}>
            Projects
          </Link>
        </li>
        <li>
          <Link href={"/#services"}>
            Services
          </Link>
        </li>
        <li>
          <Link href={"/#me"}>
          About Me
          </Link>
        </li>
        <li>
          <Link href={"/#contact"}>
          Contact
          </Link>
        </li>
            <li>
          <Link href="/blog">
          Blog
          </Link>
        </li>
      </ul>
    </nav>
    <nav className='sm:flex sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden relative'>
      <span onClick={handleMenuButton}>
        {isMenuOpen ? <FaAngleRight/> : <FaAngleLeft/>}
      </span>
      { isMenuOpen ? (<ul className="flex flex-col w-1/2 justify-between items-center absolute t-0 h-80">
        <li>
          <Link href={"/"}>
          Home
          </Link>
          </li>
        <li>
          <Link href={"/#projects"}>
            Projects
          </Link>
        </li>
        <li>
          <Link href={"/#services"}>
            Services
          </Link>
        </li>
        <li>
          <Link href={"/#me"}>
          About Me
          </Link>
        </li>
        <li>
          <Link href={"/#contact"}>
          Contact
          </Link>
        </li>
            <li>
          <Link href="/blog">
          Blog
          </Link>
        </li>
      </ul>): null
    }
    </nav>
    </>
  )
}

export default MainMenu