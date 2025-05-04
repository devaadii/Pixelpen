import React from "react";
import "./PackagesSection.css";

const PackagesSection = () => {
  return (
    <div className="packages-wrapper">
      <h2 className="heading">Two Packages</h2>
      <p className="subheading">Endless Possibilities</p>

      <div className="packages-grid">
        {/* Package 1 */}
        <div className="package-card">
          <h3 className="package-title">PixelPen Pro</h3>
          <ul className="package-features">
            <li>
              ➜ High-Quality Video Editing for <b>Reels, Long-form Content & Podcasts</b>
            </li>
            <li>
              ➜ Fast <b>Turnarounds</b>
            </li>
            <li>
              ➜ <b>Flawless</b> Output
            </li>
          </ul>
          <button className="book-btn">Book A Call</button>
        </div>

        {/* Package 2 */}
        <div className="package-card elite">
          <h3 className="package-title">PixelPen Elite</h3>
          <ul className="package-features">
            <li>
              ➜ <b>Pro-Level</b> Editing for <b>Reels, Long-form Content & Podcasts</b>
            </li>
            <li>
              ➜ <b>Click-Worthy</b> Thumbnails
            </li>
            <li>
              ➜ Fast <b>Turnarounds</b>
            </li>
            <li>
              ➜ <b>Flawless</b> Output
            </li>
            <li>
              ➜ <b>Scriptwriting</b> That Converts
            </li>
            <li>
              ➜ <b>Content Strategy</b> Tailored for Results
            </li>
          </ul>
          <button className="book-btn">Book A Call</button>
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;