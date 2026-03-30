import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import FAQItem from './FAQItem'
import { MINI_FAQS } from '../data/faqData'

export default function MiniFAQ({ setPage }) {
  const [openIdx, setOpenIdx] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const toggle = (i) => setOpenIdx(prev => (prev === i ? null : i))

  return (
    <section id="faq" className="py-24 px-5">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag">Quick Answers</span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-4">
            Common questions,<br />answered fast
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-[480px]">
            Got questions? We've got clear answers. Browse our top FAQs below or visit the full FAQ page.
          </p>
        </motion.div>

        {/* Accordion cards grid */}
        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          {MINI_FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09 }}
            >
              <FAQItem
                q={faq.q}
                a={faq.a}
                isOpen={openIdx === i}
                onToggle={() => toggle(i)}
              />
            </motion.div>
          ))}
        </div>

        {/* View All FAQs button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="#faq-page"
            onClick={e => { e.preventDefault(); setPage('faq') }}
            className="
              inline-flex items-center gap-2
              border border-primary/40 text-primary
              px-7 py-3 rounded-xl text-sm font-semibold
              hover:bg-primary/10 transition-all duration-200
              no-underline
            "
          >
            View all FAQs <ArrowRight size={15} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
