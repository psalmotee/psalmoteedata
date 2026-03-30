import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BriefcaseBusiness } from 'lucide-react'

const STEPS = [
  {
    num:   '01',
    emoji: '💼',
    title: 'Fund Your Wallet',
    desc:  'Create an account and fund your wallet using your preferred payment method. Funds reflect instantly.',
  },
  {
    num:   '02',
    emoji: '🛒',
    title: 'Select a Service',
    desc:  'Choose from airtime, data bundles, electricity tokens, or cable TV subscriptions.',
  },
  {
    num:   '03',
    emoji: '✅',
    title: 'Confirm & Pay',
    desc:  'Review your order and confirm payment. Your service is delivered instantly to your device.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 px-5">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag">How It Works</span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-3">
            Up and running in
            <br />3 simple steps
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mt-12 relative">
          {/* Connector line – desktop only */}
          <div
            className="
            hidden sm:block absolute top-[52px] left-[calc(16.66%+24px)] right-[calc(16.66%+24px)]
            h-[2px] bg-gradient-to-r from-primary via-blue to-primary/30
          "
          />

          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              className="
                text-center
                bg-card border border-[var(--border)] rounded-[20px]
                p-8 relative
              "
            >
              {/* Step number circle */}
              <div
                className="
                w-12 h-12 rounded-full mx-auto mb-5
                bg-gradient-to-br from-primary to-blue
                flex items-center justify-center
                font-display font-bold text-white text-base
                shadow-[0_4px_20px_rgba(14,165,198,0.3)]
                relative z-10
              "
              >
                {s.num}
              </div>

              <div className="text-3xl mb-3">{s.emoji}</div>
              <h3 className="font-display font-semibold text-base mb-2.5">
                {s.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA below steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://psalmoteedata.com.ng/vpaccount/?register"
            className="
              inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
              bg-gradient-to-r from-primary to-blue
              text-white font-semibold text-sm no-underline
              shadow-[0_4px_20px_rgba(14,165,198,0.3)]
              hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(14,165,198,0.45)]
              transition-all duration-200
            "
          >
            🚀 Get Started Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
