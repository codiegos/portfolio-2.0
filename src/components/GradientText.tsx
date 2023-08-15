interface GradientTextProps {
  className?: string
  text: string
}

export function GradientText({ className, text }: GradientTextProps) {
  return (
    <span className={`bg-clip-text text-transparent ${className}`}>{text}</span>
  )
}
