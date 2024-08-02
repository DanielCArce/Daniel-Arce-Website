import React from 'react'
import Link from 'next/link'
import MainNav from './MainNav'


function MainHeader() {
  return (
    <header className="flex flex-row bg-[#002A54] items-center justify-between px-5">
      <Link href={"/"}>
        <h1 className="text-3xl">DA</h1>
      </Link>
      <MainNav />
    </header>
  )
}

export default MainHeader