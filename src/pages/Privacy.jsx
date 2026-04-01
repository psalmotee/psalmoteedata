import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  FaShieldAlt,
  FaCookie,
  FaLock,
  FaDatabase,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 },
};

export default function Privacy() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const sections = [
    {
      title: "1. Introduction",
      content: `PsalmoteeData ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
      
Please read this Privacy Policy carefully. By accessing and using PsalmoteeData, you acknowledge that you have read and agree to be bound by this Privacy Policy.`,
    },
    {
      title: "2. Information We Collect",
      content: `We collect information in the following ways:

📋 Information You Provide:
• Full name and phone number
• Email address
• Account credentials (username and password)
• Transaction history and payment information
• Communication content (messages, support tickets)
• Identification documents (for verification purposes)

📊 Automatically Collected Information:
• Device information (OS, browser type, IP address)
• Usage patterns and transaction data
• Login times and activity logs
• Cookie and similar tracking technology data
• Location information (with your consent)`,
    },
    {
      title: "3. How We Use Your Information",
      content: `Your information is used to:

✓ Process and complete transactions
✓ Provide customer support and resolve issues
✓ Send transaction confirmations and receipts
✓ Detect and prevent fraud
✓ Comply with legal and regulatory requirements
✓ Improve our Service and user experience
✓ Send marketing communications (with consent)
✓ Conduct security audits and system maintenance
✓ Investigate suspicious activities
✓ Personalize your experience

We do NOT sell your personal information to third parties for marketing purposes.`,
    },
    {
      title: "4. Data Protection & Security",
      content: `We implement industry-standard security measures including:

🔐 End-to-end encryption for sensitive data
🔐 Secure Socket Layer (SSL) technology
🔐 Regular security audits and penetration testing
🔐 Access controls and user authentication
🔐 Firewalls and intrusion detection systems
🔐 Data backup and disaster recovery procedures
🔐 Staff training on data protection

However, no system is 100% secure. While we strive to protect your information, we cannot guarantee absolute security. You use the Service at your own risk.`,
    },
    {
      title: "5. Sharing of Information",
      content: `Your information may be shared with:

🤝 Payment processors (for transaction processing)
🤝 Network providers (MTN, Airtel, Glo, 9mobile - for service delivery)
🤝 Service providers (electricity, cable TV providers)
🤝 Law enforcement (when required by law)
🤝 Regulatory authorities (CBN, NCC as required)
🤝 Third-party service providers (hosting, analytics)

All third parties are bound by confidentiality agreements and data protection commitments. We do not allow them to use your information for other purposes.`,
    },
    {
      title: "6. Cookies & Tracking Technologies",
      content: `We use cookies and similar technologies to:

📍 Remember your preferences
📍 Authentication and security
📍 Analytics and performance monitoring
📍 Personalization of content
📍 Marketing and advertising

You can control cookies through your browser settings. Disabling cookies may affect some functionality of the Service. We respect browser "Do Not Track" signals where applicable.`,
    },
    {
      title: "7. Your Rights & Choices",
      content: `You have the right to:

→ Access your personal information
→ Request correction of inaccurate data
→ Request deletion of your data
→ Opt-out of marketing communications
→ Request a copy of your data (data portability)
→ Withdraw consent for data processing
→ File a complaint with data protection authorities

To exercise these rights, contact: privacy@psalmoteedata.com.ng
Requests will be processed within 30 days.`,
    },
    {
      title: "8. Data Retention",
      content: `We retain your information as follows:

⏳ Account information: Retained while account is active + 7 years after closure
⏳ Transaction records: 7 years (CBN regulatory requirement)
⏳ Communication logs: 2 years
⏳ Marketing data: Until you unsubscribe
⏳ Security logs: 6 months

After retention period expires, data is securely deleted or anonymized, except where legal obligations require longer retention.`,
    },
    {
      title: "9. Children's Privacy",
      content: `PsalmoteeData is not intended for users under 18 years old. We do not knowingly collect information from minors. If we discover that we have collected data from a child under 18, we will delete it immediately.

Parents or guardians who believe their child has provided information to us should contact: support@psalmoteedata.com.ng`,
    },
    {
      title: "10. Third-Party Links",
      content: `Our Service may contain links to third-party websites. We are not responsible for their privacy practices. Please review their privacy policies before providing any personal information. This Privacy Policy applies only to PsalmoteeData.`,
    },
    {
      title: "11. International Data Transfers",
      content: `While our servers are primarily located in Nigeria, your information may be transferred to other countries for processing. We ensure that such transfers comply with data protection laws and that appropriate safeguards are in place.`,
    },
    {
      title: "12. Policy Updates",
      content: `We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of material changes via email or by posting a notice on our platform. Your continued use following changes constitutes acceptance of the updated policy.`,
    },
    {
      title: "13. Contact Us",
      links: [
        {
          icon: FaEnvelope,
          href: "mailto:privacy@psalmoteedata.com.ng",
          label: "privacy@psalmoteedata.com.ng",
        },
        {
          icon: FaPhone,
          href: "tel:+2348058461612",
          label: "+234 805 846 1612",
        },
        {
          icon: FaWhatsapp,
          href: "https://wa.me/2348058461612",
          label: "WhatsApp: +234 805 846 1612",
        },
      ],
    },
  ];

  const highlights = [
    {
      icon: FaShieldAlt,
      title: "Your Security",
      desc: "We use industry-leading encryption and security protocols",
    },
    {
      icon: FaLock,
      title: "Your Control",
      desc: "You have full control over your personal information",
    },
    {
      icon: FaDatabase,
      title: "Your Data",
      desc: "Your data is never sold to third parties for marketing",
    },
    {
      icon: FaCookie,
      title: "Your Choice",
      desc: "Manage cookies and tracking preferences anytime",
    },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[50vh] flex items-center px-5 py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="glow-orb-primary absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]" />
          <div className="grid-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-bold leading-tight mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-muted text-base">
              We value your trust. Learn how we protect your data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="py-24 px-5 bg-card">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold mb-4">
              Your Privacy, Our Priority
            </h2>
            <p className="text-muted text-base">
              We're transparent about how we collect and use your information
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-6 bg-darker rounded-lg border border-[var(--border)] hover:border-primary/40 transition-colors text-center"
                >
                  <Icon className="text-2xl text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-sm">{item.title}</h3>
                  <p className="text-muted text-xs">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section ref={ref} className="py-24 px-5">
        <div className="max-w-3xl mx-auto">
          {/* ── INTRO ── */}
          <motion.div
            {...fadeIn}
            className="mb-12 p-6 bg-card border border-primary/20 rounded-lg"
          >
            <p className="text-muted text-sm leading-relaxed">
              This Privacy Policy describes our practices regarding the
              collection, use, and protection of your information. We are
              committed to maintaining your trust through transparent data
              practices and proactive security measures. If you have questions,
              contact us anytime at privacy@psalmoteedata.com.ng.
            </p>
          </motion.div>

          {/* ── SECTIONS ── */}
          <div className="space-y-8">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="border-b border-[var(--border)] pb-8 last:border-b-0"
              >
                <h2 className="text-[1.3rem] font-display font-semibold text-primary mb-4">
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
                    <p className="text-muted text-xs mt-2">
                      Response time: Within 48 business hours
                    </p>
                    <p className="text-muted text-xs">
                      Last updated: April 2026
                    </p>
                  </div>
                ) : (
                  <div className="text-muted text-sm leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* ── COMMITMENT ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-[var(--border)]"
          >
            <div className="p-6 bg-gradient-to-r from-primary/10 to-blue/10 rounded-lg border border-primary/20">
              <h3 className="font-semibold text-primary mb-3">
                Our Privacy Commitment
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                We continuously invest in security infrastructure, conduct
                regular audits, and stay updated with data protection
                regulations. Your privacy is not just a legal obligation—it's a
                core value of PsalmoteeData. We're committed to being
                transparent, responsive, and proactive in protecting your
                information.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RELATED LINKS ── */}
      <section className="py-16 px-5 bg-card border-y border-[var(--border)]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted text-sm mb-6">
              Read our other policies and information:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                onClick={() => navigate("/terms")}
                className="px-4 py-2 rounded-lg border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-colors no-underline cursor-pointer"
              >
                Terms of Service
              </a>
              <a
                onClick={() => navigate("/contact")}
                className="px-4 py-2 rounded-lg border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-colors no-underline cursor-pointer"
              >
                Contact Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
