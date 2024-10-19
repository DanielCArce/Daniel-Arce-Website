import React from 'react'
import Link from 'next/link'
import {getMetadataFromFile} from '@/libs/readMd'
interface BlogCardProps {
        slug: string
}
async function BlogPostCard({ slug }: BlogCardProps) {
    const matter = await getMetadataFromFile(slug)
  return (
      <div className="px-4 py-4 shadow-md w-1/3 h-auto">
          <Link href={`/blog/${matter.metadata.url}`}>{matter.metadata.title}</Link>
          <p className="text-md font-bold">
          Author: <span className="font-medium text-md">{matter.metadata.author}</span>
          </p>
      </div>
  )
}

export default BlogPostCard