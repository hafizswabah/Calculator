import { useState } from 'react'
import './App.css'
import Calculator from './components/Calculator/Calculator'
import NavBar from './components/NavBar/NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Calculator/>
    </>
  )
}

export default App
