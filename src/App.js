import React from "react";
import "./App.scss";
import SideBar from "./Components/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home.jsx";
import Contacts from "./pages/Home/Contacts/Contacts.jsx";
import { useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <SideBar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
