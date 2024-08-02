"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'
import { FaBars } from "react-icons/fa";
function MainNav() {
  const route = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);
  useEffect(function(){
    toggleMenu()
  },[route])
  return (
    <nav className="text-gray-100">
      <span className="absolute top-4 right-4 z-10 py-2 px-2 sm:flex md:hidden lg:hidden"><FaBars onClick={toggleMenu}/></span>
        
      <div className={isMenuOpen? "flex relative top-5 right-7":"hidden md:flex static"}>
      <ul className="flex w-full h-screen pt-8 md:h-3/4 flex-col py-3 px-2 bg-black md:bg-transparent md:flex-row md:flex gap-3">
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about-me">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="border-white py-2 px-2 border-2 hover:border-orange-400"
              >
              Lets Talk
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
