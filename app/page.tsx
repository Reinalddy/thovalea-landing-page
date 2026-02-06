import Navbar from '@/app/components/layout/Navbar'
import Hero from '@/app/components/sections/Hero'
import About from '@/app/components/sections/About'
import Services from '@/app/components/sections/Services'
import WhyUs from '@/app/components/sections/WhyUs'
import Portfolio from '@/app/components/sections/Portfolio'
import Testimonials from '@/app/components/sections/Testimonials'
import CTA from '@/app/components/sections/CTA'
import Footer from '@/app/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
