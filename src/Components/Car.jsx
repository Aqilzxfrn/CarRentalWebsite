// Import necessary modules
import React, { useState, useEffect } from 'react';
import './Car.css'; // Add a custom CSS file for styling

// Example Car Data
const carData = [
  {
    id: 1,name: 'Perodua Axia 1.0c Auto',type: 'SMALL CAR',priceRange: 'RM100.00',image: 'https://www.kkcarrent.my/wp-content/uploads/2020/08/Peradua-Axia-1.0c-Auto.png',
  },
  {
    id: 2,name: 'Proton Saga FI 1.3 Auto',type: 'SEDAN',priceRange: 'RM115.00',image: 'https://www.kkcarrent.my/wp-content/uploads/2020/08/Proton-Saga-FI-1.3-Auto.jpg',
  },
  {
    id: 3,name: 'Perodua Myvi 1.3 Auto New',type: 'SMALL CAR',priceRange: 'RM120.00',image: 'https://www.kkcarrent.my/wp-content/uploads/2020/08/Perodua-Myvi-1.3-Auto-New.jpg',
  },
  {
    id: 4,name: 'Perodua Bezza 1.3 Auto New',type: 'SEDAN',priceRange: 'RM130.00',image: 'https://www.kkcarrent.my/wp-content/uploads/2020/08/Perodua-Bezza-1.3-Auto-New.jpg',
  },
  {
    id: 5,name: 'Honda City 1.5 Auto',type: 'SEDAN',priceRange: 'RM150.00',image: 'https://evault.honda.com.my/pixelvault/2023-08/c3393e545b27c78393d3242cc612efca43efdf0b92752.png',
  },
  {
    id: 6,name: 'Toyota Vios 1.5 Auto New',type: 'SEDAN',priceRange: 'RM150.00',image: 'https://build.toyota.com.my/wp-content/uploads/2020/05/vios-white.png',
  },
  {
    id: 7,name: 'Perodua Alza 1.5 Auto New',type: 'MPV',priceRange: 'RM140.00',image: 'https://www.kkcarrent.my/wp-content/uploads/2020/08/Perodua-Alza-1.5-Auto-Medium-New.jpg',
  },
  {
    id: 8,name: 'Nissan Serena 2.0 Hybrid Auto New',type: 'MPV',priceRange: 'RM180.00',image: 'https://nissan.com.my/wp-content/uploads/2022/08/Serena-s-hybrid-variants-4-300x165.jpg',
  },
  {
    id: 9,name: 'Toyota Veloz 1.5  Auto New',type: 'MPV',priceRange: 'RM160.00',image: 'https://build.toyota.com.my/wp-content/uploads/2022/08/BMPV-Veloz-52-1024x576.png',
  },
  {
    id: 10,name: 'Toyota Innova 2.0 Auto New',type: 'MPV',priceRange: 'RM170.00',image: 'https://www.toyota.com.my/content/dam/malaysia/models/innova/overview/toyota-my-innova-overview-1200x1200.jpg',
  },
  {
    id: 11,name: 'Honda HR-V 1.5 Turbo Auto New',type: 'SUV',priceRange: 'RM150.00',image: 'https://evault.honda.com.my/pixelvault/2022-07/00069be229fe55d7f14ac893eadaf1982e98f96251026.png',
  },
  {
    id: 12,name: 'Proton X50 1.5 Auto New',type: 'SUV',priceRange: 'RM150.00',image: 'https://www.proton.com/assets/x50/img/content-sdesign-c1.jpg',
  },
  {
    id: 13,name: 'Perodua Ativa 1.0 Turbo Auto New',type: 'SUV',priceRange: 'RM140.00',image: 'https://perodua.co/wp-content/uploads/2022/03/Ativa-Color-Pearl-Diamond-White.png.webp',
  },
  {
    id: 14,name: 'Perodua Aruz 1.5 Auto New',type: 'SUV',priceRange: 'RM140.00',image: 'https://www.perodua.com.my/assets/images/CarSpec/Aruz/Prize_and_specification_Aruz_01.webp',
  },
  {
    id: 15,name: 'Toyota Hilux 2.4 Auto New',type: '4x4',priceRange: 'RM200.00',image: 'https://build.toyota.com.my/wp-content/uploads/2020/10/hilux-car-color-brown.png',
  },
  {
    id: 16,name: 'Ford Ranger Raptor 2.0 Auto New',type: '4x4',priceRange: 'RM200.00',image: 'https://static.wixstatic.com/media/fdaab4_9864920e51bb45bf9f12842ce1015fdc~mv2.png/v1/fill/w_1137,h_657,al_c,q_90,usm_4.00_1.00_0.00,enc_avif,quality_auto/New%20Ford%20Ranger%20Raptor%202_0L.png',
  },
  {
    id: 17,name: 'Toyota Fortuner 2.4 Auto New',type: '4x4',priceRange: 'RM180.00',image: 'https://build.toyota.com.my/wp-content/uploads/2021/01/fort-bronze.png',
  },
  {
    id: 18,name: 'Nissan Navara 2.5 Auto New',type: '4x4',priceRange: 'RM200.00',image: 'https://nissan.com.my/v2/wp-content/uploads/2024/09/nar-choose-1-v2.png',
  },
  {
    id: 19,name: 'Proton Iriz 1.6 Auto New',type: 'SMALL CAR',priceRange: 'RM115.00',image: 'https://www.proton.com/assets/ps2022/iriz/img/snowwhite/iriz-snowwhite-0001.png',
  },
  {
    id: 20,name: 'Toyota Yaris 1.5 Auto New',type: 'SMALL CAR',priceRange: 'RM140.00',image: 'https://build.toyota.com.my/wp-content/uploads/2023/09/2-tone-red-mica-metallic-yaris.jpg',
  },
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
      <h1>Car Lists</h1>
      <div className="filter-buttons">
        {['ALL', 'SMALL CAR', 'SEDAN', 'MPV', 'SUV', '4x4'].map((type) => (
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