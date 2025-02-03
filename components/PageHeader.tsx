import React from 'react'
import MainMenu from './MainMenu'
import Link from 'next/link'

function PageHeader() {
  return (
      <header id="head" className='flex flex-row justify-between items-center pt-5 pb-2 px-7 shadow-md'>
          <Link href="/"><h1 className="text-lg md:text-3xl lg:text-4xl text-slate-700 font-bold uppercase">Daniel Arce</h1></Link>
          <MainMenu />
    </header>
  )
}

export default PageHeader