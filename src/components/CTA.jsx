import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCheckCircle, FaRocket } from "react-icons/fa";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-28 px-5 overflow-hidden border-y border-[var(--border)]">
      {/* Background glow */}
      <div
        className="
        absolute inset-0 pointer-events-none
        bg-gradient-to-br from-primary/10 via-transparent to-blue/10
      "
      />
      <div
        className="
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[700px] h-[300px] rounded-full
        bg-radial-[ellipse] from-primary/12 to-transparent
        blur-3xl pointer-events-none
      "
      />

      <div
        className="relative z-10 max-w-[700px] mx-auto text-center"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag" style={{ justifyContent: "center" }}>
            Get Started
          </span>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight mb-4">
            Ready to join thousands
            <br />
            of happy users?
          </h2>
          <p className="text-muted text-base leading-relaxed mb-10">
            Create your free account in under 2 minutes and start enjoying
            instant VTU services with the best rates in Nigeria.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://psalmoteedata.com.ng/vpaccount/?register"
              className="
                inline-flex items-center gap-2 px-8 py-4 rounded-xl
                bg-gradient-to-r from-primary to-blue
                text-white font-semibold text-sm no-underline
                shadow-[0_4px_22px_rgba(14,165,198,0.35)]
                hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(14,165,198,0.5)]
                transition-all duration-200
              "
            >
              <FaRocket /> Create Free Account
            </a>
            <a
              href="https://psalmoteedata.com.ng/vpaccount-offline-2"
              className="
                inline-flex items-center gap-2 px-8 py-4 rounded-xl
                border border-[var(--border)] text-muted font-semibold text-sm no-underline
                hover:border-primary/40 hover:text-primary
                transition-all duration-200
              "
            >
              Try as Guest
            </a>
          </div>

          {/* Trust line */}
          <p className="text-[0.75rem] text-muted/70 mt-6 flex items-center justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1">
              <FaCheckCircle className="text-primary" /> No credit card required
            </span>
            <span className="text-muted/50">·</span>
            <span className="inline-flex items-center gap-1">
              <FaCheckCircle className="text-primary" /> Free to register
            </span>
            <span className="text-muted/50">·</span>
            <span className="inline-flex items-center gap-1">
              <FaCheckCircle className="text-primary" /> Instant activation
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
