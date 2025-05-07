import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../actions/charachterActions";
import CharacterCard from "../CharachterCard/CharachterCard";
import { searchCharacterDetail } from "../../actions/searchCharachter";

function Home({searchCharachter}) {
  const { charachters, error, loading } = useSelector(
    (state) => state.charachters
  );

  const[search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
   console.log(search)
   
    
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());

  }, [dispatch]);
  const filteredCharacters = charachters?.results?.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    
    <div>
       <input type="text" placeholder="search" value={search} onChange={handleChange}/>
       {search ? filteredCharacters.map(((charachter) => (
        <CharacterCard
          name={charachter.name}
          img={charachter.image}
          status={charachter.status}
          id={charachter.id}
        />
      ))) : charachters?.results?.map((charachter) => (
        <CharacterCard
          name={charachter.name}
          img={charachter.image}
          status={charachter.status}
          id={charachter.id}
        />
      ))}
      {}
    </div>
  );
}

export default Home;
