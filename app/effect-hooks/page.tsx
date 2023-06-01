'use client'
import Button from '@/components/UI/Button'
import styles from './page.module.css'
import { useState } from 'react'
import Map from '@/components/effect-hooks/Map'
import Profile from '@/components/effect-hooks/Profile'
import ButtonWithTooltip from '@/components/effect-hooks/ButtonWithTooltip'

export default function Effects() {
  const [zoomLevel, setZoomLevel] = useState(0)

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

      <section className={styles.mapSection}>
        <h4>Controlling a non-React widget</h4>
        <div>
          <p> Zoom level: {zoomLevel}x</p>
          <Button disabled={zoomLevel === 20} onClick={() => setZoomLevel(zoomLevel + 1)}>
            +
          </Button>
          <Button disabled={zoomLevel === 0} onClick={() => setZoomLevel(zoomLevel - 1)}>
            -
          </Button>
        </div>
        <Map className={styles.map} zoomLevel={zoomLevel} />
      </section>

      <section className={styles.dataSection}>
        <h4>Fetching data with Effects</h4>
        <p>
          You can use an Effect to fetch data for your component. Note that if you use a framework, using your
          framework’s data fetching mechanism will be a lot more efficient than writing Effects manually.
        </p>
        <Profile />
      </section>

      <section className={styles.layoutSection}>
        <h3>useLayoutEffect</h3>
        <p>useLayoutEffect can hurt performance. Prefer useEffect when possible.</p>
        <p>useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.</p>
      </section>

      <section className={styles.measuringSection}>
        <h4>Measuring layout before the browser repaints the screen</h4>
        <p>
          Imagine a tooltip that appears next to some element on hover. If there’s enough space, the tooltip should
          appear above the element, but if it doesn’t fit, it should appear below.
        </p>
        <ol>
          <li>Render the tooltip anywhere (even with a wrong position).</li>
          <li>Measure its height and decide where to place the tooltip.</li>
          <li>Render the tooltip again in the correct place.</li>
        </ol>

        <div>
          <ButtonWithTooltip
            tooltipContent={
              <div>
                This tooltip does not fit above the button.
                <br />
                This is why it's displayed below instead!
              </div>
            }
          >
            Hover over me (tooltip above)
          </ButtonWithTooltip>
          <div style={{ height: 50 }} />
          <ButtonWithTooltip tooltipContent={<div>This tooltip fits above the button</div>}>
            Hover over me (tooltip below)
          </ButtonWithTooltip>
          <div style={{ height: 50 }} />
          <ButtonWithTooltip tooltipContent={<div>This tooltip fits above the button</div>}>
            Hover over me (tooltip below)
          </ButtonWithTooltip>
        </div>
      </section>

      <section className={styles.insertionSection}>
        <h3>useInsertionEffect</h3>
        <p>
          useInsertionEffect is for CSS-in-JS library authors. Unless you are working on a CSS-in-JS library and need a
          place to inject the styles, you probably want useEffect or useLayoutEffect instead.
        </p>
        <p>useInsertionEffect is a version of useEffect that fires before any DOM mutations.</p>
      </section>
    </>
  )
}
