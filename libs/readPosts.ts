'use server';
import fs from 'node:fs'
import { compileMDX } from "next-mdx-remote/rsc"


export async function getAllPosts() {
    const posts = await fs.readdirSync('posts-in-blog', { encoding: 'utf-8' })
    const allSlugs = await posts.map((post) => {
        return {
            slug: post.replace('.mdx', '')
        }
    })
    return allSlugs
}
export async function getPostContent(slug: string) {
    const postSource = await fs.readFileSync(`posts-in-blog/${slug}.mdx`, { encoding: 'utf8' })
    const { frontmatter } = await compileMDX({ source: postSource, options: { parseFrontmatter: true } })
    return { meta: frontmatter, content: postSource }
}
export async function getPostMetadata(slug: string) {
    const postSource = await fs.readFileSync(`posts-in-blog/${slug}.mdx`, { encoding: 'utf8' })
    const { frontmatter } = await compileMDX({ source: postSource, options: { parseFrontmatter: true } })
    return { meta: frontmatter }
}
