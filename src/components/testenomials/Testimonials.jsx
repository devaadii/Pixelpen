import React from 'react';
import './Testimonials.css';

import one from '../../assets/one.svg';
import two from '../../assets/two.svg';
import three from '../../assets/three.svg';
import four from '../../assets/four.svg';
import five from '../../assets/five.svg';
import six from '../../assets/six.svg';

const columns = [
  [one, two, three],
  [four, five, six],
  [two, four, one],
];

const scrollSpeeds = [40, 40, 40];

const  Testimonial = () => {
  return (
    <>
          <div style={{color:"white" , textAlign:"center"}}>
        <h2  className="heading">Testimonials</h2>
              <p className="subheading">From Pixels to Power Moves</p>
</div>
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
    </>
  );
};

export default Testimonial;