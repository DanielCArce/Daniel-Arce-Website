"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'
import { FaBars, FaAngleRight } from "react-icons/fa";
function MainNav() {
  const route = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);
  useEffect(function(){
    toggleMenu()
  },[route])
  return (
    <nav className="text-gray-200">
      <span className="md:hidden lg:hidden sm:block">
      <FaBars onClick={ toggleMenu} />
      </span>
      {
        isMenuOpen ? <ul className="xsm:flex sm:flex xsm:flex-col sm:flex-col xsm:gap-2 sm:gap-2 md:hidden lg:hidden absolute py-1 px-1 bg-gray-900 w-3/4 h-screen top-0 right-0">
      <span className="px-4 py-1"><FaAngleRight onClick={ toggleMenu}/></span>
            <li>
              <Link href={"/services"}>Services</Link>
            </li>
            <li>
              <Link href={"/about-me"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>

        </ul> : null}
      <ul className="xsm:hidden sm:hidden hidden md:flex lg:flex md:flex-row lg:flex-row md:gap-2 lg:gap-2">
            <li>
              <Link href={"/services"}>Services</Link>
            </li>
            <li>
              <Link href={"/about-me"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>

        </ul>
    </nav>
  );
};

export default MainNav;
