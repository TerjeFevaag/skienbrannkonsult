import { NextResponse } from 'next/server'

const TO_EMAIL = 'post@skienbrannkonsult.no'

const PROSJEKTTYPE_LABELS: Record<string, string> = {
  brannkonsept: 'Brannkonsept',
  brannprosjektering: 'Brannprosjektering',
  branninspeksjon: 'Branninspeksjon',
  'uavhengig-kontroll': 'Uavhengig kontroll',
  annet: 'Annet',
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function POST(request: Request) {
  const apiKey = process.env.MAILERSEND_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { error: 'E-postutsending er ikke konfigurert.' },
      { status: 500 }
    )
  }

  const body = await request.json()
  const navn = typeof body.navn === 'string' ? body.navn.trim() : ''
  const epost = typeof body.epost === 'string' ? body.epost.trim() : ''
  const telefon = typeof body.telefon === 'string' ? body.telefon.trim() : ''
  const prosjekttype = typeof body.prosjekttype === 'string' ? body.prosjekttype.trim() : ''
  const melding = typeof body.melding === 'string' ? body.melding.trim() : ''

  if (!navn || !epost || !melding) {
    return NextResponse.json(
      { error: 'Navn, e-post og melding er påkrevd.' },
      { status: 400 }
    )
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(epost)) {
    return NextResponse.json({ error: 'Ugyldig e-postadresse.' }, { status: 400 })
  }

  const prosjekttypeLabel = PROSJEKTTYPE_LABELS[prosjekttype] ?? ''

  const textLines = [
    `Navn: ${navn}`,
    `E-post: ${epost}`,
    telefon ? `Telefon: ${telefon}` : null,
    prosjekttypeLabel ? `Prosjekttype: ${prosjekttypeLabel}` : null,
    '',
    melding,
  ].filter((line): line is string => line !== null)

  const htmlLines = [
    `<p><strong>Navn:</strong> ${escapeHtml(navn)}</p>`,
    `<p><strong>E-post:</strong> ${escapeHtml(epost)}</p>`,
    telefon ? `<p><strong>Telefon:</strong> ${escapeHtml(telefon)}</p>` : null,
    prosjekttypeLabel ? `<p><strong>Prosjekttype:</strong> ${escapeHtml(prosjekttypeLabel)}</p>` : null,
    `<p><strong>Melding:</strong></p><p>${escapeHtml(melding).replace(/\n/g, '<br>')}</p>`,
  ].filter((line): line is string => line !== null)

  const mailerSendResponse = await fetch('https://api.mailersend.com/v1/email', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: { email: TO_EMAIL, name: 'Brannkonsult AS nettside' },
      to: [{ email: TO_EMAIL }],
      reply_to: { email: epost, name: navn },
      subject: `Ny henvendelse fra nettsiden${prosjekttypeLabel ? ` – ${prosjekttypeLabel}` : ''}`,
      text: textLines.join('\n'),
      html: htmlLines.join('\n'),
    }),
  })

  if (!mailerSendResponse.ok) {
    const errorBody = await mailerSendResponse.text()
    console.error('MailerSend error:', mailerSendResponse.status, errorBody)
    return NextResponse.json(
      { error: 'Kunne ikke sende meldingen. Prøv igjen senere.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
