import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const columns = [
  {
    heading: 'Snarveier',
    links: [
      { href: '/', label: 'Hjem' },
      { href: '/om-oss', label: 'Om oss' },
      { href: '/artikler/pipebrann', label: 'Artikler' },
      { href: '/kontakt-oss', label: 'Kontakt oss' },
    ],
  },
  {
    heading: 'Tjenester',
    links: [
      { href: '/brannkonsept', label: 'Brannkonsept' },
      { href: '/brannprosjektering', label: 'Brannprosjektering' },
      { href: '/branntilsyn', label: 'Branntilsyn' },
      { href: '/uavhengig-kontroll', label: 'Uavhengig kontroll' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-white">
      {/* "Kanalkart" — the three blocks descend at staggered heights, echoing the
          chamber-card staircase used throughout the site */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {/* Col 1: Logo + tagline + socials */}
          <div className="md:pt-0">
            <div className="mb-5">
              <Image src="/images/logo-white.png" alt="Skien Brannkonsult" width={234} height={72} className="object-contain" />
            </div>
            <p className="text-brand-white/60 text-sm leading-relaxed mb-6">
              Sentralt godkjent foretak for brannprosjektering i tiltaksklasse 1 og 2. Vi hjelper
              deg med brannkonsept, brannprosjektering og branntilsyn i Skien og på Telemark.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-brand-white/50 hover:text-brand-orange transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram" className="text-brand-white/50 hover:text-brand-orange transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-brand-white/50 hover:text-brand-orange transition-colors">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Snarveier — staggered down + divided by a thin gate-line rather than a plain gap */}
          <div className="md:pt-8 md:border-l md:border-brand-white/10 md:pl-6">
            <h3 className="sluse-label text-brand-orange mb-5 text-xs">
              {columns[0].heading}
            </h3>
            <ul className="space-y-3">
              {columns[0].links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-white/60 hover:text-brand-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tjenester — steps down one chamber further than col 2 */}
          <div className="md:pt-16 md:border-l md:border-brand-white/10 md:pl-6">
            <h3 className="sluse-label text-brand-orange mb-5 text-xs">
              {columns[1].heading}
            </h3>
            <ul className="space-y-3">
              {columns[1].links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-white/60 hover:text-brand-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2 text-sm text-brand-white/60">
              <a href="tel:+4700000000" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
                <Phone size={13} /> +47 000 00 000
              </a>
              <a href="mailto:post@skienbrannkonsult.no" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
                <Mail size={13} /> post@skienbrannkonsult.no
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Final gate band */}
      <div className="gate-band-top">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-white/40 text-sm">
            © {new Date().getFullYear()} Skien Brannkonsult AS. Alle rettigheter forbeholdt.
          </p>
          <Image
            src="/images/sentralt-godkjent.png"
            alt="Sentralt godkjent"
            width={100}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  )
}
