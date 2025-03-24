import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './Header.css'
import './Button.jsx'
import Button from './Button.jsx'


function Header() {
return(
  <div className='header'>
    <img src={reactLogo} alt="React logo" />
    <div className='login'>
      <a href="#">More</a>
    <Button />
    </div>
  </div>
)}

export default Header



