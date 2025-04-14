import { useState } from "react";

function MultiInputForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("")
    const [interests, setInterests] = useState([])
    const [country, setCountry] = useState("")

    const [errorName, setErrorName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorInterests, setErrorInterests] = useState("")

    const [show, setShow] = useState("false")
    

    function handleName(e) {
        setName(e.target.value);
      }
    
      function handleEmail(e) {
        setEmail(e.target.value);
      }

      function handleGender(e) {
        setGender(e.target.value)
      }
      function handleInterests(e) {
        if(e.target.value){
            setInterests(...interests, e.target.value)
        }else{
            setInterests(interests.filter((interest) => interest !== e.target.value))
        }
      }

      function handleCountry(e) {
         setCountry(e.target.value)
      }


      function handleSubmit(e) {
        e.preventDefault();
        if (name.length < 3) {
         setErrorName("Name must be at leats 3 charachters long")
        } else {
          setErrorName("")
        }
    
        if (!email.includes("@")) {
          setErrorEmail("Email not valid");
        } else {
          setErrorEmail("")
        }

        if(interests.length < 1) {
        setErrorInterests("At least one intrerest must be checked");
        } else {
          setErrorInterests("")
        }

        setShow(!show)
      }

      


  return (
    <div>
      <h1>Multi-Input Form</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleName} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmail} required />
        </label>
        <label>
          Gender: Male
          <input type="radio" required value="Male" onChange={handleGender} checked={gender === "male"}/> Female <input type="radio" required value="Female" onChange={handleGender} checked={gender === "female"}/>
        </label>
        <label>
          Interests: Reading
          <input type="checkbox" value="reading" onChange={handleInterests} checked={interests.includes("reading")}/> Painting
          <input type="checkbox" value="painting" onChange={handleInterests} checked={interests.includes("painting")}/> Sports
          <input type="checkbox" value="sports" onChange={handleInterests} checked={interests.includes("sports")}/>
        </label>
        <label>
          Country:{" "}
          <select value={country} onChange={handleCountry} required>
            <option value="USA">USA</option>
            <option value="NorthMacedonia">North Macedonia</option>
            <option value="Italy">Italy</option>
            <option value="Germany">Germany</option>
            <option value="China">China</option>
          </select>
        </label>

        <button type="submit">Submit form</button>
      </form>
     
     {errorName === "" && show == true ?  <p>{name}</p> : <p>{errorName}</p>}
     {errorEmail === "" && show == true ?  <p>{email}</p> : <p>{errorEmail}</p>}
     {show == true ? <p>{gender}</p> : null} 
     {errorInterests === "" && show == true ?  <p>{interests}</p> : <p>{errorInterests}</p>}    
     {show == true ? <p>{country}</p> : null} 
    </div>
  );
}

export default MultiInputForm;
