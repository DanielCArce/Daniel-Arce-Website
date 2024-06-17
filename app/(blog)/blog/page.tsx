import React from 'react'
import {getAllPosts} from '@/libs/readPosts'
import Link from 'next/link'
async function page() {
  const allPosts = await getAllPosts()
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