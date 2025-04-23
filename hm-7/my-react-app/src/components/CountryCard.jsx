import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function CountryCard({ name, flag, population, region }) {
  const navigate = useNavigate()

   function handleClick (name){

   
        
        setTimeout(() => {
            navigate(`/name/${name}`)
        },100)
    }

    
  return (
    <div>
      <h2>{name}</h2>
      
      <img src={flag} alt="" width="350px" height="250px" />
      <p>Region: {region}</p>
      <p>Population: {population}</p>
      <button onClick={() => handleClick(name)}>More about {name}</button>
    </div>
  );
}

export default CountryCard;
//     <h1>Home</h1>
//   {countries.map((country, index) => (
//     <div>
//       <br />
//       <br />
//       <div key={index}
//         style={{
//           border: "3px solid white",
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 300px)",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: "20px",
//         }}
//       >
//         <h2>{country.name.common}</h2>
//         <img src={country.flags.png} alt="" width="350px" height="250px" />
//         <p>Region: {country.region}</p>
//         <p>Population: {country.population}</p>
//       </div>
//       <br />
//       <br />
//       <button onClick={handleButtonClick}>View More</button>
//     </div>
