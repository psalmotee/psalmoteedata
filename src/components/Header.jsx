import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import logo from '../assets/psalmoteedata-logo.png'

const NAV_LINKS = [
  { label: 'Home',     key: 'home',     href: '#home'     },
  { label: 'Services', key: 'services', href: '#services'  },
  { label: 'FAQs',     key: 'faq',      href: '#faq'       },
  { label: 'Contact',  key: 'contact',  href: '#contact'   },
]

const LINKS = {
  login: "https://psalmoteedata.com.ng/vpaccount/",
  register: "https://psalmoteedata.com.ng/vpaccount/?register",
  guest: "https://psalmoteedata.com.ng/vpaccount-offline-2",
};

export default function Header({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNav = (e, key) => {
    e.preventDefault()
    if (key === 'faq') {
      setPage('faq')
    } else {
      setPage('home')
      // Anchor scroll happens naturally after page mounts
      if (key !== 'home') {
        setTimeout(() => {
          document.getElementById(key)?.scrollIntoView({ behavior: 'smooth' })
        }, 350)
      }
    }
    setMenuOpen(false)
  }

  return (
    <>
      {/* ── HEADER BAR ── */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${scrolled
            ? 'bg-bg/95 backdrop-blur-xl border-b border-[var(--border)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between h-[70px]">

          {/* Logo */}
          <a
            href="#home"
            onClick={e => handleNav(e, 'home')}
            className="flex items-center gap-2.5 no-underline"
          >
            <img src={logo} alt="PsalmoteeData" className="w-9 h-9 object-contain" />
            <span
              className="font-display font-bold text-[0.8rem] md:text-[1.15rem] gradient-text"
            >
              PsalmoteeData
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map(l => (
              <a
                key={l.key}
                href={l.href}
                onClick={e => handleNav(e, l.key)}
                className={`
                  relative text-sm font-medium no-underline transition-colors duration-200
                  ${page === l.key || (page === 'faq' && l.key === 'faq')
                    ? 'text-primary'
                    : 'text-muted hover:text-[var(--text)]'
                  }
                `}
              >
                {l.label}
                {(page === l.key || (page === 'faq' && l.key === 'faq')) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full"
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href={LINKS.login}
              className="hidden sm:inline-block text-muted hover:text-[var(--text)] text-sm font-medium transition-colors duration-200 no-underline"
            >
              Login
            </a>
            <a
              href={LINKS.register}
              className="
                inline-flex items-center gap-1.5
                bg-gradient-to-r from-primary to-blue
                text-white text-sm font-semibold
                px-5 py-2 rounded-[10px] no-underline
                shadow-[0_4px_15px_rgba(14,165,198,0.3)]
                hover:shadow-[0_6px_22px_rgba(14,165,198,0.45)]
                hover:-translate-y-0.5 transition-all duration-200
              "
            >
              Register
            </a>
            {/* Hamburger */}
            <button
              className="md:hidden p-1.5 text-[var(--text)]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="
              fixed top-[70px] left-0 right-0 bottom-0 z-40
              bg-bg/98 backdrop-blur-2xl
              border-t border-[var(--border)]
              px-6 pt-8 pb-10
              flex flex-col
              md:hidden
            "
          >
            <nav className="flex flex-col gap-1 mb-8">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.key}
                  href={l.href}
                  onClick={e => handleNav(e, l.key)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="
                    flex items-center justify-between
                    py-4 text-lg font-medium no-underline
                    border-b border-[var(--border)]
                    text-[var(--text)] hover:text-primary transition-colors
                  "
                >
                  {l.label}
                  <ChevronRight size={16} className="text-muted" />
                </motion.a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 mt-auto">
              <a
                href={LINKS.login}
                className="
                  text-center py-3.5 rounded-[12px]
                  border border-primary text-primary
                  font-semibold text-sm no-underline
                  hover:bg-primary/10 transition-colors
                "
              >
                Login
              </a>
              <a
                href={LINKS.register}
                className="
                  text-center py-3.5 rounded-[12px]
                  bg-gradient-to-r from-primary to-blue
                  text-white font-semibold text-sm no-underline
                  shadow-[0_4px_15px_rgba(14,165,198,0.3)]
                "
              >
                Create Account
              </a>
              <a
                href={LINKS.guest}
                className="
                  text-center text-sm text-muted
                  no-underline hover:text-primary transition-colors
                  mt-1
                "
              >
                Continue as Guest →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
