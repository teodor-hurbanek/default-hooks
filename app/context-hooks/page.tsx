'use client'
import styles from './page.module.css'

export default function Context() {
  return (
    <>
      <section>
        <h2>Context Hooks</h2>
        <p>
          Context lets a component receive information from distant parents without passing it as props. For example,
          your app’s top-level component can pass the current UI theme to all components below, no matter how deep.
        </p>
      </section>

      <section>
        <h3>useContext</h3>
      </section>
    </>
  )
}
