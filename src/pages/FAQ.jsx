import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaQuestionCircle, FaArrowRight } from "react-icons/fa";
import { FcOnlineSupport } from "react-icons/fc";
import FAQItem from "../components/FAQItem";
import FAQSearch from "../components/FAQSearch";
import FAQCategory from "../components/FAQCategory";
import { FAQ_DATA } from "../data/faqData";

const ALL_CATEGORY = {
  id: "all",
  label: "All Questions",
  icon: FaQuestionCircle,
};

// Safely render an icon whether it's a component or element
function CategoryIcon({ icon: Icon }) {
  if (!Icon) return null;
  if (typeof Icon === "function") return <Icon />;
  return <span>{Icon}</span>;
}

export default function FAQ() {
  const [search, setSearch]     = useState("");
  const [activeId, setActiveId] = useState("all");
  const [openItems, setOpenItems] = useState({});

  const heroRef  = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  // ── Accordion toggle ──
  const toggle = (catId, idx) => {
    const key = `${catId}-${idx}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // ── Filter logic ──
  const query = search.toLowerCase().trim();

  const filtered = FAQ_DATA
    .filter((cat) => activeId === "all" || cat.id === activeId)
    .map((cat) => ({
      ...cat,
      questions: cat.questions.filter(
        (item) =>
          !query ||
          item.q.toLowerCase().includes(query) ||
          item.a.toLowerCase().includes(query)
      ),
    }))
    .filter((cat) => cat.questions.length > 0);

  // ── Category click: update state + scroll ──
  const handleCategoryClick = (id) => {
    setActiveId(id);
    setTimeout(() => {
      const target =
        id === "all"
          ? document.getElementById("faq-content-top")
          : document.getElementById(`faq-cat-${id}`);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const allCategories = [ALL_CATEGORY, ...FAQ_DATA];

  return (
    <div className="psalmotee-app">

      {/* ── HERO ── */}
      <div
        ref={heroRef}
        className="pt-[100px] pb-12 px-5 text-center relative overflow-hidden bg-gradient-to-b from-primary/8 via-transparent to-transparent"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag" style={{ justifyContent: "center" }}>FAQ</span>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted text-base max-w-[460px] mx-auto leading-relaxed">
            Find quick answers to common questions about our services, payments,
            and account management.
          </p>
          <FAQSearch value={search} onChange={setSearch} />
        </motion.div>
      </div>

      {/*
        ── FIX: MOBILE CATEGORY PILLS ──
        ROOT CAUSE: Pills were a sibling inside the `flex gap-10` row,
        causing horizontal overflow. They now live ABOVE the flex row,
        only visible on mobile (md:hidden).
      */}
      <div className="md:hidden px-4 pt-4 pb-2">
        <div className="flex flex-wrap gap-2">
          {allCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`
                inline-flex items-center gap-1.5
                px-3.5 py-1.5 rounded-full text-xs font-semibold border
                transition-all duration-200 cursor-pointer
                ${activeId === cat.id
                  ? "bg-primary/15 text-primary border-primary/35"
                  : "bg-card border-[var(--border)] text-muted hover:text-[var(--text)]"
                }
              `}
            >
              <CategoryIcon icon={cat.icon} />
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/*
        ── FIX: BODY LAYOUT ──
        ROOT CAUSE: `flex gap-10` without `flex-col` on mobile caused
        horizontal overflow. Fixed with `flex-col md:flex-row`.
      */}
      <div
        id="faq-content-top"
        className="max-w-[1100px] mx-auto px-4 sm:px-5 py-8 md:py-12 pb-16 md:pb-20 flex flex-col md:flex-row gap-6 md:gap-10"
      >

        {/* ── Desktop Sidebar ── */}
        <aside className="hidden md:block w-[210px] flex-shrink-0 sticky top-24 self-start">
          <p className="text-[0.7rem] text-muted uppercase tracking-[2px] font-semibold mb-3">
            Categories
          </p>
          {allCategories.map((cat) => {
            const count =
              cat.id === "all"
                ? FAQ_DATA.reduce((s, c) => s + c.questions.length, 0)
                : cat.questions?.length ?? 0;
            return (
              <FAQCategory
                key={cat.id}
                label={
                  <span className="flex items-center gap-2">
                    <CategoryIcon icon={cat.icon} />
                    <span>{cat.label}</span>
                  </span>
                }
                isActive={activeId === cat.id}
                count={count}
                onClick={() => handleCategoryClick(cat.id)}
              />
            );
          })}
        </aside>

        {/*
          ── FIX: CONTENT AREA ──
          `min-w-0` prevents flex children from overflowing their container.
          `w-full` ensures correct width in the column (mobile) layout.
        */}
        <div className="flex-1 min-w-0 w-full">

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted">
              <div className="text-4xl mb-4">
                <FaQuestionCircle className="inline-block opacity-50" />
              </div>
              <p className="text-base font-medium mb-1">No results found</p>
              <p className="text-sm">
                Try a different search term or{" "}
                <button
                  onClick={() => setSearch("")}
                  className="text-primary underline bg-transparent border-none cursor-pointer"
                >
                  clear the search
                </button>
              </p>
            </div>
          )}

          {filtered.map((cat) => (
            <div
              key={cat.id}
              id={`faq-cat-${cat.id}`}
              className="mb-10 scroll-mt-24"
            >
              <h2 className="text-[0.7rem] text-primary uppercase tracking-[2px] font-semibold mb-4 pb-3 border-b border-[var(--border)] flex items-center gap-2">
                <CategoryIcon icon={cat.icon} />
                {cat.label}
              </h2>
              <div className="flex flex-col gap-2.5">
                {cat.questions.map((item, idx) => (
                  <FAQItem
                    key={idx}
                    q={item.q}
                    a={item.a}
                    isOpen={!!openItems[`${cat.id}-${idx}`]}
                    onToggle={() => toggle(cat.id, idx)}
                  />
                ))}
              </div>
            </div>
          ))}

          {filtered.length > 0 && (
            <div className="bg-card border border-[var(--border)] rounded-[20px] p-7 sm:p-9 text-center mt-8">
              <div className="text-4xl mb-3 flex justify-center">
                <FcOnlineSupport />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Still need help?</h3>
              <p className="text-muted text-sm mb-6 max-w-[360px] mx-auto leading-relaxed">
                Can't find what you're looking for? Our support team is available 24/7.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue text-white text-sm font-semibold px-7 py-3.5 rounded-xl no-underline shadow-[0_4px_15px_rgba(14,165,198,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(14,165,198,0.45)] transition-all duration-200"
              >
                Contact Support <FaArrowRight />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
