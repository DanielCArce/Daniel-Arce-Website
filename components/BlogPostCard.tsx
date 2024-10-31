import React from 'react'
import Link from 'next/link'
import {getMetadataFromFile} from '@/libs/readMd'
import { BlogCardProps, Info } from '@/types/types'
async function BlogPostCard({ slug }: BlogCardProps) {
    const {metadata}:Info  = await getMetadataFromFile(slug)
  return (
      <div className="px-4 py-4 shadow-md w-1/3 h-auto">
          <Link href={`/blog/${metadata.url}`} className='font-semibold'>{metadata.title}</Link>
          <p>{ metadata.description}</p>
          <p className="text-md font-bold">
          Author: <span className="font-medium text-md">{metadata.author}</span>
          </p>
      </div>
  )
}

export default BlogPostCard