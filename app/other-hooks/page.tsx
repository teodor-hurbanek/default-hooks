'use client'
import Button from '@/components/UI/Button'
import SaveButton from '@/components/other-hooks/SaveButton'
import StatusBar from '@/components/other-hooks/StatusBar'
import { todosStore } from '@/utils/todoStore'
import React, { useId, useSyncExternalStore } from 'react'

const Others = () => {
  const uniqueId = useId()
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot)

  return (
    <>
      <section>
        <h2>Other Hooks</h2>
        <p>These Hooks are mostly useful to library authors and aren’t commonly used in the application code.</p>
      </section>

      <section>
        <h3>useDebugValue</h3>
        <p>useDebugValue is a React Hook that lets you add a label to a custom Hook in React DevTools.</p>
      </section>

      <section>
        <h3>useId</h3>
        <p>useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.</p>
        <p>useId should not be used to generate keys in a list. Keys should be generated from your data.</p>

        <div style={{ marginTop: '1rem' }}>{uniqueId}</div>
      </section>

      <section>
        <h3>useSyncExternalStore</h3>
        <p style={{ marginBottom: '1rem' }}>
          useSyncExternalStore is a React Hook that lets you subscribe to an external store.
        </p>

        <Button onClick={() => todosStore.addTodo()}>Add todo</Button>

        <ul>
          {todos.map(todo => {
            return <li key={todo.id}>{todo.text}</li>
          })}
        </ul>
      </section>

      <section>
        <h4>Subscribing to a browser API</h4>
        <p>
          Another reason to add useSyncExternalStore is when you want to subscribe to some value exposed by the browser
          that changes over time. For example, suppose that you want your component to display whether the network
          connection is active. The browser exposes this information via a property called navigator.onLine. This value
          can change without React’s knowledge, so you should read it with useSyncExternalStore.
        </p>

        <div style={{ marginTop: '1rem' }}>
          <SaveButton />
          <StatusBar />
        </div>
      </section>
    </>
  )
}

export default Others
