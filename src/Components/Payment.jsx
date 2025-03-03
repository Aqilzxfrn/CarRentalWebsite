import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = ({ setCart }) => {
  const { id } = useParams(); // Get car ID from the URL
  const [paymentCompleted, setPaymentCompleted] = useState(false); // Track payment status
  const [rentalDates, setRentalDates] = useState({ start: "", end: "" });
  
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!rentalDates.start || !rentalDates.end) {
      alert("Please select rental start and end dates.");
      return;
    }


    // Simulate payment completion
    setPaymentCompleted(true);

    // Add the purchased car to the cart
    setCart((prevCart) => [...prevCart, id]);

    // Redirect to the homepage after a delay
    setTimeout(() => {
      navigate("/");
    }, 2000); // Redirect after 2 seconds
  };

  // Show confirmation message if payment is completed
  if (paymentCompleted) {
    return (
      <div className="payment-container">
        <h1>Payment Completed!</h1>
        <p>The car with ID: {id} has been added to your cart.</p>
        <p>
          Rental Period: {rentalDates.start} to {rentalDates.end}
        </p>
        <p>Redirecting to the homepage...</p>
      </div>
    );
  }

  // Payment Form
  return (
    <div className="payment-container">
      <h1>Payment Page</h1>
      <p>Car ID: {id}</p>
      <form className="payment-form" onSubmit={handlePayment}>
        <div>
          <label>Name on Card</label>
          <input type="text" placeholder="Enter name" required />
        </div>
        <div>
          <label>Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            maxLength="16"
            required
          />
        </div>
        <div>
          <label>Expiry Date</label>
          <input type="month" required />
        </div>
        <div>
          <label>CVV</label>
          <input type="password" placeholder="123" maxLength="3" required />
        </div>
        <div>
          <label>Rental Start Date</label>
          <input
            type="date"
            value={rentalDates.start}
            onChange={(e) =>
              setRentalDates((prev) => ({ ...prev, start: e.target.value }))
            }
            required
          />
        </div>
        <div>
          <label>Rental End Date</label>
          <input
            type="date"
            value={rentalDates.end}
            onChange={(e) =>
              setRentalDates((prev) => ({ ...prev, end: e.target.value }))
            }
            required
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
