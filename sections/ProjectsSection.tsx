import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard'
import Link from 'next/link'
import React from 'react'
const allProjects: ProjectCardProps[] = [
  {
    id: 1,
    name: 'Fina App',
    type: 'Mobile App',
    description: 'Streamline the orders from clients.',
    links: 'fina-mobile-app',
    imgs: {
      webp: '/WebDev.webp',
      jpg: 'WebDev.jpg',
      alt:'Fina App Mobile App'
    }
  },
  {
    id: 2,
    name: 'Distribuidora Catalina',
    type: 'Website',
    description: 'Factory website built with react & typescript.',
    links: '/blog/distribuidora-catalina',
    imgs: {
      webp: '/AppDev.webp',
      jpg: '/AppDev.jpg',
      alt:'Distribuidora Catalina Website'
    }
  }
]
function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-row gap-2 h-screen container justify-between px-5 py-5">
      {allProjects.map((project) => <ProjectCard key={ project.id} description={project.description} name={project.name} type={project.type} links={project.links} imgs={project.imgs}/>)}
    </section>
  )
}

export default ProjectsSection