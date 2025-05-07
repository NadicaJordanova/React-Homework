import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCharacters } from "../../actions/charachterActions"
import CharacterCard from "../CharachterCard/CharachterCard"

function Home(){

 

const {charachters, error, loading} = useSelector((state) => state)

console.log(charachters)

const dispatch = useDispatch()

useEffect(()=> {
dispatch(fetchCharacters())
},[dispatch])

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;
   return (
    <div>
       <h1>nade  H!{charachters?.results?.length}</h1>
       
       {charachters?.results?.map((charachter) => (


      <h1>Nade</h1>

       )
           
        // <CharacterCard name={charachter.name} img={charachter.results.image} status={charachter.results.status}/>
       )}

    </div>
   )
}


export default Home