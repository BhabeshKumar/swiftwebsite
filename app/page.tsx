import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import WhySwiftAi from './components/WhySwiftAi'
import Process from './components/Process'
import UseCases from './components/UseCases'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <TrustStrip />
      <section id="services">
        <Services />
      </section>
      <WhySwiftAi />
      <section id="process">
        <Process />
      </section>
      <UseCases />
      <Experience />
      <TechStack />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
