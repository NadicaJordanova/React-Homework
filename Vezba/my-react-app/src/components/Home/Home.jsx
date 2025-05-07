import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../actions/charachterActions";
import CharacterCard from "../CharachterCard/CharachterCard";

function Home({searchCharachter}) {
  const { charachters, error, loading } = useSelector(
    (state) => state.charachters
  );
   const [search, setSearch] = useState('')
  const [searchedChar, setSearchedChar] = useState('')
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    
    <div>
       <input type="text" placeholder="search" value={searchTerm} onChange={handleChange}/>
      {charachters?.results?.map((charachter) => (
        <CharacterCard
          name={charachter.name}
          img={charachter.image}
          status={charachter.status}
          id={charachter.id}
        />
      ))}
    </div>
  );
}

export default Home;
