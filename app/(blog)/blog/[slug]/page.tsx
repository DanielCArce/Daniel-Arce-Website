import { getAllPosts, getPostContent } from "@/libs/readPosts"
import SocialWidget from '@/components/SocialWidget'
import {MDXRemote} from 'next-mdx-remote/rsc'
const components = {
  h1: (props) => (
    <h1 {...props} className="text-2xl font-bold uppercase">
      {props.children}
    </h1>
  ),
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
            <MDXRemote source={content} options={{parseFrontmatter:true}} components={components}/>
        <SocialWidget/>
        </>
    )
}

export default Page