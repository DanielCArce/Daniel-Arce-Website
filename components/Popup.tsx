import { FormProps } from '@/types/types'
import React from 'react'

function Popup({ message }: { message: string; }) {
  return (
      <div className='relative w-1/5 text-center py-5 px-5 bottom-11 left-11 right-11 bg-slate-500'>Popup { message}</div>
  )
}

export default Popup