import React, { useEffect, useState } from "react";
import "./OurStory.css";

const labels = [
  "400M+ Views",
  "4M+ Followers",
  "40+ Clients",
  "20+ Creative Team"
];

const barData = [
  { id: 1, height: 270, left: 320 },
  { id: 2, height: 210, left: 230 },
  { id: 3, height: 150, left: 140 },
  { id: 4, height: 90, left: 50 }
];

const OurStory = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="axis-container">
      <div className="x-axis">
        <div className="arrow arrow-right"></div>
      </div>
      <div className="y-axis">
        <div className="arrow arrow-up"></div>
      </div>

      {barData.map((bar, index) => {
        const topPosition = 400 - (animate ? bar.height : 0); // 400px container height
        const lineLength = 400 - bar.left;

        return (
          <React.Fragment key={bar.id}>
            {/* Bar */}
            <div
              className={`bar ${animate ? "animate" : ""}`}
              style={{
                left: `${bar.left}px`,
                height: animate ? `${bar.height}px` : `0px`
              }}
            >
              <div className="bar-label">{bar.id}</div>
            </div>

            {/* Dotted Line + Label (Horizontal and aligned) */}
            <div
              className="horizontal-line-container"
              style={{
                top: `${topPosition - 10}px` // Adjust to align with bar top
              }}
            >
              <div
                className="horizontal-line"
                style={{
                  left: `${bar.left}px`,
                  width: animate ? `${lineLength}px` : `0px`
                }}
              ></div>
              <div className="right-label">{labels[index]}
      
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default OurStory;