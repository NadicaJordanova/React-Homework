import { useState } from "react";
import "./App.css";
import User from "./components/Exercise1/userstatus/UserStatus";
import Login from "./components/Exercise1/login/Login";
import MoodSelector from "./components/Exercise2/MoodSelector";
import MoodDisplay from "./components/Exercise2/MoodDisplay";
import BookLibrary from "./components/Exercise3/BookLibrary";

function App() {
  // 1.
  const [logedin, setLogin] = useState(false);
  const [admin, setAdmin] = useState(false);

  function toggleLogin() {
    setLogin(!logedin);
  }

  function toggleAdmin() {
    setAdmin(!admin);
  }
 


  return (
    <div>
      <h1>1.</h1>
      {/* <Login isLoggedin={toggleLogin} logedin={logedin}/> */}
      <User
        isAdmin={toggleAdmin}
        admin={admin}
        isLoggedin={toggleLogin}
        logedin={logedin}
      />

      <br />
      <br />
    {/* 2. */}
     <h1>2.</h1>
      <MoodSelector />


      <h1>3.</h1>
      <h1>Book library</h1>
      <BookLibrary />
    </div>
  );
 
}

export default App;
