import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, CheckCircle, ShieldCheck } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import { socialMetadata } from '@/lib/seo'

const title = 'Uavhengig kontroll av brann i Skien og Telemark | Brannkonsult AS'
const description =
  'Uavhengig kontroll (UK) av brannkonsept i Skien, Porsgrunn, Kragerø og resten av Telemark. Sentralt godkjent foretak. Vi gjennomgår brannkonsept, branntegninger og løsningsvalg mot TEK17. Fast pris.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.skienbrannkonsult.no/uavhengig-kontroll' },
  ...socialMetadata({ title, description, path: '/uavhengig-kontroll', image: '/images/service-uavhengig-kontroll.jpg' }),
}

const faqItems = [
  {
    question: 'Arkitekten vår sier vi trenger "UK brann" — hva betyr det i praksis?',
    answer:
      'Det betyr at brannprosjekteringen på prosjektet deres må kvalitetssikres av noen som ikke selv har vært involvert i å utarbeide den. Vi går gjennom brannkonseptet, tegningene og de valgte løsningene opp mot regelverket, og dokumenterer funnene i en kontrollrapport som følger byggesaken. Uten denne erklæringen kan kommunen normalt ikke gi igangsettingstillatelse.',
  },
  {
    question: 'Hvordan vet jeg om prosjektet mitt faktisk trenger uavhengig kontroll?',
    answer:
      'Tommelfingerregelen er tiltaksklasse 2 eller høyere for brannprosjekteringen, jf. SAK10 § 14-2 — det dekker de fleste boligblokker, næringsbygg og industribygg. Er dere usikre på hvilken tiltaksklasse deres prosjekt havner i, send oss brannkonseptet, så avklarer vi det raskt.',
  },
  {
    question: 'Kan dere kontrollere et brannkonsept en annen rådgiver har laget?',
    answer:
      'Det er faktisk et krav, ikke bare mulig — den som utfører UK skal nettopp ikke ha prosjektert selv, det er poenget med at kontrollen er uavhengig. Vi tar oppdrag på brannkonsept utarbeidet av arkitekter, andre brannrådgivere og entreprenører.',
  },
  {
    question: 'Hva skjer hvis dere finner avvik i brannkonseptet?',
    answer:
      'Vi dokumenterer avviket i kontrollrapporten og beskriver hva som må rettes opp for at prosjekteringen skal være i tråd med TEK17. Deretter går ballen tilbake til den prosjekterende for retting, før vi ferdigstiller kontrollen. Vi hjelper gjerne med å konkretisere hva som mangler, slik at rettingen går raskt.',
  },
  {
    question: 'Utfører dere uavhengig kontroll i Porsgrunn og Kragerø?',
    answer:
      'Ja, vi tar UK-oppdrag i hele Grenland og Telemark — inkludert Skien, Porsgrunn, Kragerø, Bamble, Siljan og Nome. Kontrollen gjøres i all hovedsak som en dokumentgjennomgang, så avstand er sjelden et problem.',
  },
  {
    question: 'Hva koster uavhengig kontroll, og når betaler vi?',
    answer:
      'Prisen avhenger av brannkonseptets omfang og prosjektets kompleksitet. Vi ser gjennom underlaget og gir et fastpristilbud før vi starter kontrollen — dere vet altså kostnaden før dere bestiller.',
  },
]

const breadcrumb = breadcrumbSchema([
  { name: 'Hjem', path: '/' },
  { name: 'Uavhengig kontroll', path: '/uavhengig-kontroll' },
])

const faq = faqSchema(faqItems)

export default function UavhengigKontrollPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Uavhengig kontroll</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Uavhengig kontroll (UK) av brann for byggesaker i Grenland
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Fått krav om UK brann fra kommunen? Vi kvalitetssikrer brannkonseptet slik at prosjektet kan gå videre — for byggesaker i Skien, Porsgrunn, Kragerø og resten av Telemark.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-[68%]">
              <ScrollReveal>
                <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
                  Byggesaker i tiltaksklasse 2 og oppover stopper ofte opp fordi ingen har fått bekreftet at brannprosjekteringen faktisk holder mål — det er nettopp det uavhengig kontroll løser. En part uten tilknytning til prosjekteringen går gjennom brannkonseptet og dokumenterer at det er i tråd med regelverket, slik at kommunen kan gi igangsettingstillatelse uten unødig venting.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative h-64 lg:h-80 rounded-[20px] overflow-hidden mb-8">
                  <Image
                    src="/images/service-uavhengig-kontroll.jpg"
                    alt="Uavhengig kontroll av brannkonsept på byggeplass"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 700px"
                  />
                </div>

                <h2 className="text-brand-black text-2xl font-black mb-4">Rammene: SAK10 § 14-2</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Uavhengig kontroll av brannprosjektering er lovpålagt for tiltak i tiltaksklasse 2 (TKL 2) eller høyere — i praksis de fleste boligblokker, næringsbygg, industribygg og andre bygninger med skjerpede krav til brannsikkerhet. Både ansvarlig søker og prosjekterende foretak vil normalt kreve at kontrollen er på plass før byggingen kan starte.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Dette går vi gjennom i kontrollen</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Om brannkonseptet er i tråd med TEK17 med veiledning',
                    'Om risikoklasse og brannklasse er riktig fastsatt for bygget',
                    'Branncelleinndeling og eventuell seksjonering',
                    'Om rømningsveier og røykventilasjon faktisk fungerer som forutsatt',
                    'Hvilke krav som er satt til branntekniske installasjoner',
                    'Om branntegningene stemmer med det som faktisk er beskrevet i teksten',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Slik foregår kontrollen hos oss</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: ShieldCheck, title: 'En uavhengig fagperson', desc: 'Kontrollen gjøres av en brannrådgiver som ikke har vært involvert i prosjekteringen.' },
                    { icon: CheckCircle, title: 'Konkret tilbakemelding', desc: 'Dere får en rapport der eventuelle avvik er beskrevet slik at de er mulig å rette opp.' },
                    { icon: ShieldCheck, title: 'Signert erklæring', desc: 'Vi erklærer ansvarsrett som uavhengig kontrollerende overfor kommunen.' },
                    { icon: CheckCircle, title: 'Ingen bindinger', desc: 'Vi har verken solgt eller skal selge noen løsning inn i prosjektet.' },
                  ].map((item, i) => (
                    <div key={i} className="rounded-[20px] bg-brand-lightgray p-5 flex items-start gap-3">
                      <item.icon size={20} className="text-brand-orange shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-brand-black mb-1 text-sm">{item.title}</h3>
                        <p className="text-brand-darkgray text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hvorfor det er en fordel at vi ikke selger noe</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Vi har verken produkter eller håndverkertjenester å tjene på. Det betyr at vi ikke har noen egeninteresse i hvilken løsning som velges i brannkonseptet — vurderingen vår er styrt utelukkende av om løsningen faktisk oppfyller kravene, ikke av hva som ville vært lønnsomt for oss å anbefale.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="rounded-[30px] border border-brand-gray p-8 bg-brand-lightgray">
                  <h2 className="text-brand-black text-2xl font-black mb-6">Ofte stilte spørsmål</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:w-[32%]">
              <ScrollReveal delay={200}>
                <div className="rounded-[20px] border border-brand-gray p-6 bg-brand-dark">
                  <h3 className="font-bold text-xl mb-3 text-brand-white">Venter byggesaken på UK brann?</h3>
                  <p className="text-brand-white/60 text-sm mb-6 leading-relaxed">
                    Send oss brannkonseptet, så gir vi et fastpristilbud på kontrollen før dere bestemmer dere.
                  </p>
                  <Link href="/kontakt-oss" className="block bg-brand-orange text-brand-white font-bold px-6 py-3.5 rounded-[10px] text-center hover:opacity-90 transition-opacity mb-6">
                    Kontakt oss
                  </Link>
                  <div className="space-y-3 pt-4 border-t border-brand-white/10">
                    <a href="tel:+4797293977" className="flex items-center gap-2 text-brand-white/60 hover:text-brand-orange transition-colors text-sm">
                      <Phone size={14} /> +47 972 93 977
                    </a>
                    <a href="mailto:post@skienbrannkonsult.no" className="flex items-center gap-2 text-brand-white/60 hover:text-brand-orange transition-colors text-sm">
                      <Mail size={14} /> post@skienbrannkonsult.no
                    </a>
                  </div>
                </div>
                <div className="mt-6 rounded-[20px] border border-brand-gray p-6 bg-brand-lightgray">
                  <h3 className="font-bold text-brand-black text-lg mb-4">Andre tjenester</h3>
                  <ul className="space-y-3">
                    {[
                      { href: '/brannkonsept', label: 'Brannkonsept' },
                      { href: '/brannprosjektering', label: 'Brannprosjektering' },
                      { href: '/branninspeksjon', label: 'Branninspeksjon' },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-brand-darkgray hover:text-brand-orange transition-colors text-sm font-medium">→ {link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal variant="fade">
        <section className="bg-brand-dark py-14">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-white text-2xl lg:text-3xl font-black mb-6">
              Send oss brannkonseptet — vi kvalitetssikrer det uavhengig
            </h2>
            <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Kontakt oss
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
