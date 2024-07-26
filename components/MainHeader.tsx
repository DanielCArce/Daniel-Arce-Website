import React from 'react'
import Link from 'next/link'
import MainNav from './MainNav'


function MainHeader() {
  return (
    <header className="flex flex-row justify-between items-center mb-6 px-8 py-4 content-center bg-[#002A54]">
          <Link href={"/"}><h1 className="text-3xl">DA</h1></Link>
        <MainNav />
        </header>
  )
}

export default MainHeader