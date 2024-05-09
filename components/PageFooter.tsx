import Navigation from './Navigation'
import React from 'react'

function PageFooter() {
  return (
      <div className="flex flex-row justify-between mt-4">
          <span>Develpment with NextJs</span>
          <Navigation/>
    </div>
  )
}

export default PageFooter