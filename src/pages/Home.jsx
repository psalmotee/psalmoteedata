import Hero        from '../components/Hero'
import Services    from '../components/Services'
import Features    from '../components/Features'
import HowItWorks  from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import MiniFAQ     from '../components/MiniFAQ'
import CTA         from '../components/CTA'
import Footer      from '../components/Footer'

/**
 * Home page
 * Composes all homepage sections in order.
 * setPage is passed down to MiniFAQ and Footer for internal navigation.
 */
export default function Home({ setPage }) {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <HowItWorks />
      <Testimonials />
      <MiniFAQ setPage={setPage} />
      <CTA />
      <Footer setPage={setPage} />
    </>
  )
}
