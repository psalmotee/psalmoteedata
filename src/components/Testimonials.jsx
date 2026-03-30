import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TESTIMONIALS = [
  {
    text:   'PsalmoteeData has completely changed how I manage my bills. The speed is unmatched — airtime arrives before I can put my phone down!',
    name:   'Chukwuemeka O.',
    role:   'Business Owner, Lagos',
    init:   'C',
    color:  'from-primary to-blue',
  },
  {
    text:   'I was skeptical at first but now I tell everyone. The guest purchase feature is a lifesaver when I\'m in a rush without internet banking.',
    name:   'Fatima A.',
    role:   'Teacher, Abuja',
    init:   'F',
    color:  'from-emerald-400 to-primary',
  },
  {
    text:   'Best VTU platform I\'ve used. Fair pricing, clean interface, and customer support that actually responds quickly. Highly recommended!',
    name:   'Tunde B.',
    role:   'Freelancer, Port Harcourt',
    init:   'T',
    color:  'from-accent to-accent2',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 px-5 bg-card2">
      <div className="max-w-[1200px] mx-auto">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <span className="section-tag" style={{ justifyContent: 'center' }}>Testimonials</span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight">
            What our customers say
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5 mt-12">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="
                bg-card border border-[var(--border)] rounded-[20px] p-7
                flex flex-col
              "
            >
              {/* Stars */}
              <div className="text-accent text-base tracking-wide mb-4">★★★★★</div>
              {/* Quote */}
              <p className="text-muted text-sm leading-relaxed italic flex-1 mb-6">
                "{t.text}"
              </p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`
                  w-11 h-11 rounded-full flex items-center justify-center
                  bg-gradient-to-br ${t.color}
                  font-display font-bold text-white text-base flex-shrink-0
                `}>
                  {t.init}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-[0.75rem] text-muted">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
