import React from 'react'
import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/libs/readPosts'
async function page() {
  const allBlogPostsSlugs = await getAllPosts()

  return (
    <div className="px-5">
      <header>
        <h2 className="text-3xl font-semibold pl-2">Blog</h2>
        <h3 className="text-lg font-light text-italic">Some stories start with a post </h3>
      </header>
      <section className="flex flex-wrap flex-col">{
        allBlogPostsSlugs.map((post) => {
        return (<BlogCard key={post.slug} post={post.slug}/>)})
      }
      </section>
    </div>
  )
}

export default page