import React from 'react'
import { getAllFiles } from '@/libs/readMd'
import BlogPostCard from '@/components/BlogPostCard'
import PageHeader from '@/components/PageHeader'

async function page() {
  const data = await getAllFiles()
  console.log({dataFromPage:data})
  return (
    <main className="px-5 pt-7">
      <PageHeader/>
    <header>
      <h2 className="text-3xl font-semibold pl-2">Blog</h2>
      <h3 className="text-lg font-light text-italic">Some stories start with a post </h3>
    </header>
    <section className="flex flex-wrap flex-row justify-between">{
        data.map((post) => {
          return (<BlogPostCard key={post.slug} slug={post.slug} />)
      })
    }
    </section>
  </main>
  )
}

export default page