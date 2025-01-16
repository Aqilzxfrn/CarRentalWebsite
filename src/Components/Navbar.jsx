import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
      <nav className="navbar">
      <h1 className="logo">CARRENT</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/vehicles">Vehicles</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
      <button className="cart-button">My Cart</button>
    </nav>
    );
  }
  
  export default Navbar;