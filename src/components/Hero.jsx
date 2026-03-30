import { motion } from 'framer-motion'
import { Zap, Shield, Clock } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 30 },
  animate:   { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

const QUICK_SERVICES = [
  {
    icon: "📱",
    label: "Airtime",
    href: "https://psalmoteedata.com.ng/vpaccount/airtime",
  },
  { icon: "📶", label: "Data", href: "https://psalmoteedata.com.ng/vpaccount/data" },
  { icon: "⚡", label: "Electricity", href: "https://psalmoteedata.com.ng/vpaccount/bill" },
  { icon: "📺", label: "Cable TV", href: "https://psalmoteedata.com.ng/vpaccount/cable" },
];

const LINKS = [
  {
    icon: "👤",
    label: "Guest",
    href: "https://psalmoteedata.com.ng/vpaccount-offline-2",
  },
];

const STATS = [
  { num: '50K+',  lbl: 'Customers'    },
  { num: '99.9%', lbl: 'Uptime'       },
  { num: '2M+',   lbl: 'Transactions' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-5 pt-[110px] pb-20"
    >
      {/* ── BG EFFECTS ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb-primary absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]" />
        <div className="glow-orb-blue   absolute bottom-0 right-0 w-[600px] h-[400px]" />
        <div className="grid-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        {/* ── LEFT: COPY ── */}
        <div>
          {/* Live badge */}
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-5">
            <span className="
              flex items-center gap-2
              bg-primary/10 border border-primary/30
              rounded-full px-4 py-1.5
              text-primary text-xs font-semibold tracking-wide
            ">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse2" />
              Nigeria's Fastest VTU Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.1)} className="text-[clamp(2.4rem,5vw,4rem)] leading-[1.1] font-bold mb-5">
            Fast & Reliable<br />
            <span className="gradient-text">VTU Services</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p {...fadeUp(0.2)} className="text-muted text-[1.05rem] leading-[1.75] mb-9 max-w-[480px]">
            Buy airtime, data, electricity tokens, and pay bills instantly.
            No stress, no delays — just seamless digital transactions at your fingertips.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3.5 mb-5">
            <a
              href={QUICK_SERVICES[0].href}
              className="
                inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                bg-gradient-to-r from-primary to-blue
                text-white font-semibold text-sm
                shadow-[0_4px_20px_rgba(14,165,198,0.35)]
                hover:shadow-[0_8px_30px_rgba(14,165,198,0.5)]
                hover:-translate-y-0.5 transition-all duration-200 no-underline
              "
            >
              {QUICK_SERVICES[0].icon} Buy Airtime
            </a>
            <a
              href={QUICK_SERVICES[1].href}
              className="
                inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                bg-accent/10 border border-accent/40 text-accent
                font-semibold text-sm
                hover:bg-accent/20 transition-all duration-200 no-underline
              "
            >
              {QUICK_SERVICES[1].icon} Buy Data
            </a>
            <div className="relative group">
              <a
                href={LINKS[0].href}
                className="
                  inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                  border border-[var(--border)] text-muted font-semibold text-sm
                  hover:border-primary/40 hover:text-primary
                  transition-all duration-200 no-underline
                "
              >
                {LINKS[0].icon} Continue as Guest
              </a>
              {/* Tooltip */}
              <div className="
                absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2
                w-[260px] bg-card border border-[var(--border)] rounded-xl
                p-3.5 text-xs text-muted leading-relaxed text-center
                shadow-[0_10px_30px_rgba(0,0,0,0.4)]
                opacity-0 group-hover:opacity-100 pointer-events-none
                transition-opacity duration-200 z-10
              ">
                Quick purchase without creating an account.
                Limited features — no wallet or transaction history.
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.4)} className="flex gap-8 mt-2">
            {STATS.map(s => (
              <div key={s.lbl}>
                <div className="font-display text-[1.5rem] font-bold text-primary">{s.num}</div>
                <div className="text-xs text-muted mt-0.5">{s.lbl}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: VISUAL CARD ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="flex justify-center relative"
        >
          <div className="relative inline-block">
            {/* Main wallet card */}
            <div className="
              bg-card border border-[var(--border)] rounded-[20px] p-7
              shadow-[0_0_60px_rgba(14,165,198,0.1),0_20px_60px_rgba(0,0,0,0.5)]
              w-full max-w-[320px] animate-float
            ">
              <div className="text-xs text-muted mb-4">💼 Wallet Balance</div>
              <div className="font-display text-[2rem] font-bold mb-5">
                ₦<span className="text-primary">24,500</span>.00
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {QUICK_SERVICES.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="
                      bg-primary/8 border border-[var(--border)] rounded-xl
                      p-3 text-center no-underline
                      hover:bg-primary/15 hover:border-primary/40 transition-all duration-200
                    "
                  >
                    <div className="text-[1.4rem] mb-1">{s.icon}</div>
                    <div className="text-[0.72rem] text-muted">{s.label}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Float badge – top right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="
                absolute -top-4 -right-4
                bg-card border border-[var(--border)] rounded-xl p-3
                flex items-center gap-2.5
                shadow-[0_10px_30px_rgba(0,0,0,0.35)]
              "
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-base">✅</div>
              <div>
                <div className="text-[0.7rem] text-muted">Last transaction</div>
                <div className="text-[0.82rem] font-semibold">₦500 Airtime sent</div>
              </div>
            </motion.div>

            {/* Float badge – bottom left */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="
                absolute -bottom-4 -left-4
                bg-card border border-[var(--border)] rounded-xl p-3
                flex items-center gap-2.5
                shadow-[0_10px_30px_rgba(0,0,0,0.35)]
              "
            >
              <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center text-base">⚡</div>
              <div>
                <div className="text-[0.7rem] text-muted">Delivery time</div>
                <div className="text-[0.82rem] font-semibold">Instant</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
