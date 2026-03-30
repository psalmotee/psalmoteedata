import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Lock, Clock, BadgeDollarSign } from 'lucide-react'

const FEATURES = [
  {
    Icon: Zap,
    iconColor: 'text-primary',
    iconBg:    'bg-primary/10',
    title: 'Instant Delivery',
    desc:  'Transactions are processed in real-time. No waiting, no delays — your services arrive immediately.',
  },
  {
    Icon: Lock,
    iconColor: 'text-emerald-400',
    iconBg:    'bg-emerald-500/10',
    title: 'Secure Payments',
    desc:  'Bank-level encryption protects every transaction. Your financial data is always safe with us.',
  },
  {
    Icon: Clock,
    iconColor: 'text-accent',
    iconBg:    'bg-accent/10',
    title: '24/7 Availability',
    desc:  'Our platform never sleeps. Buy services any time — day or night, weekday or weekend.',
  },
  {
    Icon: BadgeDollarSign,
    iconColor: 'text-violet-400',
    iconBg:    'bg-violet-500/10',
    title: 'Affordable Pricing',
    desc:  'Competitive rates with zero hidden fees. Get the best value for every naira you spend.',
  },
]

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 px-5 bg-card2">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading – centered */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <span className="section-tag" style={{ justifyContent: 'center' }}>Why Choose Us</span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-4">
            Built for reliability,<br />designed for you
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-[480px] mx-auto">
            We combine speed, security, and simplicity to deliver the best VTU experience in Nigeria.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-14">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className={`${f.iconBg} w-13 h-13 rounded-2xl flex items-center justify-center border border-[var(--border)] self-start p-3`}>
                <f.Icon size={22} className={f.iconColor} />
              </div>
              <h3 className="font-display font-semibold text-base">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
