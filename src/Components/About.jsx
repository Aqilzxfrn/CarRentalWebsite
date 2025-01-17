import React from 'react';
import './About.css'; // Add custom styles if needed

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <p>
          Welcome to <strong>YourCarRental</strong>, your trusted partner in providing reliable and affordable car rental services. With a fleet of well-maintained vehicles and a commitment to customer satisfaction, we make it easy for you to get where you need to go.
        </p>
        <p>
          Our journey began with a simple idea: to make car rentals hassle-free, accessible, and enjoyable. Today, we take pride in serving travelers, commuters, and adventurers with options tailored to their unique needs. Whether you need a compact car for city trips, a luxury sedan for business travel, or an SUV for family road trips, we have the perfect ride for you.
        </p>
        <h2>Our Mission</h2>
        <p>
          At <strong>YourCarRental</strong>, our mission is to deliver exceptional value and convenience to our customers. We aim to:
        </p>
        <ul>
          <li>Provide a wide range of high-quality vehicles to suit every preference.</li>
          <li>Offer transparent pricing with no hidden fees.</li>
          <li>Ensure a seamless booking experience through our user-friendly platform.</li>
          <li>Deliver outstanding customer service to make your journey stress-free.</li>
        </ul>
        <h2>Why Choose Us?</h2>
        <p>
          Choosing <strong>YourCarRental</strong> means choosing:
        </p>
        <ul>
          <li>Flexibility: Rent by the hour, day, or week, based on your schedule.</li>
          <li>Affordability: Competitive rates to fit your budget.</li>
          <li>Convenience: Pick up and drop off your rental at locations that work for you.</li>
          <li>Quality: A fleet of vehicles that are regularly inspected and maintained.</li>
        </ul>
        <p>
          Thank you for choosing <strong>YourCarRental</strong>. We look forward to being part of your journey.
        </p>
      </section>
    </div>
  );
};

export default About;
