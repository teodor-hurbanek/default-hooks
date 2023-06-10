'use client'
import { useState, useTransition } from 'react'
import styles from './page.module.css'
import Button from '@/components/UI/Button'
import { Tab, createTodos } from '@/utils/todos'
import TodoList from '@/components/performance-hooks/TodoList'
import Input from '@/components/UI/Input'
import ProductPage from '@/components/performance-hooks/ProductPage'
import TabButton from '@/components/performance-hooks/TabButton'
import AboutTab from '@/components/performance-hooks/AboutTab'
import PostsTab from '@/components/performance-hooks/PostsTab'
import ContactTab from '@/components/performance-hooks/ContactTab'
import MusicApp from '@/components/performance-hooks/MusicApp'
import SlowList from '@/components/performance-hooks/SlowList'

const todos = createTodos()

export default function Performance() {
  const [tab, setTab] = useState<Tab>('all')
  const [tab1, setTab1] = useState('about')
  const [isDark, setIsDark] = useState(false)
  const [text, setText] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleThemeChange = (e: any) => {
    setIsDark(e.target.checked)
  }

  const selectTab = (nextTab: string) => {
    startTransition(() => {
      setTab1(nextTab)
    })
  }

  return (
    <>
      <section>
        <h2>Performance Hooks</h2>
        <p>
          A common way to optimize re-rendering performance is to skip unnecessary work. For example, you can tell React
          to reuse a cached calculation or to skip a re-render if the data has not changed since the previous render.
        </p>
      </section>

      <section>
        <h3>useMemo</h3>
        <p>useMemo is a React Hook that lets you cache the result of a calculation between re-renders.</p>
      </section>

      <section>
        <h4>Skipping expensive recalculations</h4>
        <ol>
          <li>
            A calculation function that takes no arguments, like () ={'>'}, and returns what you wanted to calculate.
          </li>
          <li>
            A list of dependencies including every value within your component that’s used inside your calculation.
          </li>
        </ol>
      </section>

      <section className={styles.memoSection}>
        <Button onClick={() => setTab('all')}>All</Button>
        <Button onClick={() => setTab('active')}>Active</Button>
        <Button onClick={() => setTab('completed')}>Completed</Button>
        <div>
          <Input id={'themeCheckbox'} type={'checkbox'} checked={isDark} onChange={(e: any) => handleThemeChange(e)} />
          <label htmlFor={'themeCheckbox'}>Dark mode</label>
        </div>
        <TodoList tab={tab} todos={todos} theme={isDark ? 'dark' : 'light'} />
      </section>

      <section>
        <h3>useCallback</h3>
        <p>useCallback is a React Hook that lets you cache a function definition between re-renders.</p>
      </section>

      <section>
        <h4>Skipping re-rendering of components</h4>
        <ol>
          <li>A function definition that you want to cache between re-renders.</li>
          <li>A list of dependencies including every value within your component that’s used inside your function.</li>
        </ol>
      </section>

      <section className={styles.callbackSection}>
        <div>
          <Input id={'themeCheckbox'} type={'checkbox'} checked={isDark} onChange={(e: any) => handleThemeChange(e)} />
          <label htmlFor={'themeCheckbox'}>Dark mode</label>
        </div>
        <ProductPage theme={isDark ? 'dark' : 'light'} referrer="wizard_of_oz" productId={123} />
      </section>

      <section className={styles.customHookSection}>
        <h4>Optimizing a custom Hook</h4>
        <p>If you’re writing a custom Hook, it’s recommended to wrap any functions that it returns into useCallback</p>
      </section>

      <section>
        <h3>useTransition</h3>
        <p>useTransition is a React Hook that lets you update the state without blocking the UI.</p>
      </section>

      <section className={styles.transitionSection}>
        <h4>Marking a state update as a non-blocking transition</h4>
        <p>
          With a transition, your UI stays responsive in the middle of a re-render. For example, if the user clicks a
          tab but then change their mind and click another tab, they can do that without waiting for the first re-render
          to finish.
        </p>

        <nav>
          <TabButton isActive={tab1 === 'about'} onClick={() => selectTab('about')}>
            About
          </TabButton>
          <TabButton isActive={tab1 === 'posts'} onClick={() => selectTab('posts')}>
            {'Posts (slow)'}
          </TabButton>
          <TabButton isActive={tab1 === 'contact'} onClick={() => selectTab('contact')}>
            Contact
          </TabButton>
        </nav>

        <div>
          {tab1 === 'about' && <AboutTab />}
          {tab1 === 'posts' && <PostsTab />}
          {tab1 === 'contact' && <ContactTab />}
        </div>
      </section>

      <section>
        <h4>Building a Suspense-enabled router</h4>

        <MusicApp />
      </section>

      <section>
        <h3>useDeferredValue</h3>
        <p>useDeferredValue is a React Hook that lets you defer updating a part of the UI.</p>

        <Input value={text} onChange={e => setText(e.target.value)} />
        <SlowList text={text} />
      </section>
    </>
  )
}
