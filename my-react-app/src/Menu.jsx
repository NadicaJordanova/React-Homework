import { Component } from "react";
import reactLogo from "./assets/react.svg";
import "./Menu.css";
import viteLogo from "./assets/vite.svg";
import Button from "./Button";
class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <h1>Welcome to React!</h1>
        <div className="cards">
          <div className="card" style={{ border: "5px solid #61dafbaa" }}>
            <img src={reactLogo} className="react logo" alt="React Logo" />
            <p>
              React (also known as React.js or ReactJS) is a free and
              open-source front-end JavaScript library that aims to make
              building user interfaces based on components more "seamless". It
              is maintained by Meta.
            </p>
            <Button />
          </div>
          <div className="card" style={{ border: "5px solid #646cffaa" }}>
            <img src={viteLogo} className="vite logo" alt="Vite logo" />
            <p>
              Vite serves source code over native ESM. This is essentially
              letting the browser take over part of the job of a bundler: Vite
              only needs to transform and serve source code on demand, as the
              browser requests it.
            </p>
            <Button />
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
