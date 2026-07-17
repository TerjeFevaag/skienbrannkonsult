import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, AlertTriangle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import { socialMetadata } from '@/lib/seo'

const title = 'Branninspeksjon for bygg i Skien, Porsgrunn og Grenland | Brannkonsult AS'
const description =
  'Uavhengig branninspeksjon av borettslag, næringsbygg og industrianlegg i Skien, Porsgrunn, Kragerø og resten av Telemark. Fått pålegg etter kommunalt branntilsyn? Vi kartlegger avvik og lager en tiltaksplan du faktisk kan bruke.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://www.skienbrannkonsult.no/branninspeksjon' },
  ...socialMetadata({ title, description, path: '/branninspeksjon', image: '/images/service-branntilsyn.jpg' }),
}

const faqItems = [
  {
    question: 'Vi fikk avvik etter kommunalt tilsyn — hva gjør vi nå?',
    answer:
      'Start med å lese pålegget nøye og noter fristen. Mange styrer og eiere kontakter oss på dette tidspunktet fordi de er usikre på hvor omfattende utbedringen egentlig må være. Vi går gjennom avvikene sammen med deg, vurderer hva som faktisk kreves etter regelverket, og setter opp en tiltaksplan med kostnadsoverslag som dere kan bruke til å innhente tilbud fra håndverkere.',
  },
  {
    question: 'Er en branninspeksjon fra dere det samme som kommunens branntilsyn?',
    answer:
      'Nei. Kommunens brann- og redningsetat fører tilsyn med hjemmel i brann- og eksplosjonsvernloven, og prioriterer som regel bygg med høyest risiko. Vår branninspeksjon er en frivillig, uavhengig gjennomgang dere selv bestiller — vi har ingen myndighet til å gi pålegg, men gir en grundigere og mer detaljert vurdering enn det et kommunalt tilsyn normalt rekker over.',
  },
  {
    question: 'Vi sitter i styret i et sameie — hvem har egentlig ansvaret?',
    answer:
      'Styret har ansvaret for brannsikkerheten i fellesarealene — trapperom, kjellere, tekniske rom og rømningsveier. Den enkelte seksjonseier er ansvarlig for egen bruksenhet. I praksis ser vi ofte at ansvaret er uklart fordelt før noen har gjort en helhetlig gjennomgang, noe som er nettopp det en branninspeksjon rydder opp i.',
  },
  {
    question: 'Hvor lang tid tar det fra bestilling til ferdig rapport?',
    answer:
      'For en vanlig boligblokk eller mindre næringseiendom regner vi normalt 1–2 uker fra befaring til ferdig tilstandsrapport, avhengig av byggets størrelse og hvor mye dokumentasjon som finnes fra før. Ved akutte pålegg med kort frist prioriterer vi saken.',
  },
  {
    question: 'Hva koster det, og binder vi oss til noe ved å be om et estimat?',
    answer:
      'Nei, et estimat er uforpliktende. Prisen avhenger av byggets størrelse, alder og kompleksitet — send oss noen bilder og informasjon om bygget, så gir vi et fastpristilbud før dere bestemmer dere.',
  },
  {
    question: 'Vi har et eldre trehus eller industribygg i Grenland — gjelder kravene også for oss?',
    answer:
      'Ja. Alle eksisterende bygg skal minst tilfredsstille kravene som gjaldt for nybygg i 1985 (BF85), uavhengig av byggeår. I Skien, Porsgrunn og resten av Grenland ser vi dette særlig ofte i eldre trehusbebyggelse og i bygg med røtter tilbake til industrihistorien langs Frierfjorden og Skienselva — konstruksjoner som sjelden var tegnet med dagens branntekniske krav i tankene.',
  },
]

const breadcrumb = breadcrumbSchema([
  { name: 'Hjem', path: '/' },
  { name: 'Branninspeksjon', path: '/branninspeksjon' },
])

const faq = faqSchema(faqItems)

export default function BranninspeksjonPage() {
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
            <span>Branninspeksjon</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Branninspeksjon for bygg i Skien, Porsgrunn og Grenland
          </h1>
          <p className="hero-3 text-brand-white/70 text-lg mt-4 max-w-xl leading-relaxed">
            Enten kommunen har vært på tilsyn eller dere selv ønsker en uavhengig gjennomgang — vi kartlegger avvikene og gir dere en tiltaksplan som er mulig å følge.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-[68%]">
              <ScrollReveal>
                <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
                  Grenland har en bygningsmasse som spenner fra trehuskvartaler i Skien sentrum til store industrianlegg langs Frierfjorden og Skienselva — arven etter Union og Norsk Hydro i Porsgrunn. Den variasjonen gjør at brannrisikoen ser svært ulik ut fra bygg til bygg, og at et standard kommunalt tilsyn sjelden fanger opp alt. Vi bistår borettslag, sameier, næringsbygg og industribedrifter i Skien, Porsgrunn, Kragerø og resten av Telemark med å kartlegge og dokumentere den faktiske brannsikkerheten.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative h-64 lg:h-80 rounded-[20px] overflow-hidden mb-8">
                  <Image
                    src="/images/service-branntilsyn.jpg"
                    alt="Branntilsyn og inspeksjon av brannslukningsutstyr"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 700px"
                  />
                </div>

                <h2 className="text-brand-black text-2xl font-black mb-4">Hvorfor eldre bygg i Grenland ofte trenger tiltak</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Regelverket krever at alle eksisterende bygg minst tilfredsstiller nivået som gjaldt for nybygg i 1985 (BF85) — uavhengig av når bygget faktisk ble oppført. I praksis møter vi dette oftest i to typer bygg her i regionen: eldre trehusbebyggelse i og rundt Skien sentrum, der brannceller og rømningsveier sjelden er dokumentert, og industri- og næringsbygg fra Porsgrunn-området med røtter tilbake til Union- og Hydro-tiden, hvor opprinnelig bruk og dagens bruk ofte er to helt forskjellige ting.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Et kommunalt tilsyn er sjelden hele bildet</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Brann- og redningsetaten prioriterer tilsyn etter risiko, og rekker sjelden en full gjennomgang av hvert enkelt bygg. Et bygg kan derfor ha reelle branntekniske svakheter selv om det nylig har vært til tilsyn uten anmerkninger — rett og slett fordi kontrollen var stikkprøvebasert. Det er akkurat det gapet en uavhengig branninspeksjon er laget for å dekke.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Slik jobber vi gjennom en branninspeksjon</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { title: 'Befaring', desc: 'Vi går gjennom bygget på stedet — fellesarealer, rømningsveier, branncelleinndeling og tekniske installasjoner.' },
                    { title: 'Rapport med funn', desc: 'Dere får en skriftlig rapport der hvert avvik er beskrevet og rangert etter hvor alvorlig det er.' },
                    { title: 'Plan og prisoverslag', desc: 'Vi prioriterer tiltakene og anslår kostnad, slik at dere vet hva som bør gjøres først.', },
                    { title: 'Rutiner fremover', desc: 'Vi hjelper med enkle internkontrollrutiner, slik at brannsikkerheten følges opp løpende — ikke bare denne ene gangen.' },
                  ].map((item, i) => (
                    <div key={i} className="rounded-[20px] bg-brand-lightgray p-5">
                      <h3 className="font-bold text-brand-black mb-2">{item.title}</h3>
                      <p className="text-brand-darkgray text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-brand-black text-2xl font-black mb-4">Ansvaret er deres — men dere trenger ikke stå alene med det</h2>
                <p className="text-brand-darkgray leading-relaxed mb-8">
                  Eier eller styret har alltid det juridiske ansvaret for brannsikkerheten, uansett om det er et sameie i Skien sentrum eller et industribygg i Porsgrunn. Det vi gir dere er oversikten: hva som faktisk må gjøres, hva som kan vente, og hva det vil koste — slik at beslutningen om utbedring tas på informert grunnlag og ikke i panikk etter et pålegg.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="border-l-4 border-brand-orange rounded-[20px] bg-brand-lightgray p-6 mb-10">
                  <div className="flex items-start gap-3">
                    <AlertTriangle size={20} className="text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-brand-black mb-2">Har dere fått en frist fra brannvesenet?</h3>
                      <p className="text-brand-darkgray text-sm leading-relaxed">
                        Pålegg fra kommunen kommer som regel med en konkret frist for utbedring og krav om at dokumentasjon sendes tilbake til brannvesenet. Fristene er ofte strammere enn man tror når utbedringen først skal planlegges, prises og gjennomføres — ta kontakt med oss så snart dere har mottatt pålegget, ikke rett før fristen løper ut.
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

            <div className="lg:w-[32%]">
              <ScrollReveal delay={200}>
                <div className="rounded-[20px] border border-brand-gray p-6 bg-brand-dark">
                  <h3 className="font-bold text-xl mb-3 text-brand-white">Fått pålegg fra brannvesenet?</h3>
                  <p className="text-brand-white/60 text-sm mb-6 leading-relaxed">
                    Send oss pålegget, så gir vi dere en vurdering av omfang og et konkret prisoverslag før dere bestemmer dere.
                  </p>
                  <Link href="/kontakt-oss" className="block bg-brand-orange text-brand-white font-bold px-6 py-3.5 rounded-[10px] text-center hover:opacity-90 transition-opacity mb-6">
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
                      { href: '/brannkonsept', label: 'Brannkonsept' },
                      { href: '/brannprosjektering', label: 'Brannprosjektering' },
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
              Send oss pålegget eller book en befaring i Skien, Porsgrunn eller Grenland
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
