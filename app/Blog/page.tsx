import type {Metadata} from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: "Daniel Campos Arce - Blog",
  description: "More than a simple web developer",
};
const page = () => {
  return (
    <div>
        <p>Bienvenido al blog</p>
    </div>
  )
}

export default page