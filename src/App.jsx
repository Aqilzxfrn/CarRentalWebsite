import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"; // Import Home page
import Contact from "./Components/Contact"; // Import Contact page
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Car from "./Components/Car";
import Footer from "./Components/Footer";
import Payment from "./Components/Payment";

const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/Car" element={<Car />} />
      <Route path="/payment/:id" element={<Payment />} />
    </Routes>
    
  </Router>
  );
};

export default App;
