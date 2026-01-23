import Navbar from '@/app/components/layout/Navbar'
import Hero from '@/app/components/sections/Hero'
import About from '@/app/components/sections/About'
import Services from '@/app/components/sections/Services'
import WhyUs from '@/app/components/sections/WhyUs'
import CTA from '@/app/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <CTA />
    </>
  )
}

export const metadata = {
  title: 'Thovalea | Digital Services for Small & Growing Businesses',
  description:
    'Thovalea helps small businesses and organizations build reliable software, automate workflows, and grow through technology.',
}

