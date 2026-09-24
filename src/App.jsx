import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [clicks, setClicks] = useState(0) /* Muuttujat klikkilaskurille */

  return (
    <div>
      <div>
        <button
          type="button"
          className="counter"
          onClick={() => {
            setCount((count) => count + 1)
            setClicks((clicks) => clicks + 1) /*   Funktio joka seuraa klikkien määrää  */
          }}

        >
          Increase Count
        </button>

        <button
          type="button"
          className="counter"

        >
          Count is {count}
        </button>

        <button
          type="button"
          className="counter"
          onClick={() => {
            setCount((count) => count - 1)
            setClicks((clicks) => clicks + 1)
          }}
        >
          Decrease Count
        </button>
      </div>

/* Nappi, joka laskee kuinka monta kertaa + ja - nappeja painettu yhteensä */

      <div>
        <button
          type='button'
          className='counter'
        >
          You've clicked {clicks} times
        </button>
      </div>
    </div>
  )
}
export default App