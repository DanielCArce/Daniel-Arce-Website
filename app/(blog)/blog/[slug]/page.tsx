import { getAllPosts, getPostContent } from "@/libs/readPosts"
import { MDXRemote } from 'next-mdx-remote/rsc'
import SocialWidget from '@/components/SocialWidget'

export async function generateStaticParams() {
    const allPosts = await getAllPosts()
    return allPosts
}
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { data} = await getPostContent(params.slug)
    return {
        title: data.title,
        description: data.description,
        author: data.author
    }
}
async function Page({ params }: { params: { slug: string } }){
    const {mdxSource: source} = await getPostContent(params.slug)

    return (
        <>
        <p>{JSON.stringify(params)}</p>
            <MDXRemote {...source} />
        <SocialWidget/>
        </>
    )
}

export default Page