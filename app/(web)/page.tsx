import PageHeader from '@/components/PageHeader'
import Wrapper from '@/components/Wrapper'
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
      <ProjectsSection />
      <Wrapper>
        <ServicesSection />
        <ContactSection />
      </Wrapper>
    </>
  )
}

export default page