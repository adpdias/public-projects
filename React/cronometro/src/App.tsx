import { useRef, useState } from 'react'
import './App.css'

const App = () => {
  const [time, setTime] = useState(0)
  const intervalRef = useRef(0)

  const handleStart = () => {
    if (intervalRef.current) handleStop()
    
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1)
    }, 1000)

    intervalRef.current = intervalId
  }

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = 0
    }
  }

  return (
    <div>
      <p>Time: {time}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default App
