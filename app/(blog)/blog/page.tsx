import React from 'react'
import {getAllPosts, getPostMetadata} from '@/libs/readPosts'
import Link from 'next/link'
async function page() {
  const allPosts = await getAllPosts()
  console.log({allPosts})
  return (
    <div>
      <p>{ JSON.stringify(allPosts)}</p>
      {allPosts.map((post)=>{
        return (<Link key={post.slug} href={`/blog/${post.slug}`}>{ post.slug}</Link>)
      })}
    </div>
  )
}

export default page