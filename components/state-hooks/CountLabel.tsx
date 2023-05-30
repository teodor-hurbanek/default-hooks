import React, { useState } from 'react'

interface CountLabelProps {
  count: number
}

const CountLabel = ({ count }: CountLabelProps) => {
  const [prevCount, setPrevCount] = useState(count)
  const [trend, setTrend] = useState<string | null>(null)

  if (prevCount !== count) {
    setPrevCount(count)
    setTrend(count > prevCount ? 'increasing' : 'decreasing')
  }
  return (
    <>
      <p>{count}</p>
      {trend && <p>Count is {trend}</p>}
    </>
  )
}

export default CountLabel
