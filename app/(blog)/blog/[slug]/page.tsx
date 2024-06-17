import { getAllPosts, getPostContent } from "@/libs/readPosts"
import { MDXRemote } from 'next-mdx-remote/rsc'
import SocialWidget from '@/components/SocialWidget'

export async function generateStaticParams() {
    const allPosts = await getAllPosts()
    return allPosts
}
async function Page({ params }: { params: { slug: string } }){
    const post = await getPostContent(params.slug)
    console.log({slugPost: post})
    return (
        <>
        <p>{JSON.stringify(params)}</p>
        <MDXRemote source={post}/>
        <SocialWidget/>
        </>
    )
}

export default Page