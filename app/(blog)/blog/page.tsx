import React from 'react'
import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/libs/readPosts'
async function page() {
  const allBlogPostsSlugs = await getAllPosts()

  return (
    <div className="flex justify-around">
      <h2 className="font-3xl font-semiback">Posts</h2>
      {
        allBlogPostsSlugs.map((post) => {
        return (<BlogCard key={post.slug} post={post.slug}/>)})
      }
    </div>
  )
}

export default page