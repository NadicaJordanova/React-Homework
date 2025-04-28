import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserInfo from './components/UserInfo'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const[password, setPassword] = useState("")
  const[email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const [username , setUsername]=  useState("")


 
  

  return (
   <div>

<form className='form-user'>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username"  value={username}  onChange={e => setUsername(e.target.value)} required/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password"  onChange={e => setPassword(e.target.value)}value={password} required/>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email"  onChange={e => setEmail(e.target.value)} value={email} required/>
       <label htmlFor="country">Country:</label>
        <select name="country" id="country" onChange={e => setCountry(e.target.value)} value={country} required>
            <option value="Italy">Italy</option>
            <option value="North-Macedonia">North Macedonia</option>
            <option value="Germany">Germany</option>
            <option value="Croatia">Croatia</option>
        </select>
      
    </form>
    <UserInfo username={username} email={email} country={country} password={password}/>
   </div>
  )

}

export default App
