import { compileMDX } from 'next-mdx-remote/rsc'
import fs from 'node:fs'
import { ReactElement } from 'react';
const ROOT_PATH = 'posts-in-blog';

export async function readFile(file_name:string) {
    const rawContent = fs.readFileSync(`${ROOT_PATH}/${file_name}.mdx`, { 'encoding': 'utf8' });
    return rawContent
}
export async function getAllFiles() {
    const allFiles = fs.readdirSync(ROOT_PATH, { encoding: 'utf8' });
    const allSlugs = allFiles.map((fname) => {
        return {
            slug: fname.replace('.mdx', '')
        }
    })
    return allSlugs
}
export async function getMetadataFromFile(file_name: string) {
    const file = await readFile(file_name);
    const src = await compileMDX({
        source: file,
        options: {
            parseFrontmatter: true
        }
    });
    const source = src
    console.log({file:source.frontmatter})
    return {
        metadata: source.frontmatter,
        slug: file_name
    }
}
export async function getContentFromFile(file_name: string) {
    const file = await readFile(file_name)
    const {content} = await compileMDX({source: file, options:{
        parseFrontmatter:true
    }
    })
    return {mdx: content,
        slug: file_name
    }
}
