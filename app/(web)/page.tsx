import PageHeader from '@/components/PageHeader'
import ContactSection from '@/sections/ContactSection'
import HeroSection from '@/sections/HeroSection'
import ProjectsSection from '@/sections/ProjectsSection'
import ServicesSection from '@/sections/ServicesSection'
import React from 'react'

function page() {
  return (
    <>
    <PageHeader/>
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection/>
    </>
  )
}

export default page