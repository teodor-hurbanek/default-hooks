import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef?.current?.focus()
      },
      scrollIntoView() {
        inputRef?.current?.scrollIntoView()
      },
    }
  })

  return <input {...props} type="text" ref={inputRef} />
})

export default MyInput
