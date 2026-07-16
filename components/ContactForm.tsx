'use client'

import { useState, type FormEvent } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    const form = e.currentTarget
    const data = {
      navn: (form.elements.namedItem('navn') as HTMLInputElement).value,
      epost: (form.elements.namedItem('epost') as HTMLInputElement).value,
      telefon: (form.elements.namedItem('telefon') as HTMLInputElement).value,
      prosjekttype: (form.elements.namedItem('prosjekttype') as HTMLSelectElement).value,
      melding: (form.elements.namedItem('melding') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Noe gikk galt. Prøv igjen senere.')
      }

      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Noe gikk galt. Prøv igjen senere.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-[20px] bg-brand-lightgray p-8 text-center">
        <h3 className="font-bold text-brand-black text-lg mb-2">Takk for din henvendelse!</h3>
        <p className="text-brand-darkgray text-sm">Vi svarer deg innen 24 timer.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="navn" className="block text-sm font-bold text-brand-black mb-1.5">
          Navn *
        </label>
        <input
          type="text"
          id="navn"
          name="navn"
          required
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors"
          placeholder="Ditt fulle navn"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="epost" className="block text-sm font-bold text-brand-black mb-1.5">
            E-post *
          </label>
          <input
            type="email"
            id="epost"
            name="epost"
            required
            className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors"
            placeholder="din@epost.no"
          />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-bold text-brand-black mb-1.5">
            Telefon
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors"
            placeholder="+47 000 00 000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="prosjekttype" className="block text-sm font-bold text-brand-black mb-1.5">
          Prosjekttype
        </label>
        <select
          id="prosjekttype"
          name="prosjekttype"
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black focus:outline-none focus:border-brand-orange transition-colors bg-brand-white"
        >
          <option value="">Velg type</option>
          <option value="brannkonsept">Brannkonsept</option>
          <option value="brannprosjektering">Brannprosjektering</option>
          <option value="branninspeksjon">Branninspeksjon</option>
          <option value="uavhengig-kontroll">Uavhengig kontroll</option>
          <option value="annet">Annet</option>
        </select>
      </div>

      <div>
        <label htmlFor="melding" className="block text-sm font-bold text-brand-black mb-1.5">
          Melding *
        </label>
        <textarea
          id="melding"
          name="melding"
          required
          rows={5}
          className="w-full px-4 py-3 border border-brand-gray rounded-[10px] text-brand-black placeholder:text-brand-darkgray focus:outline-none focus:border-brand-orange transition-colors resize-none"
          placeholder="Beskriv prosjektet ditt kort..."
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sender...' : 'Send forespørsel'}
      </button>
    </form>
  )
}
