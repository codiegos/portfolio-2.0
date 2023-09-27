'use client'

import { FormEvent, useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import { toast } from 'sonner'

function Form() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      setIsLoading(true)
      const res = await fetch('api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      toast.promise(res.json(), {
        loading: 'Sending...',
        success: 'Sent!',
        error: 'Something went wrong!',
      })
    } catch (err) {
      toast.error('Something went wrong!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      method='POST'
      className='flex w-full flex-col gap-6 sm:text-lg'
      onSubmit={handleSubmit}
    >
      <label>
        Your name
        <input
          type='text'
          name='name'
          className='mt-1 w-full rounded border border-violet-950 bg-primary p-2.5 outline-none brightness-125 placeholder:text-slate-300/30 focus:ring-1 focus:ring-violet-700/50'
          placeholder='Johan Liebert'
          required
          maxLength={100}
        />
      </label>
      <label>
        Email address
        <input
          name='email'
          type='email'
          className='mt-1 w-full rounded-md border border-violet-950 bg-primary p-2.5 outline-none brightness-125 placeholder:text-slate-300/30 focus:ring-1 focus:ring-violet-700/50'
          placeholder='johan.liebert@example.com'
          maxLength={150}
          required
        />
      </label>
      <label>
        Message
        <textarea
          name='message'
          className='mt-1 w-full rounded-md border border-violet-950 bg-primary p-2.5 outline-none brightness-125 placeholder:text-slate-300/30 focus:ring-1 focus:ring-violet-700/50'
          rows={3}
          placeholder="Tell me what you're thinking about..."
          maxLength={2500}
        />
      </label>
      <button
        type='submit'
        className='rounded-lg bg-violet-800 p-2.5 px-5 outline-none transition duration-200 hover:bg-violet-700 active:scale-95'
      >
        {isLoading ? (
          <span className='flex flex-nowrap items-center justify-center gap-2'>
            Sending <AiOutlineLoading className='h-4 w-4 animate-spin' />
          </span>
        ) : (
          'Send'
        )}
      </button>
    </form>
  )
}
export default Form
