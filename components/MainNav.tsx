import Link  from 'next/link'
import React from 'react'

const MainNav = () => {
  return (
      <nav>
          <ul className="flex flex-row gap-2">
              <li>
                  <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-me">About</Link>
              </li>
              <li>
                  <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="border-white py-2 px-2 border-2 hover:border-orange-400">Lets Talk</Link>
              </li>
          </ul>
    </nav>
  )
}

export default MainNav