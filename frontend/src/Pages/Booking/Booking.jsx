import React, { useEffect, useState } from 'react';
import axios from 'axios';
import fly from '../../Assets/fly.jpg'; 
import './booking.css';

const Booking = () => {
  const [tourPackages, setTourPackages] = useState([]);

  useEffect(() => {
    // Fetch tour packages from MongoDB backend
    const fetchTourPackages = async () => {
      try {
        const response = await axios.get('/api/tour-packages');
        setTourPackages(response.data);
      } catch (error) {
        console.error('Error fetching tour packages:', error);
      }
    };

    fetchTourPackages();
  }, []);

  return (
    <div className="booking-container">
        <div className="hero-section">
        <div className="background-image">
          <img src={fly} alt="Background" />
        </div>
        <div className="text-content">
          <h1>Fly to Your Destination</h1>
          <button className="explore-button">Explore</button>
        </div>
      </div>
      <div className="tour-packages">
        {tourPackages.map((tours) => (
          <div key={tours._id} className="tour-package">
            <img src={tours.image} alt={tours.name} />
            <div className="package-details">
              <h2>{tours.name}</h2>
              <p>{tours.description}</p>
              <p>Price: ${tours.price}</p>
              {/* Add more details as needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
