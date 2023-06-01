import { LegacyRef, ReactNode } from 'react'

interface TooltipContainerProps {
  children: ReactNode
  x: number
  y: number
  contentRef: LegacyRef<HTMLDivElement> | undefined
}

export default function TooltipContainer({ children, x, y, contentRef }: TooltipContainerProps) {
  return (
    <div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        left: 0,
        top: 0,
        transform: `translate3d(${x}px, ${y}px, 0)`,
        background: 'black',
        border: '.01rem solid white',
        borderRadius: '.5rem',
        padding: '.5rem',
      }}
    >
      <div ref={contentRef} className="tooltip">
        {children}
      </div>
    </div>
  )
}
