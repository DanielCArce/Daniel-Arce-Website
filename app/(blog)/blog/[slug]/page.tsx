import { getAllPosts, getPostContent } from "@/libs/readPosts"
import SocialWidget from '@/components/SocialWidget'
import {MDXRemote} from 'next-mdx-remote/rsc'
const H1Component = (props: any) => {
    return (<h1 {...props}>{ props.children}</h1>)
}
const CustomComponents = {
    H1Component
}
export async function generateStaticParams() {
    const allPosts = await getAllPosts()
    return allPosts
}
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { meta } = await getPostContent(params.slug)
    return {
        title: `Daniel Arce - ${meta.title}`,
        author: meta.author,
        description: meta.description
    }
}
async function Page({ params }: { params: { slug: string } }){
    const {content} = await getPostContent(params.slug)
    return (
        <>
            <MDXRemote source={content} options={{parseFrontmatter:true}} components={CustomComponents}/>
        <SocialWidget/>
        </>
    )
}

export default Page