import React from 'react';
import './AboutUs.css'; // Import your CSS file (if needed)
import bg1 from '../../Assets/bg1.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="team-cards">
        <div className="card">
          <img src="path-to-image1.jpg" alt="Person 1" />
          <div className="card-content">
            <h2>John Morgan</h2>
            <p>Meet our team member 1. Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="card">
          <img src="path-to-image2.jpg" alt="Person 2" />
          <div className="card-content">
            <h2>Ellie Anderson</h2>
            <p>Meet our team member 2. Consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="card">
          <img src="path-to-image3.jpg" alt="Person 3" />
          <div className="card-content">
            <h2>Nana Adebayo</h2>
            <p>Meet our team member 3. Sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
      <div className="aim-card">
        <h2>Our Aim</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel libero lacinia tincidunt.</p>
      </div>
    </div>
  );
};

export default AboutUs;
