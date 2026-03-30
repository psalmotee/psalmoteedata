import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div
      className={`
        border rounded-2xl overflow-hidden transition-colors duration-200
        ${isOpen
          ? 'border-primary/35 bg-card'
          : 'border-[var(--border)] bg-card'
        }
      `}
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        className="
          w-full flex items-center justify-between gap-4
          px-5 py-4 text-left
          font-medium text-sm text-[var(--text)]
          hover:text-primary transition-colors duration-200
          bg-transparent border-none cursor-pointer
        "
      >
        <span>{q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`
            flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center
            transition-colors duration-200
            ${isOpen ? 'bg-primary/15 text-primary' : 'bg-[var(--border)] text-muted'}
          `}
        >
          <ChevronDown size={14} />
        </motion.span>
      </button>

      {/* Answer panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 pb-5 text-muted text-sm leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
