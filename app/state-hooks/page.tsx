'use client'
import Button from '@/components/UI/Button'
import styles from './page.module.css'
import Form from '@/components/state-hooks/Form'
import { useState } from 'react'
import CountLabel from '@/components/state-hooks/CountLabel'

export default function Home() {
  const [version, setVersion] = useState(0)
  const [count, setCount] = useState(0)

  return (
    <div className={styles.statePage}>
      <section>
        <h2>State hooks</h2>
        <p>
          State lets a component “remember” information like user input. For example, a form component can use state to
          store the input value, while an image gallery component can use state to store the selected image index.
        </p>
      </section>

      <section>
        <h3>useState</h3>
        <p>useState is a React Hook that lets you add a state variable to your component.</p>
      </section>

      <section className={styles.setSection}>
        <p>Calling the set function does not change the current state in the already executing code:</p>
        <code>{'function handleClick() {'}</code>
        <code style={{ paddingLeft: '1rem' }}>{'setName("Robin");'}</code>
        <code style={{ paddingLeft: '1rem' }}>{'console.log(name); // Still "Taylor"!'}</code>
        <code>{'}'}</code>
        <p>It only affects what useState will return starting from the next render.</p>
      </section>

      <section className={styles.keySection}>
        <h4>Resetting state with a key</h4>
        <p>
          You can reset a component’s state by passing a different key to a component. In this example, the Reset button
          changes the version state variable, which we pass as a key to the Form. When the key changes, React re-creates
          the Form component (and all of its children) from scratch, so its state gets reset.
        </p>
        <div>
          <Button onClick={() => setVersion(version + 1)}>Reset</Button>
          <Form key={version} />
        </div>
      </section>

      <section className={styles.countSection}>
        <h4>Storing information from previous renders</h4>
        <p>
          Usually, you will update state in event handlers. However, in rare cases you might want to adjust state in
          response to rendering — for example, you might want to change a state variable when a prop changes.
        </p>
        <div>
          <Button style={{ marginRight: '.2rem' }} onClick={() => setCount(count + 1)}>
            Increment
          </Button>
          <Button onClick={() => setCount(count - 1)}>Decrement</Button>
          <CountLabel count={count} />
        </div>
      </section>

      <section>
        <h3>useRef</h3>
        <p>useRef is a React Hook that lets you reference a value that’s not needed for rendering.</p>
      </section>

      <section>
        <ul>
          <li>You can store information between re-renders (unlike regular variables, which reset on every render).</li>
          <li>Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).</li>
          <li>
            The information is local to each copy of your component (unlike the variables outside, which are shared).
          </li>
        </ul>
      </section>
    </div>
  )
}
