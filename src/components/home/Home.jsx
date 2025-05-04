import React from 'react';
import './Home.css';
import Carousel from './carousel/Carousel';
import image from "../../assets/Group 82.png"

function Home() {
  return (
    <div className="home">
      <div className="hero-content">
        <h2 className="hero-title">
          Professional Editing <br />
          <i>That Grabs Attention.</i>
        </h2>
        <p className="hero-subtitle">
          Looking for <strong>jaw-dropping edits</strong>, thumbnails, and scripts that grab attention and make your audience stop scrolling?
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Portfolio</button>
          <button className="outline-btn">Contact Us</button>
        </div>
        </div>
        <div className="carousel-container">
        <Carousel />
      </div>
  <img className="hero-image" src={image} alt="hero" />

  
 
    
    </div>
  );
}

export default Home;