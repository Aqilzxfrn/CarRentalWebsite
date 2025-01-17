import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
      <nav className="navbar">
      <h1 className="logo">Go Drive</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Car">Cars</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
      <button className="cart-button">My Cart</button>
    </nav>
    );
  }
  
  export default Navbar;