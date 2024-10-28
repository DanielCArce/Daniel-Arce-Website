import { getAllFiles, getMetadataFromFile, readFile } from '@/libs/readMd'
import {H1, H2, H3,P, LI, UL} from '@/components/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'
import PageHeader from '@/components/PageHeader'
interface BlogPageParams {
    params:{
            slug: string
    }
}
const mdxComponents = { h1:H1, h2:H2, h3:H3, p:P, li:LI, ul:UL }

export async function generateStaticParams() {
    const allPosts = await getAllFiles();
    return allPosts
}

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
        <>
            <PageHeader />
            <section className='py-10 px-5'>

            <MDXRemote source={postSource} options={{ parseFrontmatter: true}} components={mdxComponents} />
            </section>
        </>
    )
}

export default page