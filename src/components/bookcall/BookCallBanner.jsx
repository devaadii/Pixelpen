import React from 'react';
import './BookCallBanner.css';

const BookCallBanner = () => {
  return (
    <div className="book-banner">
      <div className="book-banner-content">
        <h1 className="brand">Pixel Pen.</h1>
        <h2 className="headline">Book A Call Now, To<br />Discuss About your Edit!</h2>
        <button className="book-button">Book A Call</button>
      </div>

      <div className="carousel-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default BookCallBanner;