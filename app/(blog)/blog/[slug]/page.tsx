import { getAllFiles, getContentFromFile, getMetadataFromFile, readFile } from '@/libs/readMd'
import {H1, H2, H3,P, LI, UL} from '@/components/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'
interface BlogPageParams {
    params:{
            slug: string
    }
}
const mdxComponents = { H1, H2, H3, P, LI, UL }

export async function generateStaticParams() {
    const allPosts = await getAllFiles();
    return allPosts
}
// export async function getStaticPaths() {
//     const allFiles = await getAllFiles();
//     const paths = allFiles.map((route) => {
//         return {
//             params: {
//                 slug: route.slug
//             }
//         }
//     });
//     return {
//         paths,
//         fallback:false
//     }
// }
export async function generateMetadata({ params }: BlogPageParams) {
    const { metadata } = await getMetadataFromFile(params.slug)
    return {
        title: metadata.title,
        description: metadata.description,
        author:metadata.author
    }
}
async function page({params}: BlogPageParams) {
    const postSource = await readFile(params.slug)
  return (
      <MDXRemote source={postSource} options={{parseFrontmatter:true}} components={mdxComponents}/>
  )
}

export default page