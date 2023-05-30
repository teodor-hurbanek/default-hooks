'use client'
import MyInput from '@/components/ref-hooks/MyInput'
import styles from './page.module.css'
import Button from '@/components/UI/Button'
import { useRef } from 'react'

export default function Ref() {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleEditClick = () => {
    inputRef?.current?.focus()
    //This won't work because the DOM node isn't exposed:
    // inputRef!.current!.style!.background = 'red'
  }

  return (
    <>
      <section>
        <h2>Ref Hooks</h2>
        <p>
          Refs let a component hold some information that isn’t used for rendering, like a DOM node or a timeout ID.
          Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React
          paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.
        </p>
      </section>

      <section>
        <h3>useRef</h3>
        <p>useRef is a React Hook that lets you reference a value that’s not needed for rendering.</p>
      </section>

      <section className={styles.refSection}>
        <ul>
          <li>You can store information between re-renders (unlike regular variables, which reset on every render).</li>
          <li>Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).</li>
          <li>
            The information is local to each copy of your component (unlike the variables outside, which are shared).
          </li>
        </ul>
      </section>

      <section>
        <h3>useImperativeHandle</h3>
        <p>useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.</p>
      </section>

      <section className={styles.imperativeSection}>
        <MyInput ref={inputRef} />
        <Button onClick={handleEditClick}>Edit</Button>
      </section>
    </>
  )
}
