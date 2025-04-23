// import { useParams } from "react-router-dom"
// import { useEffect, useState } from "react";

// function CountryDetail(){
//     const[country, setCountry] = useState(null)
//     const {name} = useParams()
//     const nameFetch = name.toLowerCase()
//     console.log(nameFetch)
//     useEffect(() => {
//         fetch(`https://restcountries.com/v3.1/name/${nameFetch}`)
//           .then((response) => response.json())
//           .then((data) => setCountry(data));
//         }, [nameFetch]);

//         console.log(country)

// return(
//     <div>
//         <h1>Country Details</h1>
//         <div>{country.map((countri, index) => (
//             <p>{countri.name.common}</p>
//         ))}</div>
//     </div>
// )
// }

// export default CountryDetail

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetail() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  const nameFetch = name.toLowerCase();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${nameFetch}`)
      .then((response) => response.json())
      .then((data) => setCountry(data))
      .catch((err) => console.log(err.message))
  }, [nameFetch]);
  console.log(country)
  console.log(nameFetch)
  return (
    <div>
     
      {country.length > 0 ? (
        country.map((c) => (
          <div>
            <h1>{c.name.common}</h1>
            <img src={c.flags.png} alt="" height="400px" />
            <a href={c.maps.googleMaps}>Find on Google Maps</a>
            <h3>Capital: {c.capital}</h3>
            <h3>Population: {c.population}</h3>
            <h3>Currency: {c?.currencies?.["name"]}</h3>
            <h3>Time Zone: {c.timezones} </h3>
          </div>
        ))
      ) : (
        <p>Loading or no country data found.</p>
      )}
    </div>
  );
}

export default CountryDetail;