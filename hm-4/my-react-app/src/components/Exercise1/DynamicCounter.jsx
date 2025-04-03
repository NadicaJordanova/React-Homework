import { useEffect, useRef, useState } from "react"
import "../Exercise1/DynamicCounter.css"

function DynamicCounter(){
 const [counter, setCounter] = useState(0)

 const backgroundRef = useRef(null)
 function increment(){
    setCounter(counter + 1)
 }

 function decrement(){
    setCounter(counter - 1)
 }

useEffect(() => {
    if(counter === 0) backgroundRef.current.style.backgroundColor = "white"

    if(counter > 0) backgroundRef.current.style.backgroundColor = "green"

    if(counter < 0)backgroundRef.current.style.backgroundColor = "red"
})
 
    return(
        <div ref={backgroundRef} className="counter">
            <h1>Counter:{counter}</h1>
            <div className="buttons">

            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
            </div>
        </div>


    )
}


export default DynamicCounter