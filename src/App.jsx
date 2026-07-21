import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogosMarquee from './components/LogosMarquee'
import Services from './components/Services'

import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Results from './components/Results'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-base text-ink min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <LogosMarquee />
        <Services />       
        <WhyUs />
        <Process />
        <Results />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
