// Import necessary modules
import React, { useState, useEffect } from 'react';
import './Car.css'; // Add a custom CSS file for styling

// Example Car Data
const carData = [
  {
    id: 1,
    name: 'Perodua Axia 1.0c Auto',
    type: 'SMALL CAR',
    priceRange: 'RM110.00 - RM135.00',
    image: 'https://via.placeholder.com/300x150',
  },
  {
    id: 2,
    name: 'Proton Saga FI 1.3 Auto',
    type: 'SEDAN',
    priceRange: 'RM115.00 - RM140.00',
    image: 'https://via.placeholder.com/300x150',
  },
  {
    id: 3,
    name: 'Perodua Myvi 1.3 Auto New',
    type: 'SMALL CAR',
    priceRange: 'RM150.00',
    image: 'https://via.placeholder.com/300x150',
  }
];

const Car = () => {
  const [cars, setCars] = useState([]);
  const [filter, setFilter] = useState('ALL');

  
  useEffect(() => {
    setCars(carData); // 
  }, []);

  const handleFilter = (type) => {
    setFilter(type);
  };

  const filteredCars = cars.filter(
    (car) => filter === 'ALL' || car.type === filter
  );

  const handleBookNow = (carId) => {
    alert(`Car with ID ${carId} has been booked!`);
  };

  return (
    <div className="car-page">
      <h1>Car Rental</h1>
      <div className="filter-buttons">
        {['ALL', 'SMALL CAR', 'SEDAN', 'MPV', 'SUV', '4x4', 'VAN', 'BUS'].map((type) => (
          <button
            key={type}
            className={filter === type ? 'active' : ''}
            onClick={() => handleFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="car-list">
        {filteredCars.map((car) => (
          <div className="car-card" key={car.id}>
            <img src={car.image} alt={car.name} className="car-image" />
            <div className="car-details">
              <p className="car-type">{car.type}</p>
              <h2 className="car-name">{car.name}</h2>
              <p className="car-price">From {car.priceRange} Unit Price</p>
              <button
                className="book-now"
                onClick={() => handleBookNow(car.id)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Car;
