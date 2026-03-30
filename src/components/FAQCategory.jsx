import { motion } from 'framer-motion'

/**
 * FAQCategory
 * Renders a single sidebar / pill filter button for an FAQ category.
 *
 * Props:
 *  - label       {string}   Display text (e.g. "📱 Airtime & Data")
 *  - isActive    {boolean}  Whether this category is currently selected
 *  - onClick     {fn}       Called when the button is clicked
 *  - count       {number}   Number of questions in this category
 */
export default function FAQCategory({ label, isActive, onClick, count }) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={`
        relative w-full text-left flex items-center justify-between gap-2
        px-3.5 py-2.5 rounded-xl text-sm font-medium
        transition-all duration-200 border-none cursor-pointer
        ${isActive
          ? 'bg-primary/10 text-primary'
          : 'bg-transparent text-muted hover:bg-white/4 hover:text-[var(--text)]'
        }
      `}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span className={`
          text-[0.7rem] px-1.5 py-0.5 rounded-md font-semibold
          ${isActive
            ? 'bg-primary/20 text-primary'
            : 'bg-white/5 text-muted'
          }
        `}>
          {count}
        </span>
      )}
    </motion.button>
  )
}
