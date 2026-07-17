import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FileText, Phone, Mail, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import { socialMetadata } from '@/lib/seo'

const title = 'Brannkonsept i Skien og Telemark | Brannkonsult AS'
const description =
  'Brannkonsult AS utarbeider brannkonsept i Skien, Porsgrunn, Kragerø og resten av Telemark. Sentralt godkjent TKL 1+2. Fra ca. 15 000 kr inkl. branntegninger. Fastpris alltid.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.skienbrannkonsult.no/brannkonsept' },
  ...socialMetadata({ title, description, path: '/brannkonsept', image: '/images/service-brannkonsept.jpg' }),
}

const faqItems = [
  {
    question: 'Jeg skal bygge garasje/tilbygg i Skien — trenger jeg virkelig et fullt brannkonsept?',
    answer:
      'Kommer an på tiltaket. For små, enkle tiltak holder det ofte med et brannteknisk notat, som er raskere og rimeligere å få utarbeidet. Krever kommunen en mer helhetlig vurdering av hele byggverket, må det et fullt brannkonsept til. Send oss en kort beskrivelse av prosjektet, så sier vi rett ut hva dere faktisk trenger — vi tjener ikke på å selge dere mer enn nødvendig.',
  },
  {
    question: 'Må dere komme på befaring før dere kan lage brannkonseptet?',
    answer:
      'Sjelden, faktisk. For nybygg og de fleste tilbygg holder gode tegninger og digitale kartdata til å gjøre jobben uten fysisk befaring — noe som også holder kostnaden nede. Er tiltaket komplekst nok til at vi bør se bygget med egne øyne, sier vi fra før vi starter, ikke etter.',
  },
  {
    question: 'Hva må jeg sende dere for å få et pristilbud?',
    answer:
      'Adresse eller matrikkelnummer, antall etasjer og bruksareal, situasjonsplan og plantegninger, samt en kort beskrivelse av hva som skal bygges. Jo mer komplett underlag, jo mer presist blir tilbudet — og dere slipper å vente på oppfølgingsspørsmål.',
  },
  {
    question: 'Utarbeider dere brannkonsept i Porsgrunn og Kragerø også?',
    answer:
      'Ja. Vi tar oppdrag i hele Grenland og Telemark — inkludert Skien, Porsgrunn, Kragerø, Bamble, Siljan og Nome — samt resten av landet ved behov. De fleste brannkonsept kan utarbeides uten fysisk befaring, uansett hvor bygget ligger.',
  },
  {
    question: 'Selger dere noe i tillegg til rapporten, som brannvarslere eller sprinkleranlegg?',
    answer:
      'Nei, og det er bevisst. Vi er utelukkende en rådgivende part og har ingen produkter eller håndverkertjenester å selge deg. Anbefalingene i brannkonseptet er derfor kun styrt av hva regelverket faktisk krever for ditt bygg.',
  },
  {
    question: 'Hvor raskt kan jeg få ferdig brannkonsept?',
    answer:
      'Normalt 5–10 virkedager fra vi har mottatt komplett underlag, avhengig av prosjektets omfang og pågang hos oss. Har dere en søknadsfrist hos kommunen, si ifra i forespørselen, så prioriterer vi deretter.',
  },
]

const breadcrumb = breadcrumbSchema([
  { name: 'Hjem', path: '/' },
  { name: 'Brannkonsept', path: '/brannkonsept' },
])

const faq = faqSchema(faqItems)

export default function BrannkonseptPage() {
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
      {/* Header */}
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-4">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Brannkonsept</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Brannkonsept i Skien og Telemark
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Vi utarbeider helhetlige brannkonsept for byggesaker i Skien, Porsgrunn, Kragerø og resten av Telemark. Fastpris, rask levering og sentral godkjenning.
          </p>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <div className="lg:w-[68%]">
              <ScrollReveal>
                <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
                  Skal du bygge nytt, bygge på eller endre bruken av et bygg i Grenland, er et brannkonsept som regel første steg kommunen ber om. Det er en skriftlig, overordnet plan som viser hvordan hele byggverket — ikke bare det du søker om nå — ivaretar brannsikkerheten. Vi lager komplette brannkonsept for private, arkitekter, industribedrifter og utbyggere i Skien, Porsgrunn, Kragerø og resten av Telemark, alltid til fast pris avtalt på forhånd.
                </p>
              </ScrollReveal>

              <ScrollReveal variant="scale" className="mb-8">
                <div className="relative h-64 lg:h-80 rounded-[20px] overflow-hidden">
                  <Image
                    src="/images/service-brannkonsept.jpg"
                    alt="Brannkonsept og branntegninger under utarbeidelse"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 700px"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Dette får dere levert</h2>
                <p className="text-brand-darkgray leading-relaxed mb-6">
                  Et brannkonsept fra oss er ikke bare et skjema fylt ut — det er en fullstendig dokumentasjonspakke kommunen kan saksbehandle direkte:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Risikoklasse (RKL) fastsatt for hver del av bygget',
                    'Brannklasse (BKL) for byggverket som helhet',
                    'Inndeling i brannceller og eventuelle brannseksjoner',
                    'Dokumenterte rømningsveier og løsning for røykventilasjon',
                    'Branntekniske plantegninger som viser celler, rømning og seksjonering',
                    'Vurdering av hvordan bærende og skillende konstruksjoner må utføres',
                    'Konkrete krav til branntekniske installasjoner i bygget',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Hvorfor risikoklasse og brannklasse betyr noe for prisen</h2>
                <p className="text-brand-darkgray leading-relaxed mb-4">
                  Alt som bygges i Norge plasseres i en risikoklasse (RKL 1–6) ut fra hva bygget skal brukes til, og en brannklasse (BKL 1–4) ut fra risikoklassen og antall etasjer. Disse to tallene avgjør hvor omfattende brannkonseptet må være — en enebolig i RKL 2 krever langt mindre dokumentasjon enn et næringsbygg i RKL 4, og det er derfor prisen varierer fra prosjekt til prosjekt.
                </p>
                <div className="rounded-[20px] bg-brand-lightgray p-6 mb-8">
                  <h3 className="font-bold text-brand-black mb-3">Noen vanlige eksempler:</h3>
                  <ul className="space-y-2 text-brand-darkgray text-sm">
                    <li><strong>RKL 1:</strong> Garasjer, lager (ingen personopphold)</li>
                    <li><strong>RKL 2:</strong> Boliger med evakueringsmulighet fra egen enhet</li>
                    <li><strong>RKL 4:</strong> Kontorbygg, undervisningsbygg</li>
                    <li><strong>RKL 5:</strong> Hoteller, sykehjem (sover/overnatting)</li>
                    <li><strong>RKL 6:</strong> Sykehus (svekkede beboere)</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Slik jobber vi med dere</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Utarbeider et komplett, søknadsklart brannkonsept',
                    'Leverer branntekniske tegninger dere kan bruke direkte i byggesøknaden',
                    'Erklærer ansvarsrett overfor kommunen i tiltaksklasse 1 og 2',
                    'Gir dere fastpris skriftlig før arbeidet starter',
                    'Leverer normalt innen 5–10 virkedager',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                      <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <div className="rounded-[20px] bg-brand-lightgray p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <FileText size={32} className="text-brand-orange shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-brand-black text-lg mb-2">Pris</h3>
                      <p className="text-brand-darkgray">
                        Fra ca. <strong className="text-brand-black">15 000 kr</strong> i tiltaksklasse 2, inkl. branntegninger og ekskl. mva. Alltid fastpris.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="rounded-[30px] border border-brand-gray p-8 bg-brand-lightgray">
                  <h2 className="text-brand-black text-2xl font-black mb-6">Ofte stilte spørsmål</h2>
                  <FAQAccordion items={faqItems} />
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:w-[32%]">
              <ScrollReveal delay={200}>
                <div className="rounded-[20px] border border-brand-gray p-6 bg-brand-dark">
                  <h3 className="font-bold text-xl mb-3 text-brand-white">Få uforpliktende tilbud</h3>
                  <p className="text-brand-white/60 text-sm mb-6 leading-relaxed">
                    Kontakt oss for en gratis vurdering av ditt brannkonseptbehov. Vi svarer innen 24 timer.
                  </p>
                  <Link
                    href="/kontakt-oss"
                    className="block bg-brand-orange text-brand-white font-bold px-6 py-3.5 rounded-[10px] text-center hover:opacity-90 transition-opacity mb-6"
                  >
                    Kontakt oss
                  </Link>
                  <div className="space-y-3 pt-4 border-t border-brand-white/10">
                    <a href="tel:+4700000000" className="flex items-center gap-2 text-brand-white/60 hover:text-brand-orange transition-colors text-sm">
                      <Phone size={14} /> +47 000 00 000
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
                      { href: '/brannprosjektering', label: 'Brannprosjektering' },
                      { href: '/branninspeksjon', label: 'Branninspeksjon' },
                      { href: '/uavhengig-kontroll', label: 'Uavhengig kontroll' },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-brand-darkgray hover:text-brand-orange transition-colors text-sm font-medium">
                          → {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <ScrollReveal variant="fade">
        <section className="bg-brand-dark py-14">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-white text-2xl lg:text-3xl font-black mb-6">
              Send oss tegningene, så har dere svar innen 24 timer
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
