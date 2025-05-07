import { useEffect, } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { fetchCharacterDetail } from "../../../actions/charachterDetailActions"

const Charachter = () => {
  const{charachter, error, loading} = useSelector((state) => state. charachterDetail)
   
  const dispatch = useDispatch()
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
   dispatch(fetchCharacterDetail(id))
  },[dispatch, id])


  console.log(charachter)
    return(
        <div>
             <h1>Details</h1>
            <img src={charachter.image} alt="image" />
            <h1>Name: {charachter.name}</h1>
            <h3>Gender: {charachter.gender}</h3>
            <h3>From: {charachter.location.name}</h3>
            
        </div>
    )
}

export default Charachter