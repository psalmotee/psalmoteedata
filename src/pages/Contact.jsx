import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const navigate = useNavigate();
  const ref      = useRef(null);
  const inView   = useInView(ref, { once: true, margin: "-60px" });

  const [formData,  setFormData]  = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors,    setErrors]    = useState({});

  const validateForm = () => {
    const e = {};
    if (!formData.name.trim())                              e.name    = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email is required";
    if (!formData.message.trim())                           e.message = "Message is required";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const errs = validateForm();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
    setErrors({});
    setTimeout(() => { setFormData({ name: "", email: "", message: "" }); setSubmitted(false); }, 3000);
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const contactInfo = [
    { icon: FaEnvelope, title: "Email Support", value: "psalmoteetelecoms@gmail.com",  href: "mailto:psalmoteetelecoms@gmail.com" },
    { icon: FaPhone,    title: "Call Us",        value: "+234 805 846 1612",             href: "tel:+2348058461612" },
    { icon: FaWhatsapp, title: "WhatsApp",       value: "+234 805 846 1612",             href: "https://wa.me/2348058461612" },
  ];

  // Shared input classes
  const inputBase = "w-full bg-card rounded-lg px-4 py-3 text-[var(--text)] placeholder:text-muted outline-none transition-all duration-200";
  const inputOk   = `${inputBase} border border-[var(--border)] focus:border-primary focus:ring-1 focus:ring-primary/40`;
  const inputErr  = `${inputBase} border border-red-500/40 focus:border-red-500/60`;

  return (
    /*
      ── FIX: ROOT WRAPPER + scoped class ──
      Same pattern as About.jsx — prevents Astra theme padding/max-width conflicts.
    */
    <div className="psalmotee-app">

      {/* ── HERO ── */}
      {/*
        FIX: `relative overflow-hidden` on the section contains the absolute
        glow orb so it doesn't escape into WordPress chrome.
      */}
      <section className="relative overflow-hidden px-4 sm:px-6 pt-28 pb-20">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="glow-orb-primary absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]" />
          <div className="grid-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-bold leading-tight mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Have a question? Our support team is available 24/7 to help you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/*
            FIX: was `grid md:grid-cols-2 gap-12` — gap-12 on mobile before md breakpoint
            causes columns to be too close or overflow. Use gap-8 sm:gap-12.
          */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">

            {/* ── FORM ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[clamp(1.4rem,3vw,1.8rem)] font-bold mb-7">Send us a Message</h2>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-8 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/20 mb-4">
                      <FaCheckCircle className="text-emerald-500 text-2xl" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">Message Sent!</h3>
                    <p className="text-muted text-sm">Thanks for reaching out. We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-[var(--text)] mb-2">Full Name</label>
                      <input
                        type="text" name="name" value={formData.name}
                        onChange={handleChange} placeholder="Your name"
                        className={errors.name ? inputErr : inputOk}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-[var(--text)] mb-2">Email Address</label>
                      <input
                        type="email" name="email" value={formData.email}
                        onChange={handleChange} placeholder="you@example.com"
                        className={errors.email ? inputErr : inputOk}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-[var(--text)] mb-2">Message</label>
                      <textarea
                        name="message" value={formData.message}
                        onChange={handleChange} placeholder="Tell us how we can help..."
                        rows={5} className={`${errors.message ? inputErr : inputOk} resize-none`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-blue text-white font-semibold py-3.5 rounded-lg shadow-[0_4px_15px_rgba(14,165,198,0.3)] hover:shadow-[0_8px_25px_rgba(14,165,198,0.45)] hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Send Message
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* ── CONTACT INFO ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[clamp(1.4rem,3vw,1.8rem)] font-bold mb-7">Other Ways to Reach Us</h2>

              <div className="space-y-4 mb-8">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={i}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="group flex items-start gap-4 bg-card border border-[var(--border)] rounded-xl p-5 hover:border-primary/40 transition-all duration-300 no-underline"
                    >
                      <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-[var(--text)] text-sm mb-0.5">{item.title}</h3>
                        <p className="text-muted text-sm group-hover:text-primary transition-colors">{item.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-primary/10 to-blue/10 rounded-xl p-5 border border-primary/20"
              >
                <p className="text-muted text-sm leading-relaxed">
                  <span className="font-semibold text-primary">Response Time:</span>{" "}
                  We typically respond within 24 hours. For urgent matters, please use WhatsApp.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ PREVIEW ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-primary/8 via-transparent to-blue/8 border-y border-[var(--border)]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[clamp(1.4rem,3vw,1.8rem)] font-bold mb-4">Before you contact us</h2>
            <p className="text-muted text-sm sm:text-base mb-7">
              Check our FAQ page — you might find the answer in seconds.
            </p>
            <button
              onClick={() => navigate("/faq")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/40 text-primary font-semibold text-sm hover:bg-primary/10 transition-all duration-200 cursor-pointer bg-transparent"
            >
              View FAQ →
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
