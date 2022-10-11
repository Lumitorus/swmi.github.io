import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home.jsx";
import Contacts from "./pages/Home/Contacts/Contacts.jsx";

function App() {

  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />

      </Routes>
    </div>
  );
}

export default App;