import Hero from "../components/Hero";
import Services from "../components/Services";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import MiniFAQ from "../components/MiniFAQ";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <HowItWorks />
      <Testimonials />
      <MiniFAQ />
      <CTA />
    </>
  );
}
