import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"; // Import Home page
import Contact from "./Components/Contact"; // Import Contact page
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </Router>
  );
};

export default App;
