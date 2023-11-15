import { AnchorHTMLAttributes } from 'react'

interface MyButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  text: string
  className?: string
  onClick?: () => void
}

export function MyButton({
  href = '#',
  text = 'button',
  className,
  onClick,
  ...props
}: MyButtonProps) {
  return (
    <a
      href={href}
      className={`to group relative inline-flex items-center justify-start overflow-hidden rounded-xl px-6 py-3 font-medium transition-all duration-200 active:scale-95 ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className='absolute right-0 top-0 inline-block h-4 w-4 rounded bg-primary/20 transition-all duration-[375ms] ease-in-out group-hover:-mr-4 group-hover:-mt-4'>
        <span className='absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white' />
      </span>
      <span
        className={`absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-2xl transition-all duration-300 ease-in-out group-hover:mb-12 group-hover:translate-x-0 ${className}`}
      />
      <span className='relative w-full whitespace-nowrap text-left font-semibold tracking-widest transition-colors duration-150 ease-in-out'>
        {text}
      </span>
    </a>
  )
}
