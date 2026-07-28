'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { upload } from '@vercel/blob/client'
import { Paperclip, X } from 'lucide-react'

type Status = 'idle' | 'sending' | 'success' | 'error'

type Attachment = { name: string; url: string; size: number }

const MAX_FILES = 4
const MAX_SIZE_BYTES = 20 * 1024 * 1024
const ALLOWED_EXTENSIONS = ['.pdf', '.jpg', '.jpeg', '.png', '.gif', '.webp', '.dwg', '.dxf', '.doc', '.docx']

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [fileError, setFileError] = useState('')
  const [uploadProgress, setUploadProgress] = useState<{ current: number; total: number } | null>(null)

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? [])
    e.target.value = ''
    if (selected.length === 0) return

    const next = [...files]
    let error = ''

    for (const file of selected) {
      if (next.length >= MAX_FILES) {
        error = `Du kan laste opp maks ${MAX_FILES} filer.`
        break
      }
      const ext = `.${file.name.split('.').pop()?.toLowerCase() ?? ''}`
      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        error = `${file.name}: filtypen er ikke støttet.`
        continue
      }
      if (file.size > MAX_SIZE_BYTES) {
        error = `${file.name}: filen er større enn 20 MB.`
        continue
      }
      next.push(file)
    }

    setFiles(next)
    setFileError(error)
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index))
    setFileError('')
  }

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
      const vedlegg: Attachment[] = []
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        setUploadProgress({ current: i + 1, total: files.length })
        const blob = await upload(file.name, file, {
          access: 'public',
          handleUploadUrl: '/api/upload',
        })
        vedlegg.push({ name: file.name, url: blob.url, size: file.size })
      }
      setUploadProgress(null)

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, vedlegg }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Noe gikk galt. Prøv igjen senere.')
      }

      setStatus('success')
      setFiles([])
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Noe gikk galt. Prøv igjen senere.')
    } finally {
      setUploadProgress(null)
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

      <div>
        <label className="block text-sm font-bold text-brand-black mb-1.5">Vedlegg</label>
        <label
          htmlFor="vedlegg"
          className={`flex flex-col items-center justify-center gap-2 w-full px-4 py-6 border-2 border-dashed rounded-[10px] text-center transition-colors ${
            files.length >= MAX_FILES
              ? 'border-brand-gray text-brand-darkgray/50 cursor-not-allowed'
              : 'border-brand-gray text-brand-darkgray cursor-pointer hover:border-brand-orange'
          }`}
        >
          <Paperclip size={20} />
          <span className="text-sm font-medium">Klikk for å velge filer</span>
          <span className="text-xs text-brand-darkgray/70">
            PDF, JPG, PNG, DWG, DXF, DOC, DOCX — maks 20 MB per fil, opptil 4 filer
          </span>
        </label>
        <input
          type="file"
          id="vedlegg"
          className="hidden"
          multiple
          accept=".pdf,.jpg,.jpeg,.png,.gif,.webp,.dwg,.dxf,.doc,.docx"
          onChange={handleFileChange}
          disabled={files.length >= MAX_FILES}
        />

        {fileError && <p className="text-sm text-red-600 mt-2">{fileError}</p>}

        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((file, i) => (
              <li
                key={`${file.name}-${i}`}
                className="flex items-center justify-between gap-2 px-3 py-2 bg-brand-lightgray rounded-[8px] text-sm"
              >
                <span className="truncate text-brand-black">{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  aria-label={`Fjern ${file.name}`}
                  className="text-brand-darkgray hover:text-red-600 transition-colors shrink-0"
                >
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending'
          ? uploadProgress
            ? `Laster opp fil ${uploadProgress.current} av ${uploadProgress.total}…`
            : 'Sender...'
          : 'Send forespørsel'}
      </button>
    </form>
  )
}
