import { Search, X } from 'lucide-react'

export default function FAQSearch({ value, onChange }) {
  return (
    <div className="relative max-w-[560px] mx-auto mt-8">
      {/* Search icon */}
      <Search
        size={17}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search questions…"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="
          w-full bg-card border border-[var(--border)] rounded-2xl
          pl-11 pr-11 py-3.5
          text-[var(--text)] text-sm placeholder:text-muted
          outline-none focus:border-primary
          transition-colors duration-200
          font-sans
        "
      />

      {/* Clear button */}
      {value && (
        <button
          onClick={() => onChange('')}
          className="
            absolute right-4 top-1/2 -translate-y-1/2
            text-muted hover:text-[var(--text)]
            transition-colors duration-150
            bg-transparent border-none cursor-pointer p-0
          "
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}
