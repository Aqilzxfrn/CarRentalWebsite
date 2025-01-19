import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cart, setShowCart, showCart }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">Go Drive</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Car">Cars</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      {/* Cart Button */}
      <button
        className="cart-button"
        onClick={() => setShowCart(!showCart)} // Toggle cart dropdown visibility
      >
        My Cart ({cart.length})
      </button>

      {/* Cart Dropdown */}
      {showCart && (
        <div className="cart-dropdown">
          <h3>My Cart</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((carId, index) => (
                <li key={index}>Car ID: {carId}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
