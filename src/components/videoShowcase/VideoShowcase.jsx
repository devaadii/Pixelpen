import React from "react";
import "./VideoShowcase.css";
import img from "../../assets/Vector 5.png"

const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.instagram.com/reel/DJUBYPeJkLt/?igsh=ZTRndnpldHFscHU=",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
  "https://www.youtube.com/embed/ysz5S6PUM-U",
  "https://www.youtube.com/embed/kJQP7kiw5Fk",
];
const videosBottom = [
  "https://www.youtube.com/embed/jfKfPfyJRdk",
  "https://www.youtube.com/embed/aqz-KE-bpKQ",
  "https://www.youtube.com/embed/V-_O7nl0Ii0",
  "https://www.youtube.com/embed/l482T0yNkeo",
  "https://www.youtube.com/embed/oHg5SJYRHA0",
  "https://www.youtube.com/embed/60ItHLz5WEA",
  "https://www.youtube.com/embed/5NV6Rdv1a3I",
];


// Duplicate for infinite loop effect
const videoList = [...videos, ...videos];
const videoListBottom = [...videosBottom, ...videosBottom];
const VideoShowcase = () => {
  return (
    <div className="video-showcase">
      <div className="grid-bg"></div>
      <div className="header">
        <h2>Our Edits, Your Story</h2><img className="img" src={img} />
        <p>Results That Speak for Themselves.</p>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-track">
          {videoList.map((url, i) => (
            <div
              className={`video-card ${i % 5 === 2 ? "wide" : ""}`}
              key={i}
            >
              <iframe
                src={url}
                title={`video-${i}`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
          ))}
        </div>
        <div className="fade fade-left" />
        <div className="fade fade-right" />
      </div>
      <div className="carousel-wrapper second-carousel">
        <div className="carousel-track reverse-scroll">
          {videoListBottom.map((url, i) => (
            <div className="video-card small" key={`bottom-${i}`}>
              <iframe
                src={url}
                title={`bottom-video-${i}`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
          ))}
        </div>
        <div className="fade fade-left" />
        <div className="fade fade-right" />
      </div>
    </div>
  );
};

export default VideoShowcase;