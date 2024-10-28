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
  },{
    id: 3,
    name: "Payroll System",
    type: "Website",
    description: "Payroll Webapp system for companies that need a system with auto-gestion.",
    links: '/blog/distribuidora-catalina',
    imgs: {
      webp: '/AppDev.webp',
      jpg: '/AppDev.jpg',
      alt:'Payroll System Webapp'
    }
  }
]
function ProjectsSection() {
  return (
    <section id="projects" className='px-5 py-5'>
      <h2 className='mb-3 text-2xl font-semibold'>Recents Projects</h2>
    <section className="flex flex-col items-center md:flex-row xl:flex-row gap-2 h-screen container justify-between">
      {allProjects.map((project) => <ProjectCard key={ project.id} description={project.description} name={project.name} type={project.type} links={project.links} imgs={project.imgs}/>)}
    </section>
    </section>
  )
}

export default ProjectsSection