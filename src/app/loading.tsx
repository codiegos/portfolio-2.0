function IntroLoading() {
  return (
    <div
      role='status'
      aria-label='Loading'
      className='bg-tertiary fixed inset-0 z-50 grid place-items-center'
    >
      <span className='h-10 w-10 animate-spin rounded-full border-2 border-sky-400/30 border-t-sky-400' />
    </div>
  )
}
export default IntroLoading
