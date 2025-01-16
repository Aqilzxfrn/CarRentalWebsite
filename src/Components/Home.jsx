import React from "react";
import "./Home.css";
import homeprice from "../assets/images/homeprice.png";
import homemaintainance from "../assets/images/homemaintainance.jpeg";
import homeservice from "../assets/images/homeservice.jpeg";
import homebackground from "../assets/images/background.jpeg";
const Home = () => {
  return (
    <>
      <div className="Header">
        <h1>Welcome to Icar Rental</h1>
        <p>The number one car rental platform in Malaysia</p>
      </div>
      <div className="content">
        <h1>Why Us?</h1>
        <div className="cards-container">
            {/* Card 1 */}
          <div className="card">
            <img src={homeprice} alt="Affordable Price" />
            <h2>Affordable Price</h2>
            <p>
              Experience the best car rental service with affordable prices that
              fit your budget, without compromising on quality or reliability!
            </p>
          </div>
          {/* Card 2 */}
          <div className="card">
            <img src={homeservice} alt="Excellent Service" />
            <h2>Excellent Service</h2>
            <p>
              Enjoy top-notch customer service from our professional team who
              are always ready to assist you in your car rental needs.
            </p>
          </div>
          {/* Card 3 */}
          <div className="card">
            <img src={homemaintainance} alt="Regular Maintainance" />
            <h2>Regular Maintainance</h2>
            <p>
              Ensure your vehicle stays in top condition with our hassle-free
              regular maintenance services because a well-maintained car means
              safer journeys and longer-lasting performance!
            </p>
           </div>
        </div>
      </div>
    </>
  );
};

export default Home;
