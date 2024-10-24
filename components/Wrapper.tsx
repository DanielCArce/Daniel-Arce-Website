import React from 'react'

function Wrapper({children}:{children:React.ReactElement}) {
  return (
      <div className="py-5 bg-cyan-800 px-8">
          {children}
    </div>
  )
}

export default Wrapper