import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Terms() {
  const navigate = useNavigate();
  const ref      = useRef(null);
  const inView   = useInView(ref, { once: true, margin: "-60px" });

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing and using PsalmoteeData (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this Service. Your use of PsalmoteeData constitutes your acknowledgment that you have read and accepted these Terms of Service.`,
    },
    {
      title: "2. Services Offered",
      content: `PsalmoteeData provides Virtual Top-Up (VTU) services including:\n• Airtime recharge for all major Nigerian networks (MTN, Airtel, Glo, 9mobile)\n• Data bundle purchases\n• Electricity prepaid token purchases\n• Cable TV subscription payments (DSTV, GOtv, Startimes)\n• Both online (account-based) and offline (guest) purchase options\n\nAll services are subject to network provider availability and regulatory compliance.`,
    },
    {
      title: "3. User Responsibilities",
      content: `You agree to:\n• Provide accurate and complete information during registration and transactions\n• Maintain the confidentiality of your account credentials\n• Not engage in fraudulent, illegal, or unauthorized transactions\n• Comply with all applicable Nigerian laws and regulations\n• Not resell or transfer services to third parties without authorization\n• Accept responsibility for all transactions made through your account`,
    },
    {
      title: "4. Payments & Transactions",
      content: `All transactions are processed in Nigerian Naira (₦). Payment must be completed before service delivery. We accept various payment methods including:\n• Debit/Credit Cards\n• Bank Transfers\n• Digital Wallets\n\nPrices are subject to change without notice. All prices displayed are inclusive of applicable taxes. Transactions are final and cannot be modified after completion.`,
    },
    {
      title: "5. Refund Policy",
      content: `Refunds are issued in the following circumstances:\n• Failed transactions (automatic refund within 5–10 minutes to your wallet)\n• Service delivery failure (confirmed by network provider after investigation)\n• Duplicate charges (processed within 24–48 hours)\n\nRefunds are issued to your PsalmoteeData wallet account. We do not offer refunds for services successfully delivered to the recipient's account.`,
    },
    {
      title: "6. Limitation of Liability",
      content: `PsalmoteeData is provided on an "as-is" basis. We are not liable for:\n• Delays or failures in service delivery caused by network providers\n• Technical issues beyond our control\n• Third-party service failures (electricity provider, cable TV companies)\n• Loss of data or account access\n• Indirect, incidental, or consequential damages\n\nOur total liability shall not exceed the amount paid for the service in question.`,
    },
    {
      title: "7. Changes to Terms",
      content: `We reserve the right to modify these Terms of Service at any time. Changes become effective immediately upon posting to the website. Your continued use of PsalmoteeData following any modifications constitutes your acceptance of the updated terms.`,
    },
    {
      title: "8. Prohibited Activities",
      content: `You may not:\n• Use the Service for illegal activities or money laundering\n• Attempt to gain unauthorized access to the system\n• Use automated tools to access the Service without permission\n• Share account credentials or attempt account takeover\n• Interfere with the proper functioning of the Service\n• Engage in fraud or misrepresentation\n• Violate any applicable laws or regulations`,
    },
    {
      title: "9. Dispute Resolution",
      content: `Any disputes arising from this Service shall be resolved through:\n1. Good faith negotiation between parties (30 days)\n2. Mediation through a mutually agreed third party\n3. Arbitration under Nigerian law if mediation fails\n\nAll disputes shall be governed by the laws of the Federal Republic of Nigeria.`,
    },
    {
      title: "10. Contact Us",
      links: [
        { icon: FaEnvelope, href: "mailto:support@psalmoteedata.com.ng", label: "support@psalmoteedata.com.ng" },
        { icon: FaPhone,    href: "tel:+2348058461612",                   label: "+234 805 846 1612" },
        { icon: FaWhatsapp, href: "https://wa.me/2348058461612",          label: "WhatsApp: +234 805 846 1612" },
      ],
    },
  ];

  return (
    /*
      ── FIX: ROOT WRAPPER ──
      Scoped class + relative/overflow-hidden prevent Astra CSS interference.
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
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-muted text-sm sm:text-base">
              Last updated: April 2026 · Please read carefully
            </p>
          </motion.div>
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
              These Terms of Service constitute a legal agreement between you and PsalmoteeData.
              By using our platform, you agree to comply with these terms. If you do not agree,
              please discontinue use of the Service immediately.
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
                    <p className="text-muted text-xs mt-1">Last updated: April 2026</p>
                  </div>
                ) : (
                  <div className="text-muted text-sm leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 pt-8 border-t border-[var(--border)]"
          >
            <p className="text-muted text-xs leading-relaxed">
              By continuing to use PsalmoteeData, you acknowledge that you have read, understood, and
              agree to be bound by these Terms of Service. Questions? Contact{" "}
              <a href="mailto:support@psalmoteedata.com.ng" className="text-primary hover:underline no-underline">
                support@psalmoteedata.com.ng
              </a>.
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
            <p className="text-muted text-sm mb-5">Also read our other policies:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => navigate("/privacy")}
                className="px-4 py-2 rounded-lg border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-colors cursor-pointer bg-transparent"
              >
                Privacy Policy
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
