import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <nav className='flex justify-items-center'>
              <ul className="flex flex-row gap-3 items-center">
                <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/me">About</Link>
                  </li>
                  <li>
                    <Link href="/contact-me">Lets talk now</Link>
                  </li>
            </ul>
          </nav>
  )
}

export default Navigation