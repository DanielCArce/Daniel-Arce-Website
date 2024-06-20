import fs from 'node:fs'


export async function getAllPosts() {
    const posts = await fs.readdirSync('posts-in-blog', { encoding: 'utf-8' })
    return posts.map((post)=>({slug:post.replace('.mdx','')}))
}
export async function getPostContent(slug: string) {
    const post = await fs.readFileSync(`posts-in-blog/${slug}.mdx`, { encoding: 'utf8' })
    return post
}