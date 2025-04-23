import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'
import ToDoProvider from './context/TodoContext'

function App() {
 

  return (
  
 <div>
  <h1>To do </h1>
  <ToDoProvider >
  <ToDoList />
  </ToDoProvider>
 </div>
  )
}

export default App
