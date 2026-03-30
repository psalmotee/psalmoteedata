import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import FAQ from './pages/FAQ'

export default function App() {
  const [page, setPage] = useState('home')

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  return (
    <>
      <ScrollProgress />
      <Header page={page} setPage={setPage} />

      <AnimatePresence mode="wait">
        <motion.main
          key={page}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {page === 'home' && <Home setPage={setPage} />}
          {page === 'faq'  && <FAQ  setPage={setPage} />}
        </motion.main>
      </AnimatePresence>

      <BackToTop />
    </>
  )
}
