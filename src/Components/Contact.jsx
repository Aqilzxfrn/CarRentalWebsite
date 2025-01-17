import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Get in touch with us using the form below or through our contact information.</p>
      
      <div className="contact-container">
        {/* Contact Information Section */}
        <div className="contact-info">
          <h2>Our Office</h2>
          <p><strong>Address:</strong> 123 Main Street, Kuala Lumpur, Malaysia</p>
          <p><strong>Email:</strong> GoDrive@gmail.com</p>
          <p><strong>Phone:</strong> +60 123-456-789</p>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" placeholder="Your Name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" placeholder="Your Email" required />
            </label>
            <label>
              Message:
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
