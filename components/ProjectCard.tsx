import Link from 'next/link';
import React from 'react'
export interface ProjectCardProps {
    name: string;
    type: string;
    id?: number;
    description: string;
    links: string;
    imgs: {
        webp: string;
        jpg: string;
        alt: string;
    }


}
function ProjectCard({name, links, type, description, imgs}:ProjectCardProps) {
  return (
      <div className='w-full md:w-1/3 lg:w-1/3'>
          
            <h2 className='text-lg md:text-3xl lg:text-3xl xl:text-4xl font-semibold text-center text-emerald-600 mb-2'>{name} [{type}]</h2>
          <p className='mb-3'>{description}</p>
          <picture>
              <source type='image/webp' srcSet={imgs.webp} />
              <img src={imgs.jpg} alt={imgs.alt} />
          </picture>
            <div className='relative bottom-6 left-5'>
              {links && <Link href={links} className='bg-slate-500 text-gray-300 px-3 py-1'>See Website</Link>}
            </div>
          </div>
  )
}

export default ProjectCard