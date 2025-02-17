import React from 'react'
import { getAllFiles } from '@/libs/readMd'
import PageHeader from '@/components/PageHeader'
import BlogPostCard from '@/components/BlogPostCard'

async function page() {
  const data = await getAllFiles()
  return (
    <>
    <PageHeader/>
      <h2 className="text-lg md:text-2xl font-bold my-6">Blog</h2>
      <section className="flex py-3 justify-between max-w-full gap-6 flex-wrap md:flex-nowrap">
      {data.map((item, index) => <BlogPostCard key={index} slug={item.slug} />)}
      </section>
    </>
  )
}

export default page