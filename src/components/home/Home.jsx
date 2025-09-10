import React from 'react';
import './Home.css';
import Carousel from './carousel/Carousel';
import image from "../../assets/Group 82.png"
import UnicornStudioEmbed from './UnicornStudioEmbed';


function Home() {
  const phone = "916376665647";
const message = encodeURIComponent("Hi Pixelpen, I'm interested in your video editing services. Could you please share more details?");
  return (
    <div className="home">
      <div className="hero-content">
        <h2 className="hero-title">
          Professional Editing <br />That 
          <span id='atten'> Grabs Attention.</span>
        </h2>
        <p className="hero-subtitle">
          Looking for <i>jaw-dropping edits, thumbnails, and scripts</i> that grab attention and make your audience stop scrolling?
        </p>
        <div className="hero-buttons" >
          <a href='#portfolio'>
          <button className="primary-btn">Portfolio</button></a>
   
<button
  className="outline-btn"
  onClick={() => {
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  }}
>
  Contact Us
</button>

        </div>
        </div>
           
      
  <img className="hero-image" src={image} alt="hero" />
  <div className="carousel-container">
           
        <Carousel />
      </div>
  
 
    
    </div>
  );
}

export default Home;