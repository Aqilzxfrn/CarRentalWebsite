import React from 'react';
import { useParams } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const { id } = useParams();

  return (
   <div className='Payment-Page'>
    <div className="payment-container">
      <h1>Payment Page</h1>
      <p>Car ID: {id}</p>
      <form className="payment-form">
        <div>
          <label>Name on Card</label>
          <input type="text" placeholder="Enter name" required />
        </div>
        <div>
          <label>Card Number</label>
          <input type="text" placeholder="1234 5678 9012 3456" maxLength="16" required />
        </div>
        <div>
          <label>Expiry Date</label>
          <input type="month" required />
        </div>
        <div>
          <label>CVV</label>
          <input type="password" placeholder="123" maxLength="3" required />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
   </div>
  );
};

export default Payment;
