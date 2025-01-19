import React from "react";
import "./Home.css";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <>
      {/* Header Section */}
      <div
        className="Header"
        style={{
          backgroundImage: `url("https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/topics/magazine-article-pool/2024/wallpaper/m-wallpaper/3-0-csl/bmw-3-0-csl-mi-05.jpg?imwidth=1440")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
          padding: "100px 20px",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark overlay
            zIndex: 0,
          }}
        ></div>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{color:"white"}}>Welcome to Go Drive Official Website</h1>
          <p>The number one car rental platform in Malaysia</p>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="content">
        <h1 className="section-title">Why Us?</h1>
        <div className="cards-container">
          {/* Card 1 */}
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/128/2854/2854320.png" alt="Affordable Price" />
            <h2>Affordable Price</h2>
            <p>
              Experience the best car rental service with affordable prices that
              fit your budget, without compromising on quality or reliability!
            </p>
          </div>
          {/* Card 2 */}
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/128/14380/14380055.png" alt="Excellent Service" />
            <h2>Excellent Service</h2>
            <p>
              Enjoy top-notch customer service from our professional team who
              are always ready to assist you in your car rental needs.
            </p>
          </div>
          {/* Card 3 */}
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/128/6331/6331739.png" alt="Regular Maintenance" />
            <h2>Regular Maintenance</h2>
            <p>
              Ensure your vehicle stays in top condition with our hassle-free
              regular maintenance services because a well-maintained car means
              safer journeys and longer-lasting performance!
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Home;

