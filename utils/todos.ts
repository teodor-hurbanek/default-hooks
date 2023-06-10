export const createTodos = () => {
  const todos: Todo[] = []
  for (let i = 0; i < 10; i++) {
    todos.push({
      id: i,
      title: `Todo ${i + 1}`,
      completed: Math.random() > 0.5,
    })
  }
  return todos
}

export const filterTodos = (tab: Tab, todos: Todo[]) => {
  //   console.log('[ARTIFICIALLY SLOW] Filtering ' + todos.length + ' todos for "' + tab + '" tab.')
  //   let startTime = performance.now()
  //   while (performance.now() - startTime < 500) {
  //     // Do nothing for 500 ms to emulate extremely slow code
  //   }
  return todos.filter(todo => {
    if (tab === 'all') {
      return true
    } else if (tab === 'active') {
      return !todo.completed
    } else if (tab === 'completed') {
      return todo.completed
    }
  })
}

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export type Tab = 'all' | 'active' | 'completed'
