'use client'

import { FormEvent, useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import { toast } from 'sonner'
import { useLanguage } from '@/contexts/language-context'

function Form() {
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    try {
      setIsLoading(true)
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        toast.success(t.contact.sent)
        form.reset()
      } else {
        toast.error(t.contact.error)
      }
    } catch {
      toast.error(t.contact.error)
    } finally {
      setIsLoading(false)
    }
  }

  const inputClass =
    'mt-1 w-full rounded-lg border border-slate-700/50 bg-slate-950/40 p-3 outline-none brightness-110 placeholder:text-slate-300/30 transition focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/20'

  return (
    <form
      method='POST'
      className='flex h-full w-full flex-col gap-6 sm:text-lg'
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor='name' className='text-sm font-medium text-slate-200/80'>
          {t.contact.name}
        </label>
        <input
          id='name'
          type='text'
          name='name'
          className={inputClass}
          placeholder={t.contact.placeholderName}
          required
          maxLength={75}
        />
      </div>
      <div>
        <label
          htmlFor='email'
          className='text-sm font-medium text-slate-200/80'
        >
          {t.contact.email}
        </label>
        <input
          id='email'
          name='email'
          type='email'
          className={inputClass}
          placeholder={t.contact.placeholderEmail}
          maxLength={90}
          required
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <label
          htmlFor='message'
          className='text-sm font-medium text-slate-200/80'
        >
          {t.contact.message}
        </label>
        <textarea
          id='message'
          name='message'
          className={`${inputClass} min-h-28 flex-1 resize-none`}
          rows={4}
          placeholder={t.contact.placeholderMessage}
          maxLength={500}
          required
        />
      </div>
      <button
        type='submit'
        disabled={isLoading}
        aria-busy={isLoading}
        className='group relative overflow-hidden rounded-xl bg-linear-to-r from-sky-600 to-indigo-700 p-3 px-6 font-semibold tracking-wide transition duration-200 hover:shadow-lg hover:shadow-sky-500/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 active:scale-95 disabled:cursor-wait disabled:opacity-80'
      >
        {isLoading ? (
          <span className='flex flex-nowrap items-center justify-center gap-2'>
            {t.contact.sending}
            <AiOutlineLoading className='h-4 w-4 animate-spin' />
          </span>
        ) : (
          t.contact.send
        )}
      </button>
    </form>
  )
}
export default Form
