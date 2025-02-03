import React from 'react'
import { getAllFiles } from '@/libs/readMd'
import PageHeader from '@/components/PageHeader'

async function page() {
  const data = await getAllFiles()
  return (
    <>
    <PageHeader/>
    <h2>Blog</h2>
    </>
  )
}

export default page