import { Tab, Todo, filterTodos } from '@/utils/todos'
import React, { useMemo } from 'react'
import List from './List'

interface TodoListProps {
  tab: Tab
  todos: Todo[]
  theme: 'dark' | 'light'
}

const TodoList = ({ tab, todos, theme }: TodoListProps) => {
  const isDark = theme === 'dark'
  const visibleTodos = useMemo(() => filterTodos(tab, todos), [tab, todos])

  const getColorScheme = () => {
    return isDark
      ? { background: 'rgb(50, 50, 50)', color: '#fff' }
      : { background: 'rgb(200, 200, 200)', color: '#000' }
  }

  return (
    <article style={getColorScheme()}>
      <p>
        <b>
          Note: <code>filterTodos</code> is artificially slowed down!
        </b>
      </p>

      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>{todo.completed ? <s>{todo.title}</s> : todo.title}</li>
        ))}
      </ul>

      <section>
        <h4>Skipping re-rendering of components</h4>
        <p>
          By default, when a component re-renders, React re-renders all of its children recursively. This is why, when
          TodoList re-renders with a different theme, the List component also re-renders. This is fine for components
          that don’t require much calculation to re-render. But if you’ve verified that a re-render is slow, you can
          tell List to skip re-rendering when its props are the same as on last render by wrapping it in memo:
        </p>
      </section>

      <List items={visibleTodos} />
    </article>
  )
}

export default TodoList
