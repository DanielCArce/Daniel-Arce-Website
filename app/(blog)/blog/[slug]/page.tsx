import { getAllPosts, getPostContent } from "@/libs/readPosts"
import SocialWidget from '@/components/SocialWidget'
import {MDXRemote} from 'next-mdx-remote/rsc'
import {H1Component, PComponent, H2Component, LIComponent, ULComponent,H3Component } from '@/components/CustomMDX'
const CustomComponents = {
    h1: H1Component,
    h2: H2Component,
    h3: H3Component,
    p: PComponent,
    li: LIComponent,
    ul: ULComponent,
    Social: SocialWidget
}
export async function generateStaticParams() {
    const allPosts = await getAllPosts()
    return allPosts
}
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { meta } = await getPostContent(params.slug)
    return {
        title: `Daniel Arce - ${meta.title} - ${meta.type}`,
        author: meta.author,
        description: meta.description
    }
}
async function Page({ params }: { params: { slug: string } }){
    const {meta, content} = await getPostContent(params.slug)
    console.log({metaFromPAGE: meta})
    return (
        <section className="w-full px-7 flex flex-col justify-center">
            <MDXRemote source={content} options={{parseFrontmatter:true}} components={CustomComponents}/>
        </section>
    )
}

export default Page