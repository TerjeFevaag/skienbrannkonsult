import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import { socialMetadata } from '@/lib/seo'

const title = 'Brannprosjektering i Skien og Telemark | Brannkonsult AS'
const description =
  'Profesjonell brannprosjektering i Skien, Porsgrunn, Kragerø og resten av Telemark. Sentralt godkjent TKL 1+2. Fast pris fra ca. 15 000 kr. Tilbygg, bruksendring, nybygg.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.skienbrannkonsult.no/brannprosjektering' },
  ...socialMetadata({ title, description, path: '/brannprosjektering', image: '/images/service-brannprosjektering.jpg' }),
}

const faqItems = [
  {
    question: 'Jeg skal bygge om garasjen til utleiedel i Skien — trenger jeg brannprosjektering?',
    answer:
      'Ja, i de aller fleste tilfeller. Å etablere en ny selvstendig boenhet — enten det er en utleiedel, en hybel eller en sekundærleilighet — utløser krav om brannprosjektering, fordi enheten skal kunne evakueres uavhengig av resten av bygget. Det samme gjelder tilbygg, påbygg og de fleste andre søknadspliktige tiltak. Usikker på ditt tilfelle? Beskriv prosjektet kort, så avklarer vi det gratis.',
  },
  {
    question: 'Tar dere oppdrag i Porsgrunn og Kragerø også?',
    answer:
      'Ja, vi utfører brannprosjektering i hele Grenland og Telemark — inkludert Skien, Porsgrunn, Kragerø, Bamble, Siljan og Nome. Befaring er sjelden nødvendig, så avstand er normalt ikke noe hinder for prosjektet ditt.',
  },
  {
    question: 'Hva koster det, og hva ligger i prisen?',
    answer:
      'For tiltaksklasse 2 starter det normalt fra ca. 15 000 kr ekskl. mva., og det inkluderer branntegningene dere trenger til søknaden. Vi gir fastpris skriftlig før vi setter i gang — ingen timepris som løper, og ingen tilleggsfakturaer underveis.',
  },
  {
    question: 'Trenger dere å besøke bygget mitt fysisk?',
    answer:
      'Som regel ikke. God dokumentasjon — plantegninger, snitt, fasader og bilder — er ofte nok til at vi kan gjøre en solid brannprosjektering fra kontoret. Er bygget komplekst nok til at en befaring er nødvendig for et forsvarlig resultat, avtaler vi det med dere først.',
  },
  {
    question: 'Kommer dere til å forsøke å selge meg sprinkling eller andre løsninger?',
    answer:
      'Nei. Vi har ingen produkter eller håndverkertjenester å tjene på, kun rådgivningen. Det betyr at løsningene vi foreslår er styrt av hva som faktisk er nødvendig for prosjektet ditt — ikke av hva som er lønnsomt for oss å selge.',
  },
  {
    question: 'Hvilken informasjon trenger dere fra meg for å starte?',
    answer:
      'Adresse eller situasjonsplan, byggesakstegninger (plan, snitt og fasade), en kort beskrivelse av tiltaket, og eventuelle forhåndsuttalelser dere allerede har fått fra kommunen. Send det via kontaktskjemaet, så har dere svar innen 24 timer.',
  },
]

const breadcrumb = breadcrumbSchema([
  { name: 'Hjem', path: '/' },
  { name: 'Brannprosjektering', path: '/brannprosjektering' },
])

const faq = faqSchema(faqItems)

export default function BrannprosjekteringPage() {
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
            <span>Brannprosjektering</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Brannprosjektering i Skien og Telemark
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Vi sørger for at bygget ditt i Skien, Porsgrunn, Kragerø eller andre steder i Telemark oppfyller alle krav til brannsikkerhet — til fast pris og med rask levering.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-[68%]">
              <ScrollReveal>
                <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
                  Brannprosjektering er den skriftlige dokumentasjonen som viser at bygget ditt tilfredsstiller kravene i plan- og bygningsloven og brann- og eksplosjonsvernloven — dokumentasjon de fleste kommuner i Telemark krever før byggesøknaden kan godkjennes. Vi leverer dette til bygg i Skien, Porsgrunn, Kragerø og resten av regionen, til fast pris avtalt før vi starter.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative h-64 lg:h-80 rounded-[20px] overflow-hidden mb-8">
                  <Image
                    src="/images/service-brannprosjektering.jpg"
                    alt="Brannrådgiver i arbeid med brannprosjektering"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 700px"
                  />
                </div>

                <h2 className="text-brand-black text-2xl font-black mb-4">Tiltak som normalt utløser krav om brannprosjektering</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Ny utleiedel, hybel eller sekundærleilighet i eksisterende bolig',
                    'Tilbygg eller påbygg — også mindre påbygg kan påvirke rømningsveiene',
                    'Bruksendring, for eksempel fra garasje eller loft til varig opphold',
                    'Vindus- eller dørbytte i en brann- eller seksjoneringsvegg',
                    'Nybygg av bolig, næringsbygg eller industribygg',
                    'Rehabilitering av eldre bygg der brannsikkerheten ikke er dokumentert',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hvordan klassifiseringen styrer omfanget</h2>
                <p className="text-brand-darkgray leading-relaxed mb-4">
                  Bygget plasseres først i en risikoklasse (RKL 1–6) ut fra bruksformål — en garasje (RKL 1) stiller helt andre krav enn et kontorbygg (RKL 4) eller et sykehjem (RKL 5–6). Risikoklassen, sammen med antall etasjer, bestemmer deretter brannklassen (BKL 1–4), som igjen styrer hvor strenge de branntekniske kravene til akkurat ditt bygg blir.
                </p>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  I tillegg kommer tiltaksklassen (TKL 1–3), som sier noe om hvor komplekst prosjekteringsarbeidet er og hvilken kompetanse som kreves av den som prosjekterer. Vi er sentralt godkjent for TKL 1 og 2, som dekker de aller fleste bolig-, nærings- og industriprosjekter i Grenland-regionen.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hvorfor timingen har mye å si for prisen</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Vi ser ofte samme mønster: brannkravene blir en overraskelse fordi de kommer opp først når byggesøknaden allerede er sendt, eller verre — når bygget er i ferd med å reises. Da er løsningen som regel dyrere enn den trengte å være. Kobler dere oss inn allerede i skissefasen, kan vi som regel finne løsninger som passer inn i planene deres i stedet for å tvinge dem til å endres.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Dette er inkludert i oppdraget</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Brannkonsept eller brannteknisk notat, avhengig av hva tiltaket krever',
                    'Branntegninger klare til å legges ved byggesøknaden',
                    'Erklæring om ansvarsrett overfor kommunen i tiltaksklasse 1 og 2',
                    'Fastpris avtalt skriftlig før oppstart',
                    'Normal leveringstid på 5–10 virkedager',
                    'Løpende tilgjengelighet for spørsmål frem til byggesaken er avsluttet',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Dette trenger vi fra dere for å komme i gang</h2>
                <ul className="space-y-3 mb-10">
                  {[
                    'Adresse eller situasjonsplan for tomten/bygget',
                    'Byggesakstegninger — plan, snitt og fasade',
                    'En kort beskrivelse av hva som skal gjøres',
                    'Eventuelle forhåndsuttalelser dere allerede har fått fra kommunen',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
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
                  <h3 className="font-bold text-xl mb-3 text-brand-white">Be om tilbud</h3>
                  <p className="text-brand-white/60 text-sm mb-6 leading-relaxed">
                    Send oss tegningene og vi sender deg et fastpristilbud innen 24 timer.
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
                      { href: '/branninspeksjon', label: 'Branninspeksjon' },
                      { href: '/uavhengig-kontroll', label: 'Uavhengig kontroll' },
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
              Involver oss tidlig — send tegningene og få et fastpristilbud
            </h2>
            <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Få tilbud nå
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
