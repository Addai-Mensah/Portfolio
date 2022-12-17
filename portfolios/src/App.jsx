import { useState } from 'react'
import './App.css'
import Navs from './pages/navs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Navs/>
    </div>
  )
}

export default App
