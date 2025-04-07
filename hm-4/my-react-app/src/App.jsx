import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DynamicCounter from './components/Exercise1/DynamicCounter'
import RandomUserFetcher from './components/Exercise2/RandomUserFetcher'
import CatImg from './components/Exercise3/CatImg'

function App() {
  const [imgs, setImg] = useState(null)

function fetchImgs(){
  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  .then((response) => response.json())
  .then((data) => setImg(data))
  // catch
}
useEffect(() => {
// if(imgs === null) return;
 fetchImgs()
}, [])


 return(
  <>
  <DynamicCounter />
  <RandomUserFetcher />
    <br />
    <br />
    <button onClick={fetchImgs}>Fetch Cat Images</button>
    <br />
    <br />
  <CatImg  imgs={imgs}/>
  </>
 )
}

export default App
