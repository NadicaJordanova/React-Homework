import { use, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

function UserInfo({ username, password, email, country }) {
  console.log(username, "user info");
  const error = "";
  const { setValue: setName } = useLocalStorage("username", username);
  const { setValue: setEmail } = useLocalStorage("email", email);
  const { setValue: setPassword } = useLocalStorage("password", password);
  const { setValue: setCountry } = useLocalStorage("country", country);
 

  function handleClick() {
    if (username.length < 6 || password.length < 8) {
      alert(
        "Username must be at least 6 charachters long and password must be 8 charachters long"
      );
    } else {
      setName(username);
      setEmail(email);
      setCountry(country);
      setPassword(password);
    }
  }

   function clear(){
    localStorage.clear()
   }

  console.log(localStorage.getItem("username"), "getItem");
  return (
    <div>
      <form className="submit-user">
        <button onClick={handleClick} type="submit">
          Submit
        </button>

        <h2>Name:{localStorage.getItem("username")}</h2>
        <h2>Email: {localStorage.getItem("email")}</h2>
        <h2>Country: {localStorage.getItem("country")}</h2>
        <button onClick={clear} type="submit">Clear Form</button>
      </form>
  
    </div>
  );
}
export default UserInfo;
