import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description Section */}
        <div className="logo-and-description">
          <img src="https://cdn-icons-png.flaticon.com/128/7757/7757248.png" alt="Logo" className="logo" />
          <p>
            We, Go Drive, provide great service, more choice, and almost
            always lower prices in Malaysia.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://wa.me/01435393XX" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="WhatsApp" className="social-icon" />
            </a>
            <a href="mailto:info@GoDrive.my">
              <img src="https://cdn-icons-png.flaticon.com/128/3916/3916631.png" alt="Email" className="social-icon" />
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div className="services">
          <h4>Our Services</h4>
          <ul>
            <li>Top Condition</li>
            <li>Worry-free</li>
            <li>Safety & Comfortable</li>
            <li>Trustworthy</li>
            <li>Clean & Maintenance like brand new</li>
            <li>Flexibility</li>
            <li>Quick & Easy</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="contact">
          <h4>Contact Us</h4>
          <p>
          <img src="https://cdn-icons-png.flaticon.com/128/5070/5070407.png" alt="Phone" className="contact-icons" />
            Phone: +60 123-456-789</p>
          <p>
          <img src="https://cdn-icons-png.flaticon.com/128/6422/6422213.png" alt="WhatsApp" className="contact-icons" /> 
            WhatsApp: 014-353 93XX</p>
          <p>
          <img src="https://cdn-icons-png.flaticon.com/128/6422/6422198.png" alt="Messenger" className="contact-icons" />  
            Messenger: <a href="https://m.me/GoDrive">m.me/GoDrive</a>
          </p>
          <p>
          <img src="https://cdn-icons-png.flaticon.com/128/3916/3916631.png" alt="Email" className="contact-icons" />  
            Email: <a href="mailto:GoDrive@gmail.com">GoDrive@gmail.com</a>
          </p>
          <p>
          <img src="https://cdn-icons-png.flaticon.com/128/3916/3916880.png" alt="Address" className="contact-icons" />   
            Address: 123 Main Street, Kuala Lumpur, Malaysia
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>Copyrights © 2025 Go Drive. All rights reserved. Powered by Car Rentals.</p>
        <p>Developed by Aqilz Web Design.</p>
      </div>
    </footer>
  );
};

export default Footer;



