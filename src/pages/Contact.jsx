import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

export default function Contact() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate submission
    setSubmitted(true);
    setErrors({});

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email Support",
      value: "support@psalmoteedata.com.ng",
      href: "mailto:support@psalmoteedata.com.ng",
    },
    {
      icon: FaPhone,
      title: "Call Us",
      value: "+234 805 846 1612",
      href: "tel:+2348058461612",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+234 805 846 1612",
      href: "https://wa.me/2348058461612",
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

        <div className="relative z-10 max-w-3xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-bold leading-tight mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Have a question? Our support team is available 24/7 to help you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section ref={ref} className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* ── FORM ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[1.8rem] font-bold mb-8">
                Send us a Message
              </h2>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-8 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/20 mb-4">
                      <FaCheckCircle className="text-emerald-500 text-2xl" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted text-sm">
                      Thanks for reaching out. We'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-[var(--text)] mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`
                          w-full bg-card border rounded-lg px-4 py-3
                          text-[var(--text)] placeholder:text-muted
                          outline-none transition-all duration-200
                          ${
                            errors.name
                              ? "border-red-500/40 focus:border-red-500/60"
                              : "border-[var(--border)] focus:border-primary focus:ring-1 focus:ring-primary/40"
                          }
                        `}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-[var(--text)] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`
                          w-full bg-card border rounded-lg px-4 py-3
                          text-[var(--text)] placeholder:text-muted
                          outline-none transition-all duration-200
                          ${
                            errors.email
                              ? "border-red-500/40 focus:border-red-500/60"
                              : "border-[var(--border)] focus:border-primary focus:ring-1 focus:ring-primary/40"
                          }
                        `}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-[var(--text)] mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help..."
                        rows={5}
                        className={`
                          w-full bg-card border rounded-lg px-4 py-3
                          text-[var(--text)] placeholder:text-muted
                          outline-none transition-all duration-200 resize-none
                          ${
                            errors.message
                              ? "border-red-500/40 focus:border-red-500/60"
                              : "border-[var(--border)] focus:border-primary focus:ring-1 focus:ring-primary/40"
                          }
                        `}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="
                        w-full bg-gradient-to-r from-primary to-blue
                        text-white font-semibold py-3.5 rounded-lg
                        shadow-[0_4px_15px_rgba(14,165,198,0.3)]
                        hover:shadow-[0_8px_25px_rgba(14,165,198,0.45)]
                        hover:-translate-y-0.5 transition-all duration-200
                      "
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
              <h2 className="text-[1.8rem] font-bold mb-8">
                Other Ways to Reach Us
              </h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={i}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="
                        group block bg-card border border-[var(--border)] rounded-lg p-6
                        hover:border-primary/40 hover:bg-card/50 transition-all duration-300
                        no-underline
                      "
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-[var(--text)] mb-1">
                            {item.title}
                          </h3>
                          <p className="text-muted text-sm group-hover:text-primary transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* ── RESPONSE TIME ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-primary/10 to-blue/10 rounded-lg p-6 border border-primary/20"
              >
                <p className="text-muted text-sm leading-relaxed">
                  <span className="font-semibold text-primary">
                    Response Time:
                  </span>{" "}
                  We typically respond to all inquiries within 24 hours during
                  business days. For urgent matters, please use WhatsApp.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ PREVIEW ── */}
      <section className="py-20 px-5 bg-gradient-to-br from-primary/8 via-transparent to-blue/8 border-y border-[var(--border)]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[1.8rem] font-bold mb-4">
              Before you contact us
            </h2>
            <p className="text-muted text-base mb-8">
              Check our FAQ page — you might find the answer you're looking for
              in seconds.
            </p>
            <a
              onClick={() => navigate("/faq")}
              className="
                inline-flex items-center gap-2 px-6 py-3 rounded-lg
                border border-primary/40 text-primary font-semibold text-sm
                hover:bg-primary/10 transition-all duration-200 no-underline cursor-pointer
              "
            >
              View FAQ →
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
