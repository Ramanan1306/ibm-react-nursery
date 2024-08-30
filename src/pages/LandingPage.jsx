import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import backgroundImage from '../assets/background-image.jpg';

const LandingPage = () => {
  return (
    <div
      className="landing-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="landing-content">
        <h1>Flower Moon Nursery</h1>
        <p>Welcome to Flower Moon Nursery! We offer a variety of house plants to make your home.</p>
        <Link to="/products" className="get-started-btn">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;
