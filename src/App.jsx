import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Car from "./Components/Car";
import Payment from "./Components/Payment";

const App = () => {
  const [cart, setCart] = useState([]); // Manage cart state
  const [showCart, setShowCart] = useState(false); // Manage cart dropdown visibility

  return (
    <Router>
      <Navbar cart={cart} setShowCart={setShowCart} showCart={showCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Car" element={<Car />} />
        <Route path="/payment/:id" element={<Payment setCart={setCart} />} />
      </Routes>
    </Router>
  );
};

export default App;