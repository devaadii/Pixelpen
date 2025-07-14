import React from 'react';
import './Testimonials.css';

export const testimonials = [
  {
    quote: "Their editing gave my brand a fresh, professional look. My audience noticed the difference immediately!",
    name: "Chris Evans",
    title: "Fitness Coach",
    avatar: "https://i.pravatar.cc/100?img=12",
    rating: 5,
  },
  {
    quote: "Amazing service! Very professional and timely.",
    name: "Taylor Smith",
    title: "Entrepreneur",
    avatar: "https://i.pravatar.cc/100?img=32",
    rating: 5,
  },
  {
    quote: "Transformed my content completely. Highly recommended.",
    name: "Jordan Lee",
    title: "Marketing Expert",
    avatar: "https://i.pravatar.cc/100?img=45",
    rating: 4,
  }
];

const Testimonial = () => {
  // Duplicate testimonials to simulate infinite scroll
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="vtc-wrapper">
      
      <div className="vtc-fade-top" />
      <div className="vtc-fade-bottom" />
      <div className="vtc-columns">
        {[0, 1, 2].map((colIndex) => (
          <div className="vtc-column" key={colIndex}>
            <div className="vtc-scroll-track">
            <img src='public/photo.png'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;