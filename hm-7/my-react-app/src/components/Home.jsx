import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CountryCard from "./CountryCard";

function Home() {
  const [countries, setCountries] = useState([]);
  const [inputText, setInputText] = useState("");
  const [filteredData , setfilteredData] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((respone) => respone.json())
      .then((data) => setCountries(data));
  }, []);

  function handleSearch(event) {
    const search = event.target.value.toLowerCase();
    console.log(search);
    setInputText(search)
   const filter = countries.filter((country) => {
    if(country.name.common.toLowerCase().includes(search)){
       return country
    } 

   
    });
    setCountries(filter)
    console.log(countries)
  }

   
  

  
  return (
    <div>
      <input onChange={handleSearch} type="text" placeholder="Search" />
      {countries ?  countries.map((country, index) => (
        <CountryCard
          name={country.name.common}
          flag={country.flags.png}
          region={country.region}
          population={country.population}
        />
      )) : "Not found" }
      
     
    </div>
  );
}

export default Home;
