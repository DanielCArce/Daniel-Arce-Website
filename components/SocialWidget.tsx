import React from 'react'
import Link from 'next/link';
import {FaLinkedin, FaGithub, FaInstagram, FaWhatsapp} from 'react-icons/fa6'
function SocialWidget() {
  return (
      <ul className="flex flex-row gap-4 mt-6 text-center justify-center">
          <li>
              <Link href="https://github.com/danielcarce">
                  <FaGithub size="2rem" color="#000000"/>
              </Link>
          </li>
          <li>
              <Link href="https://linkedin.com/in/danielcarce">
                  <FaLinkedin size="2rem" color="#000000"/>
              </Link>
          </li>
          <li>
              <Link href="https://instagram.com/dsoftwaredev">
                <FaInstagram size="2rem" color="#000000"/>
                </Link>
          </li>
          <li>
              <Link href="https://wa.me/50664857937">
                  <FaWhatsapp size="2rem" color="#000000"/>
              </Link>
          </li>
    </ul>
  )
}

export default SocialWidget