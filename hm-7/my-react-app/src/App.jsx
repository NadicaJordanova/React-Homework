import { useState } from "react";
import "./App.css";
import Home from "./components/Home";

import CountryDetail from "./components/CountryDetail";

import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

       <Route path="/name/:name" element={<CountryDetail />} />
       <Route path="*"  element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
