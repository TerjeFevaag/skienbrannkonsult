import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, Mail, CalendarCheck, FileText, MessageCircle, Users } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import FAQAccordion from '@/components/FAQAccordion'
import ReviewCard from '@/components/ReviewCard'
import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from '@/components/ContactForm'
import { socialMetadata } from '@/lib/seo'

const title = 'Brannprosjektering i Skien, Porsgrunn og Telemark | Brannkonsult AS'
const description =
  'Brannkonsult AS tilbyr brannkonsept, brannprosjektering og branninspeksjon i Skien, Porsgrunn og resten av Telemark. Sentralt godkjent foretak. Få uforpliktende tilbud i dag.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.skienbrannkonsult.no' },
  ...socialMetadata({ title, description, path: '/', image: '/images/hero.jpg' }),
}

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
    title: 'Branninspeksjon',
    description:
      'Har du fått pålegg etter branntilsyn, eller ønsker du en grundig gjennomgang av byggets brannsikkerhet? Vi inspiserer hele bygningen og utarbeider tilstandsrapport.',
    href: '/branninspeksjon',
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

const gettingStarted = [
  {
    icon: CalendarCheck,
    title: 'Bestill befaring',
    description: 'Trenger prosjektet ditt en fysisk gjennomgang? Vi avtaler en befaring som passer deg.',
    href: '/kontakt-oss',
  },
  {
    icon: FileText,
    title: 'Få tilbud',
    description: 'Send oss byggesakstegninger og prosjektbeskrivelse, så sender vi et uforpliktende fastprisstilbud.',
    href: '/kontakt-oss',
  },
  {
    icon: MessageCircle,
    title: 'Snakk med rådgiver',
    description: 'Usikker på hva du trenger? Ring eller send e-post, så veileder vi deg videre.',
    href: '/kontakt-oss',
  },
  {
    icon: Users,
    title: 'Se referanser',
    description: 'Les hva tidligere kunder — arkitekter, utbyggere og private — sier om samarbeidet med oss.',
    href: '/om-oss',
  },
]

const reviews = [
  {
    quote:
      'Svært fornøyd. Tar seg tid til å drøfte fornuftige og økonomiske løsninger. Setter pris på at dere er med på en forhåndsvurdering på telefon før bestilling av prosjektering.',
    author: 'Clas Marberg',
    company: 'Marberg Bygg- og Tegneservice',
  },
  {
    quote:
      'Jeg opplevde rask respons på min henvendelse, at jeg ble vennlig mottatt og at brannprosjekteringen av mitt utbyggingsprosjekt ble prioritert og like så godt utført.',
    author: 'Mai Elin Wehn',
  },
  {
    quote:
      'Fornøyd med å få hjelp og råd til å få godkjent kjellervindu med hensyn til brannforskrifter.',
    author: 'Anders Reitan',
  },
  {
    quote:
      'Brannkonsult leverte rask, effektivt og ryddig. God kommunikasjon i prosessen og sluttproduktet var veldig bra og ingen dyre overraskelser.',
    author: 'Erland Tullut',
    company: 'JT Utvikling AS',
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
    answer: 'Ja, vi hjelper kunder i Skien, Porsgrunn, resten av Telemark og hele landet.',
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
      {/* ── HERO ── */}
      <section className="relative min-h-screen lg:min-h-[92vh] flex items-center">
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
          <div className="max-w-xl">
            <p className="hero-1 text-brand-orange text-sm font-bold uppercase tracking-wide mb-4">
              Skien, Porsgrunn og Telemark
            </p>
            <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6">
              Brannprosjektering som følger deg trygt gjennom hele byggeprosessen
            </h1>
            <p className="hero-3 text-brand-white/70 text-base lg:text-lg leading-relaxed mb-8">
              Vi hjelper deg med brannprosjektering i Skien, Porsgrunn og resten av Telemark. Sentralt godkjent foretak
              med over 1200 gjennomførte prosjekter — fast pris og rask levering.
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

      {/* ── TJENESTER — flat solutions row ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-14 max-w-xl">
            <p className="text-brand-orange text-xs font-bold uppercase tracking-wide mb-2">
              Våre tjenester
            </p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">
              Brannsikkerhet gjennom hele byggeprosessen
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.href} delay={i * 80}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OM OSS + TILLIT ── */}
      <section className="py-16 lg:py-24 bg-brand-dark">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <p className="text-brand-orange text-xs font-bold uppercase tracking-wide mb-2">Om oss</p>
              <h2 className="text-brand-white text-3xl lg:text-4xl font-black mb-6">
                Lokalkunnskap fra Skien, Porsgrunn og Telemark
              </h2>
              <p className="text-brand-white/70 leading-relaxed mb-4">
                Skien er den historiske innfartsporten til Telemarkskanalen, kjent for sluseanlegget
                på Vrangfoss som løfter båter trinnvis gjennom fem kamre. Regionen har også en lang
                industrihistorie — Union i Skien og Norsk Hydros anlegg på Herøya i Porsgrunn — med
                en bygningsmasse som spenner fra eldre trehusbebyggelse i sentrum til store
                industrianlegg langs Frierfjorden. Vi leverer brannkonsept og brannprosjektering til
                private, arkitekter og utbyggere i Skien, Porsgrunn og resten av Telemark.
              </p>
              <Link
                href="/om-oss"
                className="text-brand-orange font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Les mer om oss <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
            <ScrollReveal variant="scale">
              <div className="grid grid-cols-2 gap-6 border-t border-brand-white/10 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
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

      {/* ── KOM I GANG — 4 engagement cards ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-14 max-w-xl">
            <p className="text-brand-orange text-xs font-bold uppercase tracking-wide mb-2">
              Kom i gang
            </p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">
              Slik kommer du i gang med oss
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {gettingStarted.map((item, i) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <Link
                    href={item.href}
                    className="group block h-full bg-brand-lightgray rounded-[30px] p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-[10px] bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors duration-300">
                      <Icon size={24} className="text-brand-orange group-hover:text-brand-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-brand-black text-lg mb-2">{item.title}</h3>
                    <p className="text-brand-darkgray text-sm leading-relaxed">{item.description}</p>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ANMELDELSER ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12 max-w-xl">
            <p className="text-brand-orange text-xs font-bold uppercase tracking-wide mb-2">
              Anmeldelser
            </p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">
              Hva kundene våre sier
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={r.author} delay={i * 80}>
                <ReviewCard {...r} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTIKLER ── */}
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

      {/* ── SPØRSMÅL ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10 max-w-xl">
            <p className="text-brand-orange text-xs font-bold uppercase tracking-wide mb-2">
              Spørsmål
            </p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Vanlige spørsmål</h2>
          </ScrollReveal>
          <ScrollReveal delay={80} variant="fade">
            <div className="bg-brand-white border border-brand-gray rounded-[30px] p-8">
              <FAQAccordion items={faqItems} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA — snakk med en rådgiver ── */}
      <section className="bg-brand-dark py-16 lg:py-20">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="fade">
            <p className="text-brand-orange text-xs font-bold uppercase tracking-wide mb-4">
              Snakk med en rådgiver
            </p>
            <h2 className="text-brand-white text-3xl lg:text-4xl font-black mb-4">
              Klar for å komme i gang?
            </h2>
            <p className="text-brand-white/70 text-lg mb-8 max-w-xl mx-auto">
              Over 1200 gjennomførte prosjekter og sentral godkjenning i tiltaksklasse 1 og 2. Ta
              kontakt i dag for et uforpliktende tilbud på brannprosjektering i Skien, Porsgrunn eller Telemark.
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

      {/* ── KONTAKTSKJEMA — embedded lead form ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal>
              <p className="text-brand-orange text-xs font-bold uppercase tracking-wide mb-2">
                Kontakt oss
              </p>
              <h2 className="text-brand-black text-3xl lg:text-4xl font-black mb-4">
                Få et uforpliktende tilbud
              </h2>
              <p className="text-brand-darkgray leading-relaxed mb-8">
                Fyll ut skjemaet, så tar vi kontakt innen 24 timer med et fastprisstilbud tilpasset
                prosjektet ditt.
              </p>
              <div className="space-y-3 text-sm">
                <a href="tel:+4700000000" className="flex items-center gap-2 text-brand-darkgray hover:text-brand-orange transition-colors">
                  <Phone size={16} /> +47 000 00 000
                </a>
                <a href="mailto:post@skienbrannkonsult.no" className="flex items-center gap-2 text-brand-darkgray hover:text-brand-orange transition-colors">
                  <Mail size={16} /> post@skienbrannkonsult.no
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="scale">
              <div className="bg-brand-lightgray rounded-[30px] p-8">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
