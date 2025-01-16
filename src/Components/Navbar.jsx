import "./Navbar.css"

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1 className="logo">CARRENT</h1>
        <ul>
          <li>Vehicles</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="cart-button">My Cart</button>
      </nav>
    );
  }
  
  export default Navbar;