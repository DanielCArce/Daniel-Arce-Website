import { getMetadataFromFile } from '@/libs/readMd';
import { BlogCardProps, Info } from '@/types/types'
import Link from 'next/link';
import React from 'react'

async function BlogPostCard({ slug }: BlogCardProps) {
    const {metadata }:Info = await getMetadataFromFile(slug);
  return (
      <div className="w-full md:w-1/3 shadow-md py-4 px-6 bg-slate-100">
            <h2 className="text-center text-lg font-bold mb-2 uppercase">{metadata.title}</h2>
          <p className="text-justify">{metadata.description}</p>
            <p>Date: {metadata.date}</p>
            <p>Author: {metadata.author}</p>
            <Link href={`blog/${metadata.url}`}>Get Details</Link>
      </div>
  )
}

export default BlogPostCard