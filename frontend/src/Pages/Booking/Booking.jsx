import React, { useEffect, useState } from 'react';
import axios from 'axios';
import fly from '../../Assets/fly.jpg'; 
import africaImage from '../../Assets/africa.jpg';
import switzImage from '../../Assets/switz.jpg';
import italyImage from '../../Assets/italy.jpg';
import egyptImage from '../../Assets/egypt.jpg';
import alaskaImage from '../../Assets/alaska.jpg';
import koreaImage from '../../Assets/korea.jpg';
import './booking.css';

const Booking = () => {
  const [tourPackages, setTourPackages] = useState([]);

  useEffect(() => {
    const fetchTourPackages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/booking/tour-packages');
        setTourPackages(response.data.tourPackages);
      } catch (error) {
        console.error('Error fetching tour packages:', error);
      }
    };

    fetchTourPackages();
  }, []); // Empty dependency array for initial fetch

  const handleBookNow = (packageId) => {
    console.log(`Booking package with ID: ${packageId}`);
    // Implement booking logic here
    // You can redirect to a booking page or perform other actions
  };

  const countryImageMap = {
    Africa: africaImage,
    Switzerland: switzImage,
    Italy: italyImage,
    Egypt: egyptImage,
    Alaska: alaskaImage,
    Korea: koreaImage,
  };

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
        {tourPackages.map((tour) => (
          <div key={tour._id} className="tour-package">
          {/* Text content section (60% width) */}
          <div className="package-details">
            <h2>{tour.Country}</h2>
            <p>{tour.Description}</p>
            <p><b>Duration: </b> {tour.Duration}</p>
            <p><b>Price: $</b> {tour.Price}</p>
            <p><b>Starting Date: </b>{tour.Date}</p>
            <button
              className="book-now-button"
              onClick={() => handleBookNow(tour._id)}
            >
              Book Now
            </button>
          </div>
        
          {/* Image section (40% width) */}
          <div className="tour-image-container">
            <img className="tour-image" src={countryImageMap[tour.Country]} alt={tour.Country} />
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default Booking;
