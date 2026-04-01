import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCheckCircle,
  FaBolt,
  FaShieldAlt,
  FaWifi,
  FaTv,
} from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const services = [
    { icon: FaBolt,     title: "Instant Airtime", desc: "Send airtime to any Nigerian network in seconds" },
    { icon: FaWifi,     title: "Data Bundles",    desc: "Affordable data plans for individuals and businesses" },
    { icon: FaTv,       title: "Bill Payments",   desc: "Pay electricity and cable bills without stress" },
    { icon: FaShieldAlt,title: "Secure Transactions", desc: "Bank-level security for all your purchases" },
  ];

  const whyUs = [
    { title: "⚡ Lightning Fast", desc: "Transactions processed in seconds, not minutes" },
    { title: "💰 Best Rates",    desc: "Competitive pricing with no hidden charges" },
    { title: "🎯 Easy to Use",   desc: "Simple, intuitive interface for everyone" },
    { title: "24/7 Support",     desc: "Our team is always ready to help you" },
  ];

  return (
    /*
      ── FIX: ROOT WRAPPER ──
      ROOT CAUSE: WordPress Astra theme applies max-width, padding, and flex
      constraints on `.site-content`, `.entry-content`, `.container` that squeeze
      child elements. Without a scoped wrapper with explicit positioning context,
      `absolute` BG elements escape their section parents and cause layout bleed.

      Fixes applied:
      1. `psalmotee-app` class — scoping hook for any CSS overrides
      2. `position: relative` on the root ensures absolute children don't escape
      3. `overflow-x: hidden` prevents any horizontal scroll from absolute orbs
      4. All `absolute` BG elements now live inside a `relative` section parent
         that has `overflow: hidden` — they can no longer escape
      5. Replaced unconstrained section padding with explicit px-4 sm:px-6 lg:px-8
         so content isn't squeezed by WordPress container padding stacking
    */
    <div className="psalmotee-app">

      {/* ── HERO ── */}
      {/*
        FIX: Added `relative overflow-hidden` to this section so the absolute
        glow orbs and grid overlay are contained here, not leaking into WP chrome.
        Previously `position: relative` was on a child, not the section itself.
      */}
      <section className="relative overflow-hidden px-4 sm:px-6 pt-28 pb-20">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="glow-orb-primary absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]" />
          <div className="grid-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-bold leading-tight mb-6">
              About <span className="gradient-text">PsalmoteeData</span>
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              We're Nigeria's trusted VTU platform, making digital transactions
              simple, fast, and accessible to everyone. From airtime to
              electricity tokens, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section ref={ref} className="py-16 sm:py-20 px-4 sm:px-6 border-y border-[var(--border)]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="section-tag" style={{ justifyContent: "center" }}>Our Mission</span>
            <h2 className="text-[clamp(1.6rem,4vw,2.8rem)] font-bold leading-tight mb-6">
              Simplifying VTU for Every Nigerian
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-4">
              We believe digital transactions should be{" "}
              <span className="text-primary font-semibold">fast, reliable, and affordable</span>.
              That's why we built PsalmoteeData — to eliminate middlemen, reduce hassles,
              and give Nigerians direct access to VTU services at the best rates.
            </p>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Whether you're buying airtime, paying bills online, or purchasing
              data offline, we make it seamless. No complicated processes. No delays.
              Just transactions that work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="section-tag" style={{ justifyContent: "center" }}>What We Offer</span>
            <h2 className="text-[clamp(1.6rem,4vw,2.8rem)] font-bold leading-tight">
              Complete VTU Solutions
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-5 sm:gap-6"
          >
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp()}
                  className="bg-card border border-[var(--border)] rounded-[16px] p-6 sm:p-7 card-hover"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center text-primary mb-4 flex-shrink-0">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-[1rem] sm:text-[1.1rem] mb-2">{svc.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{svc.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-primary/8 via-transparent to-blue/8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="section-tag" style={{ justifyContent: "center" }}>Why Choose Us</span>
            <h2 className="text-[clamp(1.6rem,4vw,2.8rem)] font-bold leading-tight">
              The PsalmoteeData Advantage
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6 sm:gap-8"
          >
            {whyUs.map((item, i) => (
              <motion.div key={i} variants={fadeUp()} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                  <FaCheckCircle className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-[var(--text)] mb-1">{item.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-[var(--border)]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-3 gap-6 sm:gap-8 text-center"
          >
            {[
              { num: "50K+",  label: "Active Users"  },
              { num: "2M+",   label: "Transactions"  },
              { num: "99.9%", label: "Uptime"        },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp()}>
                <div className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-primary mb-2">{stat.num}</div>
                <div className="text-muted text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold mb-5">
              Ready to experience the difference?
            </h2>
            <p className="text-muted text-sm sm:text-base mb-8 max-w-xl mx-auto">
              Join thousands of Nigerians who trust PsalmoteeData for their VTU needs.
            </p>
            <a
              href="https://psalmoteedata.com.ng/vpaccount/?register"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-blue text-white font-semibold text-sm shadow-[0_4px_22px_rgba(14,165,198,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,198,0.5)] transition-all duration-200 no-underline"
            >
              Create Account Now
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
