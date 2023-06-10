import { Todo } from '@/utils/todos'
import React, { memo } from 'react'

interface ListProps {
  items: Todo[]
}

const List = memo(function List({ items }: ListProps) {
  //   console.log('[ARTIFICIALLY SLOW] Rendering <List /> with ' + items.length + ' items')
  //   let startTime = performance.now()
  //   while (performance.now() - startTime < 500) {
  //     // Do nothing for 500 ms to emulate extremely slow code
  //   }
  return (
    <>
      <p>
        <b>
          Note: <code>List</code> is artificially slowed down!
        </b>
      </p>

      <ul>
        {items.map(item => (
          <li key={item.id}>{item.completed ? <s>{item.title}</s> : item.title}</li>
        ))}
      </ul>
    </>
  )
})

export default List
