import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserProfileClass from "./components/UserProfileClass/UserProfileClass";
import { UserProfileFunction } from "./components/UserProfileFunction/UserProfileFunction";
import { ListItem } from "./components/ListItem/ListItem";
import Child from "./components/FamilyTree/Child";
import Parent from "./components/FamilyTree/Parent";
import Grandchild from "./components/FamilyTree/GrandChild";

function App() {
  return (
    <div className="cards">
      <UserProfileClass name="Nadica" age={19} hobby="programming" />
      <UserProfileClass name="Naum" age={17} hobby="skiing" />
      <UserProfileClass name="Marija" age={21} hobby="painting" />
      <UserProfileClass name="Ana" age={19} hobby="reading" />
      <UserProfileFunction name="Katerina" age={23} hobby="reading" />
      <UserProfileFunction name="Riste" age={17} hobby="running" />
      <UserProfileFunction name="Vlado" age={24} hobby="painting" />
      <UserProfileFunction name="Dejan" age={21} hobby="cycling" />
      <div className="task2">
        <br />
        <br />
        <ListItem />
        <br />
        <Parent />
      </div>
    </div>
  );
}

export default App;
