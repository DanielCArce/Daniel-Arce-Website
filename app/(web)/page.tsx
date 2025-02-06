import PageHeader from '@/components/PageHeader'
import BioSection from '@/sections/BioSection'
import ContactSection from '@/sections/ContactSection'
import HeroSection from '@/sections/HeroSection'
import ServiceSection from '@/sections/ServiceSection'

import React from 'react'

function page() {
  return (
    <>
      <PageHeader />
      <HeroSection />
      <ServiceSection/>
      <BioSection />
      <ContactSection/>
  </>)
}

export default page