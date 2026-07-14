interface Props {
  className?: string
}

export default function LockGateDivider({ className = '' }: Props) {
  return (
    <div className={`max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1350 24" preserveAspectRatio="none" className="w-full h-6 overflow-visible">
        <line x1="0" y1="6" x2="1350" y2="6" strokeWidth="2" className="stroke-brand-orange" />
        <line x1="0" y1="18" x2="1350" y2="18" strokeWidth="1" className="stroke-brand-orange/40" />
        <line x1="675" y1="0" x2="675" y2="24" strokeWidth="3" className="stroke-brand-orange" />
      </svg>
    </div>
  )
}
