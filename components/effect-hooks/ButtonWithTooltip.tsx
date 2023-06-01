import { useState, useRef, ReactNode } from 'react'
import Tooltip from './Tooltip'

export default function ButtonWithTooltip({ tooltipContent, ...rest }: any) {
  const [targetRect, setTargetRect] = useState<any>(null)
  const buttonRef = useRef<any>(null)
  return (
    <>
      <button
        {...rest}
        ref={buttonRef}
        onPointerEnter={() => {
          const rect = buttonRef.current.getBoundingClientRect()
          setTargetRect({
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
          })
        }}
        onPointerLeave={() => {
          setTargetRect(null)
        }}
      />
      {targetRect !== null && <Tooltip targetRect={targetRect}>{tooltipContent}</Tooltip>}
    </>
  )
}
