'use client'

import { FormEvent, useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import { toast } from 'sonner'

function Form() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    console.log(data)

    try {
      setIsLoading(true)
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (response.status === 200) {
        toast.success('Message sent!')
      }
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
      <div>
        <label htmlFor='name'>Your name</label>
        <input
          id='name'
          type='text'
          name='name'
          className='mt-1 w-full rounded border border-violet-950 bg-primary p-2.5 outline-none brightness-125 placeholder:text-slate-300/30 focus:ring-1 focus:ring-violet-700/50'
          placeholder='Johan Liebert'
          required
          maxLength={75}
        />
      </div>
      <div>
        <label htmlFor='email' className=''>
          Email address
        </label>
        <input
          id='email'
          name='email'
          type='email'
          className='mt-1 w-full rounded-md border border-violet-950 bg-primary p-2.5 outline-none brightness-125 placeholder:text-slate-300/30 focus:ring-1 focus:ring-violet-700/50'
          onError={(e) => console.log(e)}
          placeholder='johan.liebert@example.com'
          maxLength={90}
          required
        />
      </div>
      <div>
        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          name='message'
          className='mt-1 w-full resize-none rounded-md border border-violet-950 bg-primary p-2.5 outline-none brightness-125 placeholder:text-slate-300/30 focus:ring-1 focus:ring-violet-700/50'
          rows={3}
          placeholder="Tell me what you're thinking about..."
          maxLength={500}
          required
        />
      </div>
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
