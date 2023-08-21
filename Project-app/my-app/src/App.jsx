import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1,2)

  return (
    <>
      <button onClick={() => setCount((count) => count + 10)}>
          count is {count}
        </button>
        <h1>I am a new developer</h1>
        <img src={reactLogo} alt="react logo" />
        <img src={viteLogo} alt="vite logo" />
        <h2>I am a pro developer</h2>

    </>
  )
}

export default App
