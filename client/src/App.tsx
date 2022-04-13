import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        Hello From Yura
      </header>
    </div>
  )
}

export default App
