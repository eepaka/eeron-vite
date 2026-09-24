import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [clicks, setClicks] = useState(0)

  return (
    <div>
      <div>
        <button
          type="button"
          className="counter"
          onClick={() => {
            setCount((count) => count + 1)
            setClicks((clicks) => clicks + 1)
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