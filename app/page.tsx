import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import FAQAccordion from '@/components/FAQAccordion'
import ReviewCard from '@/components/ReviewCard'
import ScrollReveal from '@/components/ScrollReveal'
import LockGateDivider from '@/components/LockGateDivider'
import ChamberCard from '@/components/ChamberCard'
import CanalProgress from '@/components/CanalProgress'

export const metadata: Metadata = {
  title: 'Brannprosjektering i Skien | Skien Brannkonsult',
  description:
    'Skien Brannkonsult tilbyr brannkonsept, brannprosjektering og branntilsyn i Skien og på Telemark. Sentralt godkjent foretak. Få uforpliktende tilbud i dag.',
  alternates: { canonical: 'https://www.skienbrannkonsult.no' },
}

const chambers = [
  { id: 'hero', label: 'Sluseporten' },
  { id: 'sluse-1', label: 'Sluse 1 — Tjenester' },
  { id: 'sluse-2', label: 'Sluse 2 — Om oss' },
  { id: 'sluse-3', label: 'Sluse 3 — Anmeldelser' },
  { id: 'sluse-4', label: 'Sluse 4 — Spørsmål' },
]

const services = [
  {
    iconImage: '/images/icon-brannkonsept.gif',
    title: 'Brannkonsept',
    description:
      'Kommunen krever et brannkonsept ved de fleste byggesaker. Vi utarbeider helhetlige brannkonsept som ivaretar brannsikkerheten i ditt prosjekt — fra garasjer til leilighetsbygg.',
    href: '/brannkonsept',
  },
  {
    iconImage: '/images/icon-brannprosjektering.gif',
    title: 'Brannprosjektering',
    description:
      'Vi sørger for at bygget ditt oppfyller alle krav til brannsikkerhet, og finner praktiske løsninger som sparer både tid og kostnader. Fast pris der det er mulig.',
    href: '/brannprosjektering',
  },
  {
    iconImage: '/images/icon-branntilsyn.png',
    title: 'Branntilsyn',
    description:
      'Har du fått pålegg etter branntilsyn, eller ønsker du en grundig gjennomgang av byggets brannsikkerhet? Vi inspiserer hele bygningen og utarbeider tilstandsrapport.',
    href: '/branntilsyn',
  },
  {
    iconImage: '/images/icon-uavhengig-kontroll.png',
    title: 'Uavhengig kontroll',
    description:
      'I mange byggeprosjekter er det krav om uavhengig kontroll av brannsikkerheten. Vi sikrer at brannkonseptet er i tråd med gjeldende forskrifter.',
    href: '/uavhengig-kontroll',
  },
]

const stats = [
  { number: '1200+', label: 'Prosjekter gjennomført' },
  { number: 'TKL 1+2', label: 'Sentralt godkjent' },
  { number: 'Fast pris', label: 'Der det er mulig' },
  { number: 'Hele landet', label: 'Vi tar oppdrag overalt' },
]

const reviews = [
  {
    quote:
      'Jeg fikk hjelp med en ny boenhet i Bergen Sentrum. Rask tilbakemelding og grundig rapport. Anbefaler andre å bruke Brannkonsult AS!',
    author: 'Jan-David Antonsen',
    company: 'Anton Arkitekt AS',
  },
  {
    quote:
      'På spørsmål om brannkonsept, og ansvarsrett for fagområdet, fikk vi raskt og proffesjonelt svar. Hyggelig, ryddig og konstruktiv oppfølging.',
    author: 'Sivilarkitekt Sverre Krefting',
  },
  {
    quote:
      'Raskt svar, relevant og grundig rapport, kommunen likte måten det var gjort på. Alt til bra priser.',
    author: 'Vegard Hals',
  },
  {
    quote:
      'Vi brukte Brannkonsult AS i forbindelse med et tilbygg på en barnehage. Enkelt og greit — godt fornøyd med hele prosessen.',
    author: 'Håvard Musdalslien',
    company: 'Contre AS',
  },
]

const faqItems = [
  {
    question: 'Hva koster brannprosjektering i Skien?',
    answer:
      'Prisen varierer etter omfang og kompleksitet. Et brannkonsept i tiltaksklasse 2 starter hos oss fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi tilbyr alltid fastpris.',
  },
  {
    question: 'Trenger jeg brannprosjektering for mitt prosjekt?',
    answer:
      'De fleste byggesaker krever brannprosjektering — tilbygg, bruksendring, ny boenhet, påbygg. Ta kontakt for en gratis vurdering av ditt prosjekt.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer:
      'For nybygg og enklere saker er det ofte ikke nødvendig. Takket være digitale verktøy og kartdata kan vi i mange tilfeller jobbe uten fysisk befaring.',
  },
  {
    question: 'Er dere sentralt godkjent?',
    answer:
      'Ja, vi har sentral godkjenning for brannprosjektering i tiltaksklasse 1 og 2. Dette er en garanti for at vi er seriøse, godt forsikret og har dokumenterte referanseprosjekter.',
  },
  {
    question: 'Tar dere oppdrag utenfor Skien?',
    answer: 'Vi hjelper kunder i Skien, Telemark og hele landet.',
  },
]

const articles = [
  {
    href: '/artikler/pipebrann',
    image: '/images/article-pipebrann.jpg',
    title: 'Forebygg pipebrann med enkle grep',
    excerpt:
      'Er du i faresonen for å kunne få brann i skorsteinen? Les om hva som forårsaker pipebrann og enkle tiltak for å redusere risikoen.',
  },
  {
    href: '/artikler/brannslokker',
    image: '/images/article-brannslukker.jpg',
    title: 'Har du riktig brannslokkeapparat?',
    excerpt:
      'Vet du hvilken type brannslokker du trenger i hjemmet? Vi gjennomgår krav og forskjellen mellom pulver- og skumapparater.',
  },
  {
    href: '/artikler/roykvarsler',
    image: '/images/article-roykvarsler.jpg',
    title: 'Riktig røykvarsler redder liv',
    excerpt:
      'Er du godt nok sikret hvis det oppstår brann om natten? Vi forklarer krav til røykvarslere og riktig plassering.',
  },
]

export default function HomePage() {
  return (
    <>
      <CanalProgress chambers={chambers} />

      {/* ── HERO — Sluseporten (the gate you enter through) ── */}
      <section id="hero" className="relative min-h-screen lg:min-h-[92vh] flex items-center">
        <Image
          src="/images/hero.jpg"
          alt="Skien og Telemarkskanalen"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/85 via-brand-black/55 to-brand-black/15" />
        <div className="relative z-10 max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="gate-frame max-w-xl py-8">
            <p className="hero-1 sluse-label text-brand-orange text-sm mb-4">
              Sluseporten · Skien og Telemark
            </p>
            <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6">
              Brannprosjektering som følger deg trygt gjennom hele byggeprosessen
            </h1>
            <p className="hero-3 text-brand-white/70 text-base lg:text-lg leading-relaxed mb-8">
              Vi hjelper deg med brannprosjektering i Skien og Telemark. Sentralt godkjent foretak
              med over 1200 gjennomførte prosjekter — fast pris og rask levering, sluse for sluse
              gjennom hele prosessen.
            </p>
            <div className="hero-4 flex flex-wrap gap-4">
              <Link
                href="/kontakt-oss"
                className="bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200"
              >
                Få gratis tilbud
              </Link>
              <Link
                href="/om-oss"
                className="border-2 border-brand-white text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200"
              >
                Om oss
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SLUSE 1 — TJENESTER (staircase chambers) ── */}
      <LockGateDivider className="bg-brand-lightgray pt-10" />
      <section id="sluse-1" className="relative py-16 lg:py-24 bg-brand-lightgray overflow-hidden">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal className="mb-14 max-w-xl">
            <p className="sluse-label text-brand-orange text-xs mb-2">Sluse 1 av 4</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">
              Tjenester — hver etappe på veien mot et trygt bygg
            </h2>
          </ScrollReveal>
          <div className="relative">
            <div
              className="waterline hidden lg:block absolute left-6 top-0 bottom-0 w-[2px]"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 lg:pl-16">
              {services.map((service, i) => (
                <ChamberCard key={service.href} index={i}>
                  <ScrollReveal delay={i * 80}>
                    <ServiceCard {...service} />
                  </ScrollReveal>
                </ChamberCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SLUSE 2 — OM OSS + TILLIT ── */}
      <LockGateDivider className="bg-brand-dark pt-10" />
      <section id="sluse-2" className="py-16 lg:py-24 bg-brand-dark">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <p className="sluse-label text-brand-orange text-xs mb-2">Sluse 2 av 4</p>
              <h2 className="text-brand-white text-3xl lg:text-4xl font-black mb-6">Om oss</h2>
              <p className="text-brand-white/70 leading-relaxed mb-4">
                Skien er den historiske innfartsporten til Telemarkskanalen, kjent for sluseanlegget
                på Vrangfoss som løfter båter trinnvis gjennom fem kamre. Byen har også en lang
                industrihistorie gjennom Union og Norsk Hydro, med en bygningsmasse som spenner fra
                eldre trehusbebyggelse i sentrum til moderne industri- og boligbygg. Vi leverer
                brannkonsept og brannprosjektering til private, arkitekter og utbyggere i hele Skien
                og på Telemark.
              </p>
              <Link
                href="/om-oss"
                className="text-brand-orange font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Les mer om oss <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
            <ScrollReveal variant="scale">
              <div className="flex items-end justify-between gap-3 lg:gap-4 border-b-2 border-brand-orange/30">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="flex-1 text-center pb-4"
                    style={{ marginBottom: `${i * 16}px` }}
                  >
                    <div className="text-brand-orange font-black text-2xl lg:text-3xl mb-2">
                      {stat.number}
                    </div>
                    <div className="text-brand-white/70 text-xs lg:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SLUSE 3 — ANMELDELSER (boats passing through) ── */}
      <LockGateDivider className="bg-brand-white pt-10" />
      <section id="sluse-3" className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12 max-w-xl">
            <p className="sluse-label text-brand-orange text-xs mb-2">Sluse 3 av 4</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">
              Kundene passerer gjennom med gode ord
            </h2>
          </ScrollReveal>
        </div>
        <ScrollReveal variant="fade">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-4 sm:px-6 lg:px-8 max-w-[1350px] mx-auto">
            {reviews.map((r) => (
              <div key={r.author} className="snap-start shrink-0 w-[85%] sm:w-[45%] lg:w-[30%]">
                <ReviewCard {...r} />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── SLUSE 4 — SPØRSMÅL, ARTIKLER, SLUSEPORTEN ÅPNER ── */}
      <LockGateDivider className="bg-brand-lightgray pt-10" />
      <section id="sluse-4" className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10 max-w-xl">
            <p className="sluse-label text-brand-orange text-xs mb-2">Sluse 4 av 4</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">
              Vanlige spørsmål
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80} variant="fade">
            <div className="bg-brand-white border border-brand-gray rounded-[30px] p-8">
              <FAQAccordion items={faqItems} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex items-end justify-between mb-10">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Nyttige artikler</h2>
            <Link
              href="/artikler/pipebrann"
              className="text-brand-orange font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
            >
              Se alle <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <ScrollReveal key={a.href} delay={i * 80}>
                <Link
                  href={a.href}
                  className="group rounded-[30px] bg-brand-white border border-brand-gray hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-brand-black text-lg mb-2 group-hover:text-brand-orange transition-colors duration-200">
                      {a.title}
                    </h3>
                    <p className="text-brand-darkgray text-sm leading-relaxed mb-4 flex-1">
                      {a.excerpt}
                    </p>
                    <span className="text-brand-orange font-bold text-sm flex items-center gap-1">
                      Les mer{' '}
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA — Sluseporten åpner for deg ── */}
      <section className="bg-brand-dark py-16 lg:py-20">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="fade">
            <p className="sluse-label text-brand-orange text-xs mb-4">Sluseporten åpner for deg</p>
            <h2 className="text-brand-white text-3xl lg:text-4xl font-black mb-4">
              Klar for å komme i gang?
            </h2>
            <p className="text-brand-white/70 text-lg mb-8 max-w-xl mx-auto">
              Ta kontakt i dag for et uforpliktende tilbud på brannprosjektering i Skien. Vi svarer
              innen 24 timer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/kontakt-oss"
                className="bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200"
              >
                Få gratis tilbud
              </Link>
              <a
                href="tel:+4700000000"
                className="border-2 border-brand-white text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200 flex items-center gap-2"
              >
                <Phone size={16} /> Ring oss
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
