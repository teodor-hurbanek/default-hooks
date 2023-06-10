import { ReactNode } from 'react'

interface SlowPostProps {
  index: number
}

export default function SlowPost({ index }: SlowPostProps) {
  let startTime = performance.now()
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li>Post #{index + 1}</li>
}
