interface TextAnimationProps {
  text: string
}

export function TextAnimation({ text }: TextAnimationProps) {
  return (
    <svg viewBox='0 0 570 100' className='text-animation'>
      <symbol>
        <text
          id='text-animation-symbol'
          textAnchor='middle'
          x='50%'
          y='50%'
          dy='.35em'
        >
          {text.toUpperCase()}
        </text>
      </symbol>
      <use
        xlinkHref='#text-animation-symbol'
        className='text-animation-letter'
      ></use>
      <use
        xlinkHref='#text-animation-symbol'
        className='text-animation-letter'
      ></use>
      <use
        xlinkHref='#text-animation-symbol'
        className='text-animation-letter'
      ></use>
      <use
        xlinkHref='#text-animation-symbol'
        className='text-animation-letter'
      ></use>
      <use
        xlinkHref='#text-animation-symbol'
        className='text-animation-letter'
      ></use>
    </svg>
  )
}
