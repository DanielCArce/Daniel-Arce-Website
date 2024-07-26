import React from 'react'
import { getPostMetadata } from '@/libs/readPosts';
import Link from 'next/link';
type Meta = {
  title: string,
  description: string,
  author: string,
  date: Date,
  type: string,
  url: string

}
type BlogPost = {
  post: string
}
async function BlogCard({ post }:BlogPost) {
  const {meta: postInfo}:Meta = await getPostMetadata(post)
  return (
    <div className="gap-2 py-3 px-4">
      <h3 className="font-2xl font-bold">{postInfo.title}</h2>
      <h4 className="font-lg font-light">Author:{ postInfo.author}</h3>
      <p>{postInfo.description}</p>
      <Link href={`/blog/${postInfo.url}`}>Get more details</Link>
      </div>
  )
}

export default BlogCard 