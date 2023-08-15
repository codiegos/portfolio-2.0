function Form() {
  return (
    <form
      method='POST'
      action='https://herotofu.com/start'
      className='flex w-full flex-col gap-6 sm:text-lg'
    >
      <label>
        Your name
        <input
          type='text'
          name='name'
          className='mt-1 w-full rounded border border-violet-950 bg-primary p-2.5 outline-none brightness-125 placeholder:text-gray-600 focus:ring-1 focus:ring-violet-700/50'
          placeholder='Johan Liebert'
        />
      </label>
      <label>
        Email address
        <input
          name='email'
          type='email'
          className='mt-1 w-full rounded-md border border-violet-950 bg-primary p-2.5 outline-none brightness-125 placeholder:text-gray-600 focus:ring-1 focus:ring-violet-700/50'
          placeholder='johan.liebert@example.com'
          required
        />
      </label>
      <label>
        Message
        <textarea
          name='message'
          className='mt-1 w-full rounded-md border border-violet-950 bg-primary p-2.5 outline-none brightness-125 placeholder:text-gray-600 focus:ring-1 focus:ring-violet-700/50'
          rows={3}
          placeholder="Tell me what you're thinking about..."
        />
      </label>
      <button
        type='submit'
        className='rounded-lg bg-violet-800 p-2.5 px-5 outline-none transition duration-200 hover:bg-violet-700 active:scale-95'
      >
        Send
      </button>
    </form>
  )
}
export default Form
