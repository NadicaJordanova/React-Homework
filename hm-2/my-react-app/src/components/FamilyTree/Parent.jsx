import Child from "../FamilyTree/Child"
import family from "./familytree"

import "./FamilyTree.css"


function Parent() {
  return(
    <div className="parent">
         <h1>{family.name}</h1>
         <Child />
    </div>
  )
}
export default Parent