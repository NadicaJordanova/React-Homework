import { useState } from "react";
import MoodDisplay from "./MoodDisplay";
const moodEmojiMap = {
    Happy: "😊",
    Sad: "😢",
    Excited: "🤩",
    Tired: "😴",
}

function MoodSelector(){
    const[mood, setMood] = useState("")

    const changeMood = (newMood) => {
        setMood(newMood)
    }
    
 return(
    <div>
      {Object.values(moodEmojiMap).map((mood, index) => (
          <button key={index} onClick={() => changeMood(mood)}>{mood}</button> 
      ))}
    
     <MoodDisplay mood={mood}/>
     {console.log(mood)}
    </div>
 )
 
}


export default MoodSelector