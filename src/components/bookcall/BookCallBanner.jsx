import React, { useState, useEffect } from 'react';
import './BookCallBanner.css';


const slides = [
  {
    brand: "PixelPen.",
    headline: "Book a Call Now to Discuss further.",
  
  },
  {
    brand: "PixelPen.",
    headline: "Let’s Make Your Vision Real.",
    image: "/banner2.jpg",
  },
  {
    brand: "PixelPen.",
    headline: "Bring Your Story to Life with Us.",
    image: "/banner3.jpg",
  },
];

const BookCallBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5s per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="book-banner"
      style={{ backgroundImage: `url(${slides[current].image})` }}
    >
      <div className="book-banner-content">
        <h1 className="brand">{slides[current].brand}</h1>
        <h2 className="headline">
          {slides[current].headline.split('\n').map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </h2>
        <button className="book-button">Book a Call</button>
      </div>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <span key={i} className={`dot ${i === current ? 'active' : ''}`}></span>
        ))}
      </div>
    </div>
  );
};

export default BookCallBanner;