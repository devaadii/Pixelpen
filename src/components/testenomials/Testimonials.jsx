import React from 'react';
import './Testimonials.css';

import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';
import four from '../../assets/four.png';
import five from '../../assets/five.png';
import six from '../../assets/six.png';

const columns = [
  [one, two, three],
  [four, five, six],
  [two, four, one],
];

const scrollSpeeds = [40, 40, 40];

const Testimonial = () => {
  return (
    <div className="vtc-wrapper">
      <div className="vtc-fade-top" />
      <div className="vtc-fade-bottom" />
      <div className="vtc-columns">
        {columns.map((columnImages, colIndex) => {
          const scrollClass = colIndex === 1 ? 'vtc-scroll-down' : 'vtc-scroll-up';

          return (
            <div className="vtc-column" key={colIndex}>
              <div
                className={`vtc-scroll-track ${scrollClass}`}
                style={{ animationDuration: `${scrollSpeeds[colIndex]}s` }}
              >
                {[...columnImages, ...columnImages].map((img, idx) => (
                  <div className="vtc-image-wrapper" key={idx}>
                    <img src={img} alt={`testimonial-${colIndex}-${idx}`} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;