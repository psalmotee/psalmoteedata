import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import FAQItem     from '../components/FAQItem'
import FAQSearch   from '../components/FAQSearch'
import FAQCategory from '../components/FAQCategory'
import Footer      from '../components/Footer'
import { FAQ_DATA } from '../data/faqData'

const ALL_CATEGORY = { id: 'all', label: '🔍 All Questions', icon: '' }

export default function FAQ({ setPage }) {
  const [search,     setSearch]     = useState('')
  const [activeId,   setActiveId]   = useState('all')
  const [openItems,  setOpenItems]  = useState({})          // { "catId-idx": bool }

  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  // ── Toggle accordion ──
  const toggle = (catId, idx) => {
    const key = `${catId}-${idx}`
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  // ── Filter logic ──
  const query = search.toLowerCase().trim()

  const filtered = FAQ_DATA
    .filter(cat => activeId === 'all' || cat.id === activeId)
    .map(cat => ({
      ...cat,
      questions: cat.questions.filter(
        item =>
          !query ||
          item.q.toLowerCase().includes(query) ||
          item.a.toLowerCase().includes(query)
      ),
    }))
    .filter(cat => cat.questions.length > 0)

  // Scroll to category section
  const scrollToCategory = (id) => {
    if (id === 'all') return
    setTimeout(() => {
      document.getElementById(`faq-cat-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }

  const handleCategoryClick = (id) => {
    setActiveId(id)
    scrollToCategory(id)
  }

  return (
    <>
      {/* ── HERO ── */}
      <div
        ref={heroRef}
        className="
          pt-[100px] pb-12 px-5 text-center
          bg-gradient-to-b from-primary/8 via-transparent to-transparent
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag" style={{ justifyContent: 'center' }}>FAQ</span>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted text-base max-w-[460px] mx-auto leading-relaxed">
            Find quick answers to common questions about our services,
            payments, and account management.
          </p>

          <FAQSearch value={search} onChange={setSearch} />
        </motion.div>
      </div>

      {/* ── BODY: Sidebar + Content ── */}
      <div className="max-w-[1100px] mx-auto px-5 py-12 pb-20 flex gap-10">

        {/* ── Sidebar ── */}
        <aside className="hidden md:block w-[210px] flex-shrink-0 sticky top-24 self-start">
          <p className="text-[0.7rem] text-muted uppercase tracking-[2px] font-semibold mb-3">
            Categories
          </p>

          {[ALL_CATEGORY, ...FAQ_DATA].map(cat => {
            const count = cat.id === 'all'
              ? FAQ_DATA.reduce((s, c) => s + c.questions.length, 0)
              : cat.questions?.length

            return (
              <FAQCategory
                key={cat.id}
                label={`${cat.icon ?? ''} ${cat.label}`}
                isActive={activeId === cat.id}
                count={count}
                onClick={() => handleCategoryClick(cat.id)}
              />
            )
          })}
        </aside>

        {/* ── Mobile category pills ── */}
        <div className="md:hidden w-full mb-6 flex flex-wrap gap-2">
          {[ALL_CATEGORY, ...FAQ_DATA].map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`
                px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200
                ${activeId === cat.id
                  ? 'bg-primary/15 text-primary border-primary/35'
                  : 'bg-card border-[var(--border)] text-muted hover:text-[var(--text)]'
                }
              `}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* ── FAQ content ── */}
        <div className="flex-1 min-w-0">

          {/* No results */}
          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted">
              <div className="text-4xl mb-4">🤔</div>
              <p className="text-base font-medium mb-1">No results found</p>
              <p className="text-sm">
                Try a different search term or{' '}
                <button
                  onClick={() => setSearch('')}
                  className="text-primary underline bg-transparent border-none cursor-pointer"
                >
                  clear the search
                </button>
              </p>
            </div>
          )}

          {/* Category sections */}
          {filtered.map(cat => (
            <div
              key={cat.id}
              id={`faq-cat-${cat.id}`}
              className="mb-10 scroll-mt-24"
            >
              {/* Category heading */}
              <h2 className="
                text-[0.7rem] text-primary uppercase tracking-[2px]
                font-semibold mb-4 pb-3 border-b border-[var(--border)]
              ">
                {cat.icon} {cat.label}
              </h2>

              {/* Accordion items */}
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

          {/* ── Still need help? ── */}
          {filtered.length > 0 && (
            <div className="
              bg-card border border-[var(--border)] rounded-[20px]
              p-9 text-center mt-8
            ">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-display font-semibold text-lg mb-2">Still need help?</h3>
              <p className="text-muted text-sm mb-6 max-w-[360px] mx-auto leading-relaxed">
                Can't find what you're looking for? Our support team is available
                24/7 to assist you with any questions or issues.
              </p>
              <a
                href="/contact"
                className="
                  inline-flex items-center gap-2
                  bg-gradient-to-r from-primary to-blue
                  text-white text-sm font-semibold
                  px-7 py-3.5 rounded-xl no-underline
                  shadow-[0_4px_15px_rgba(14,165,198,0.3)]
                  hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(14,165,198,0.45)]
                  transition-all duration-200
                "
              >
                Contact Support →
              </a>
            </div>
          )}
        </div>
      </div>

      <Footer setPage={setPage} />
    </>
  )
}
