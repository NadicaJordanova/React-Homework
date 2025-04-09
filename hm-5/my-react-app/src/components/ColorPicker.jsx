import { useEffect, useState } from "react";

const colors = ["red", "blue", "yellow", "green"];
function ColorPicker() {
  const [color, setColor] = useState("lightgrey");

  function getColor(color) {
    setColor(color);
  }

  function addNewcolor(){
    console.log(document.getElementById("addColor").value)
   const newColor = document.getElementById("addColor").value
   const newColorString = newColor.toString()

   if(CSS.supports("color", newColor) && !colors.includes(newColorString)){
    colors.push(newColor)
    setColor(newColor)
   }
  //  else if(!CSS.supports("color", newColor) && colors.includes(newColorString)){
  //    console.log("This is not a supported color por it alreay exists")
  //  }
 }
  return (
    <div style={{display: "flex", alignItems:"center", justifyContent: "center", gap: "50px"}}>
      <div>
        <h1>Color Picker</h1>
        <input type="text" id="addColor"/>
        <button onClick={addNewcolor}>Add color</button>
       <div>
        {colors.map((color, index) => (
          <button onClick={() => getColor(color)} key={index}>
            {color}
          </button>
        ))}
       </div>
      </div>
      <div style={{ backgroundColor: color, width: "250px", height: "250px", display: "flex", alignItems:"center", justifyContent: "center", border: "8px solid white"}}>{color}</div>
      {console.log(colors)}
    </div>
  );
}

export default ColorPicker;
