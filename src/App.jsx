import { useState } from 'react'
import './App.css'
import Quotes from './Componenets/Quotes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Quotes />
      </div>
      
    </>
  )
}

export default App
