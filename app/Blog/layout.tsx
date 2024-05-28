import React from 'react'
import MainNav from '@/components/MainNav'
function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <MainNav/>
    {children}
    </>
  )
}

export default layout