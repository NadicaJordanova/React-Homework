import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Guesser from './components/guesser'

function App() {
  

  return (
   <div>
    <h1>Guessing game</h1>
    <Guesser />
   </div>
  )
}

export default App
