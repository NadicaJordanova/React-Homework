import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Route, Routes} from "react-router-dom"
import Charachters from './components/Charachters'
import Home from './components/Home/Home'
import Favorites from './components/Favorites/Favorites'
import Charachter from './components/pages/Charachter/CharachterDetail'

function App() {


  return (
   <>
   <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/charachters" element={<Charachters />}/>
      <Route path="/favorites"  element={<Favorites />}/>
      <Route path='/:id' element={<Charachter />}/>

    </Routes> 
  
   </>
     
  )
}

export default App
