import React from 'react';
import './AboutUs.css'; 
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
            <p> I BELIEVE  "Adventure awaits, let's conquer the globe together🌐."</p>
          </div>
        </div>
        <div className="card">
          <img src={wa1} alt="Person 2" />
          <div className="card-content">
          <h2 className='names'>Wania Tariq</h2>
            <p> "We are on a mission to make your travel experience THE BEST SO FAR"</p>
          </div>
        </div>
        <div className="card">
          <img src={ma} alt="Person 3" />
          <div className="card-content">
          <h2 className='names'>Mahrukh Imtiaz</h2>
            <p>"Plan your trips effortlessly and let the magic of JOURNEY GENIE enhance your travel experience🌐"</p>
          </div>
        </div>
      </div>
      <div className="aim-card">
        <h1 id='aimid2'>Our Aim</h1>
        <p id='aimid'>Welcome to Journey Genie. Our mission is to inspire, connect, and empower travelers to discover new destinations, create lifelong memories, and explore the world with confidence.
        Join us today and embark on a world of possibilities 🌎✨ .......... LET'S EXPLORE TOGETHER !!!</p>
      </div>
    </div>
  );
};

export default AboutUs;
