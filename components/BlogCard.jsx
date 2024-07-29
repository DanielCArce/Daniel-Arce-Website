import React from 'react'
import { getPostMetadata } from '@/libs/readPosts';
import Link from 'next/link';
// type Meta = {
//   title: string,
//   description: string,
//   author: string,
//   date: string,
//   type: string,
//   url: string

// }
// type Blog = {
//     post: string,
//     children: React.ReactElement
// }
async function BlogCard(props) {
  const metaInfo = await getPostMetadata(props.post);
  const postInfo = metaInfo.meta
  return (
    <div className="py-2 px-4 w-1/2">
      <h3 className="font-2xl font-bold">{postInfo.title}</h3>
      <h4 className="font-lg font-light">Author:{ postInfo.author}</h4>
      <p>{postInfo.description}</p>
      <Link href={`/blog/${postInfo.url}`}>Get more details</Link>
    </div>
  )
}

export default BlogCard 