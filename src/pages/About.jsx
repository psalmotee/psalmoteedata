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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const services = [
    {
      icon: FaBolt,
      title: "Instant Airtime",
      desc: "Send airtime to any Nigerian network in seconds",
    },
    {
      icon: FaWifi,
      title: "Data Bundles",
      desc: "Affordable data plans for individuals and businesses",
    },
    {
      icon: FaTv,
      title: "Bill Payments",
      desc: "Pay electricity and cable bills without stress",
    },
    {
      icon: FaShieldAlt,
      title: "Secure Transactions",
      desc: "Bank-level security for all your purchases",
    },
  ];

  const whyUs = [
    {
      title: "⚡ Lightning Fast",
      desc: "Transactions processed in seconds, not minutes",
    },
    {
      title: "💰 Best Rates",
      desc: "Competitive pricing with no hidden charges",
    },
    {
      title: "🎯 Easy to Use",
      desc: "Simple, intuitive interface for everyone",
    },
    {
      title: "24/7 Support",
      desc: "Our team is always ready to help you",
    },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="px-5 py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="glow-orb-primary absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]" />
          <div className="grid-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-bold leading-tight mb-6">
              About <span className="gradient-text">PsalmoteeData</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
              We're Nigeria's trusted VTU platform, making digital transactions
              simple, fast, and accessible to everyone. From airtime to
              electricity tokens, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section ref={ref} className="py-20 px-5 border-y border-[var(--border)]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="section-tag" style={{ justifyContent: "center" }}>
              Our Mission
            </span>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight mb-6">
              Simplifying VTU for Every Nigerian
            </h2>
            <p className="text-muted text-base leading-relaxed mb-4">
              We believe digital transactions should be{" "}
              <span className="text-primary font-semibold">
                fast, reliable, and affordable
              </span>
              . That's why we built PsalmoteeData — to eliminate middlemen,
              reduce hassles, and give Nigerians direct access to VTU services
              at the best rates.
            </p>
            <p className="text-muted text-base leading-relaxed">
              Whether you're buying airtime, paying bills online, or purchasing
              data offline, we make it seamless. No complicated processes. No
              delays. Just transactions that work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-tag" style={{ justifyContent: "center" }}>
              What We Offer
            </span>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight">
              Complete VTU Solutions
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6"
          >
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp()}
                  className="bg-card border border-[var(--border)] rounded-[16px] p-7 hover:border-primary/40 transition-all duration-300 card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-[1.1rem] mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {svc.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 px-5 bg-gradient-to-br from-primary/8 via-transparent to-blue/8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-tag" style={{ justifyContent: "center" }}>
              Why Choose Us
            </span>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight">
              The PsalmoteeData Advantage
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-8"
          >
            {whyUs.map((item, i) => (
              <motion.div key={i} variants={fadeUp()} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/15">
                    <FaCheckCircle className="text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-[var(--text)] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 px-5 border-t border-[var(--border)]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-3 gap-8 text-center"
          >
            {[
              { num: "50K+", label: "Active Users" },
              { num: "2M+", label: "Transactions" },
              { num: "99.9%", label: "Uptime" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp()}>
                <div className="font-display text-[2.5rem] font-bold text-primary mb-2">
                  {stat.num}
                </div>
                <div className="text-muted text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold mb-6">
              Ready to experience the difference?
            </h2>
            <p className="text-muted text-base mb-8 max-w-xl mx-auto">
              Join thousands of Nigerians who trust PsalmoteeData for their VTU
              needs.
            </p>
            <a
              href="https://psalmoteedata.com.ng/vpaccount/?register"
              className="
                inline-flex items-center gap-2 px-8 py-4 rounded-xl
                bg-gradient-to-r from-primary to-blue
                text-white font-semibold text-sm
                shadow-[0_4px_22px_rgba(14,165,198,0.35)]
                hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,198,0.5)]
                transition-all duration-200 no-underline
              "
            >
              Create Account Now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
