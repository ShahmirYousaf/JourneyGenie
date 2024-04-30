import React from 'react';
import './AboutUs.css'; // Import your CSS file (if needed)
import bg1 from '../../Assets/bg1.jpg';
import wa from '../../Assets/wa.jpg';
import sh from '../../Assets/sh.jpg';
import ma from '../../Assets/ma.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="team-cards">
        <div className="card">
          <img src={sh} alt="Person 1" />
          <div className="card-content">
            <h1 className='names'>Shahmir Yousaf</h1>
            <p>Meet our team member 1. Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="card">
          <img src='../../Assets/wa.jpg' alt="Person 2" />
          <div className="card-content">
          <h1 className='names'>Wania Tariq</h1>
            <p>Meet our team member 2. Consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="card">
          <img src='../../Assets/ma.jpg'alt="Person 3" />
          <div className="card-content">
          <h1 className='names'>Mahrukh Imtiaz</h1>
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
