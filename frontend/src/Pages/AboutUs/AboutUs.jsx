import React from 'react';
import './AboutUs.css'; // Import your CSS file (if needed)
import bg1 from '../../Assets/bg1.jpg';
import wa1 from '../../Assets/wa1.jpg';
import sh from '../../Assets/sh.jpg';
import ma from '../../Assets/ma.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="team-cards">
        <div className="card">
          <img src={sh} alt="Person 1" />
          <div className="card-content">
            <h2 className='names'>Shahmir Yousaf</h2>
            <p>Meet our team member 1. Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="card">
          <img src={wa1} alt="Person 2" />
          <div className="card-content">
          <h2 className='names'>Wania Tariq</h2>
            <p>Meet our team member 2. Consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="card">
          <img src={ma} alt="Person 3" />
          <div className="card-content">
          <h2 className='names'>Mahrukh Imtiaz</h2>
            <p>Meet our team member 3. Sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
      <div className="aim-card">
        <h2>Our Aim</h2>
        <p id='aimid'>Welcome to Journey Genie. Our mission is to inspire, connect, and empower travelers to discover new destinations, create lifelong memories, and explore the world with confidence.
        Join us today and embark on a world of possibilities!!!</p>
      </div>
    </div>
  );
};

export default AboutUs;
