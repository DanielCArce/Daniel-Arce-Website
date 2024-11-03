import PageHeader from '@/components/PageHeader'
import Wrapper from '@/components/Wrapper'
import BioSection from '@/sections/BioSection'
import ContactSection from '@/sections/ContactSection'
import HeroSection from '@/sections/HeroSection'
import ProjectsSection from '@/sections/ProjectsSection'
import ServicesSection from '@/sections/ServicesSection'
import React from 'react'

function page() {
  return (
    <>
      <Wrapper>
        <>
          <PageHeader />
          <HeroSection />
        </>
      </Wrapper>
    <BioSection/>
      <ProjectsSection />
        <ServicesSection />
        <ContactSection />
    </>
  )
}

export default page