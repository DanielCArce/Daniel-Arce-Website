import React from 'react'
import MainMenu from '@/components/MainMenu'
function PageHeader() {
  return (
      <header className="flex flex-row justify-between">
      
        <h1 className="text-4xl font-black">Daniel Arce</h1>
      
          <MainMenu/>
    </header>
  )
}

export default PageHeader