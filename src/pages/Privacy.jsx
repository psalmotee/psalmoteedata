import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  FaShieldAlt, FaCookie, FaLock, FaDatabase,
  FaEnvelope, FaPhone, FaWhatsapp,
} from "react-icons/fa";

export default function Privacy() {
  const navigate = useNavigate();
  const ref      = useRef(null);
  const inView   = useInView(ref, { once: true, margin: "-60px" });

  const highlights = [
    { icon: FaShieldAlt, title: "Your Security", desc: "We use industry-leading encryption and security protocols" },
    { icon: FaLock,      title: "Your Control",  desc: "You have full control over your personal information" },
    { icon: FaDatabase,  title: "Your Data",     desc: "Your data is never sold to third parties for marketing" },
    { icon: FaCookie,    title: "Your Choice",   desc: "Manage cookies and tracking preferences anytime" },
  ];

  const sections = [
    {
      title: "1. Introduction",
      content: `PsalmoteeData ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.\n\nPlease read this Privacy Policy carefully. By accessing and using PsalmoteeData, you acknowledge that you have read and agree to be bound by this Privacy Policy.`,
    },
    {
      title: "2. Information We Collect",
      content: `We collect information in the following ways:\n\n📋 Information You Provide:\n• Full name and phone number\n• Email address\n• Account credentials (username and password)\n• Transaction history and payment information\n• Communication content (messages, support tickets)\n\n📊 Automatically Collected Information:\n• Device information (OS, browser type, IP address)\n• Usage patterns and transaction data\n• Login times and activity logs\n• Cookie and similar tracking technology data`,
    },
    {
      title: "3. How We Use Your Information",
      content: `Your information is used to:\n\n✓ Process and complete transactions\n✓ Provide customer support and resolve issues\n✓ Send transaction confirmations and receipts\n✓ Detect and prevent fraud\n✓ Comply with legal and regulatory requirements\n✓ Improve our Service and user experience\n✓ Send marketing communications (with consent)\n✓ Investigate suspicious activities\n\nWe do NOT sell your personal information to third parties for marketing purposes.`,
    },
    {
      title: "4. Data Protection & Security",
      content: `We implement industry-standard security measures including:\n\n🔐 End-to-end encryption for sensitive data\n🔐 Secure Socket Layer (SSL) technology\n🔐 Regular security audits and penetration testing\n🔐 Access controls and user authentication\n🔐 Firewalls and intrusion detection systems\n🔐 Staff training on data protection\n\nHowever, no system is 100% secure. You use the Service at your own risk.`,
    },
    {
      title: "5. Sharing of Information",
      content: `Your information may be shared with:\n\n🤝 Payment processors (for transaction processing)\n🤝 Network providers (MTN, Airtel, Glo, 9mobile — for service delivery)\n🤝 Service providers (electricity, cable TV providers)\n🤝 Law enforcement (when required by law)\n🤝 Regulatory authorities (CBN, NCC as required)\n🤝 Third-party service providers (hosting, analytics)\n\nAll third parties are bound by confidentiality agreements.`,
    },
    {
      title: "6. Cookies & Tracking Technologies",
      content: `We use cookies and similar technologies to:\n\n📍 Remember your preferences\n📍 Authentication and security\n📍 Analytics and performance monitoring\n📍 Personalization of content\n📍 Marketing and advertising\n\nYou can control cookies through your browser settings. Disabling cookies may affect some functionality of the Service.`,
    },
    {
      title: "7. Your Rights & Choices",
      content: `You have the right to:\n\n→ Access your personal information\n→ Request correction of inaccurate data\n→ Request deletion of your data\n→ Opt-out of marketing communications\n→ Request a copy of your data (data portability)\n→ Withdraw consent for data processing\n→ File a complaint with data protection authorities\n\nTo exercise these rights, contact: privacy@psalmoteedata.com.ng`,
    },
    {
      title: "8. Data Retention",
      content: `We retain your information as follows:\n\n⏳ Account information: Active period + 7 years after closure\n⏳ Transaction records: 7 years (CBN regulatory requirement)\n⏳ Communication logs: 2 years\n⏳ Marketing data: Until you unsubscribe\n⏳ Security logs: 6 months\n\nAfter retention period, data is securely deleted or anonymized.`,
    },
    {
      title: "9. Children's Privacy",
      content: `PsalmoteeData is not intended for users under 18 years old. We do not knowingly collect information from minors. If we discover that we have collected data from a child under 18, we will delete it immediately.`,
    },
    {
      title: "10. Third-Party Links",
      content: `Our Service may contain links to third-party websites. We are not responsible for their privacy practices. Please review their privacy policies before providing any personal information.`,
    },
    {
      title: "11. Policy Updates",
      content: `We may update this Privacy Policy periodically. We will notify you of material changes via email or by posting a notice on our platform. Your continued use following changes constitutes acceptance of the updated policy.`,
    },
    {
      title: "12. Contact Us",
      links: [
        { icon: FaEnvelope, href: "mailto:privacy@psalmoteedata.com.ng", label: "privacy@psalmoteedata.com.ng" },
        { icon: FaPhone,    href: "tel:+2348058461612",                   label: "+234 805 846 1612" },
        { icon: FaWhatsapp, href: "https://wa.me/2348058461612",          label: "WhatsApp: +234 805 846 1612" },
      ],
    },
  ];

  return (
    /*
      ── FIX: ROOT WRAPPER ──
      Same scoping pattern applied to all inner pages.
    */
    <div className="psalmotee-app">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-4 sm:px-6 pt-28 pb-20">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="glow-orb-primary absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]" />
          <div className="grid-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-bold leading-tight mb-5">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-muted text-sm sm:text-base">
              We value your trust. Learn how we protect your data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-[clamp(1.6rem,4vw,2.5rem)] font-bold mb-3">
              Your Privacy, Our Priority
            </h2>
            <p className="text-muted text-sm sm:text-base">
              We're transparent about how we collect and use your information
            </p>
          </motion.div>

          {/*
            FIX: Was `grid-cols-4` — too many columns on mid-size screens squishes cards.
            Now `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`.
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-5 sm:p-6 bg-card2 rounded-xl border border-[var(--border)] hover:border-primary/40 transition-colors text-center"
                >
                  <Icon className="text-2xl text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-1.5 text-sm">{item.title}</h3>
                  <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">

          {/* Intro box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-10 p-5 sm:p-6 bg-card border border-primary/20 rounded-xl"
          >
            <p className="text-muted text-sm leading-relaxed">
              This Privacy Policy describes our practices regarding the collection, use, and protection
              of your information. We are committed to maintaining your trust through transparent data
              practices and proactive security measures.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className="border-b border-[var(--border)] pb-8 last:border-b-0"
              >
                <h2 className="text-[1.1rem] sm:text-[1.3rem] font-display font-semibold text-primary mb-4">
                  {section.title}
                </h2>

                {section.links ? (
                  <div className="flex flex-col gap-4">
                    {section.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        className="flex items-center gap-3 text-muted text-sm hover:text-primary transition-colors no-underline"
                      >
                        <link.icon className="text-base flex-shrink-0" />
                        <span>{link.label}</span>
                      </a>
                    ))}
                    <p className="text-muted text-xs mt-1">Response time: Within 48 business hours</p>
                    <p className="text-muted text-xs">Last updated: April 2026</p>
                  </div>
                ) : (
                  <div className="text-muted text-sm leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Commitment box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 p-5 sm:p-6 bg-gradient-to-r from-primary/10 to-blue/10 rounded-xl border border-primary/20"
          >
            <h3 className="font-semibold text-primary mb-2 text-sm">Our Privacy Commitment</h3>
            <p className="text-muted text-sm leading-relaxed">
              We continuously invest in security infrastructure, conduct regular audits, and stay updated
              with data protection regulations. Your privacy is not just a legal obligation — it's a core
              value of PsalmoteeData.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── RELATED LINKS ── */}
      <section className="py-14 px-4 sm:px-6 bg-card border-y border-[var(--border)]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted text-sm mb-5">Read our other policies:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => navigate("/terms")}
                className="px-4 py-2 rounded-lg border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-colors cursor-pointer bg-transparent"
              >
                Terms of Service
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="px-4 py-2 rounded-lg border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-colors cursor-pointer bg-transparent"
              >
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
