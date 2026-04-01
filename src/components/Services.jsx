import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { FaMobileAlt, FaWifi, FaBolt, FaTv } from "react-icons/fa";

const SERVICES = [
  {
    icon: FaMobileAlt,
    color: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/15",
    title: "Airtime Recharge",
    desc: "Instant airtime top-up for all major Nigerian networks — MTN, Airtel, Glo, 9mobile.",
    href: "https://psalmoteedata.com.ng/vpaccount/airtime",
  },
  {
    icon: FaWifi,
    color: "from-emerald-500/20 to-emerald-500/5",
    iconBg: "bg-emerald-500/15",
    title: "Data Bundles",
    desc: "Affordable data plans for all networks. SME, corporate, and direct data bundles.",
    href: "https://psalmoteedata.com.ng/vpaccount/data",
  },
  {
    icon: FaBolt,
    color: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/15",
    title: "Electricity Tokens",
    desc: "Pay your electricity bills and get PHCN/NEPA prepaid tokens delivered instantly.",
    href: "https://psalmoteedata.com.ng/vpaccount/bill",
  },
  {
    icon: FaTv,
    color: "from-violet-500/20 to-violet-500/5",
    iconBg: "bg-violet-500/15",
    title: "Cable TV",
    desc: "Pay for DSTV, GOtv, and Startimes subscriptions without leaving your home.",
    href: "https://psalmoteedata.com.ng/vpaccount/cable",
  },
];

function ServiceCard({ svc, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.a
      ref={ref}
      href={svc.href}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
      className="
        group relative block no-underline
        bg-card border border-[var(--border)] rounded-[20px] p-7
        overflow-hidden card-hover
      "
    >
      {/* Gradient overlay on hover */}
      <div
        className={`
        absolute inset-0 bg-gradient-to-br ${svc.color}
        opacity-0 group-hover:opacity-100 transition-opacity duration-300
      `}
      />

      <div className="relative z-10">
        <div
          className={`${svc.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center text-[1.6rem] mb-5`}
        >
          <svc.icon />
        </div>
        <h3 className="font-display font-semibold text-[1.05rem] mb-2.5 text-[var(--text)]">
          {svc.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-5">{svc.desc}</p>
        <span
          className="
          inline-flex items-center gap-1.5
          text-primary text-sm font-medium
          opacity-0 -translate-x-2
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-300
        "
        >
          Get started <ArrowRight size={14} />
        </span>
      </div>
    </motion.a>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="py-24 px-5">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag">Our Services</span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight mb-4">
            Everything you need
            <br />
            in one platform
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-[500px]">
            From airtime to electricity tokens — manage all your bills and
            subscriptions in seconds.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
