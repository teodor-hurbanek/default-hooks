'use client'
import styles from './page.module.css'

export default function Effects() {
  return (
    <>
      <section>
        <h2>Effect Hooks</h2>
        <p>
          Effects let a component connect to and synchronize with external systems. This includes dealing with network,
          browser DOM, animations, widgets written using a different UI library, and other non-React code.
        </p>
      </section>

      <section>
        <h3>useEffect</h3>
        <p>useEffect is a React Hook that lets you synchronize a component with an external system.</p>
      </section>
    </>
  )
}
