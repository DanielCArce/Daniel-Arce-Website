import React from 'react'

function Wrapper({children}:{children:React.ReactElement<any>}) {
  return (
      <div className="py-5 bg-primary px-8">
          {children}
    </div>
  )
}

export default Wrapper