// src/components/VideoShowcase.jsx
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import "./VideoShowcase.css";

// If the poster is in src/assets, import it like this:
import thumb1 from "../../assets/thumb.jpg";

const topRowVideos = [
  { id: 1, src: "https://www.youtube.com/embed/EZRHGLRySwQ?controls=0", poster: thumb1, type: "youtube" },
  { id: 2, src: "/videos/vid2.mp4", poster: "/thumbs/thumb2.jpg", type: "local" },
  { id: 3, src: "/videos/vid3.mp4", poster: "/thumbs/thumb3.jpg", type: "local" },
  { id: 4, src: "/videos/vid4.mp4", poster: "/thumbs/thumb4.jpg", type: "local" },
  { id: 5, src: "/videos/vid5.mp4", poster: "/thumbs/thumb5.jpg", type: "local" },
];

const bottomRowVideos = [
  { id: 6, src: "/videos/vid6.mp4", poster: "/thumbs/thumb6.jpg", type: "local" },
  { id: 7, src: "/videos/vid7.mp4", poster: "/thumbs/thumb7.jpg", type: "local" },
  { id: 8, src: "/videos/vid8.mp4", poster: "/thumbs/thumb8.jpg", type: "local" },
  { id: 9, src: "/videos/vid9.mp4", poster: "/thumbs/thumb9.jpg", type: "local" },
  { id: 10, src: "/videos/vid10.mp4", poster: "/thumbs/thumb10.jpg", type: "local" },
  { id: 11, src: "/videos/vid9.mp4", poster: "/thumbs/thumb9.jpg", type: "local" },
  { id: 12, src: "/videos/vid10.mp4", poster: "/thumbs/thumb10.jpg", type: "local" },
];

const VideoRow = ({ videos, direction, horizontalIndex = null }) => {
  const [playingIds, setPlayingIds] = useState([]);

  const handlePlay = (id) => {
    if (!playingIds.includes(id)) {
      setPlayingIds((prev) => [...prev, id]);
    }
  };

  return (
    <div className="carousel-row-custom">
      <Marquee
        speed={40}
        gradient={false}
        pauseOnHover
        direction={direction}
        loop={0}
      >
        {videos.map((video, idx) => {
          const isPlaying = playingIds.includes(video.id);
          return (
            <div
              key={video.id}
              className={`video-card ${idx === horizontalIndex ? "horizontal-card" : ""}`}
            >
              {video.type === "youtube" ? (
                isPlaying ? (
                  <iframe
                    src={video.src}
                    title={`YouTube Video ${video.id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video-frame"
                  ></iframe>
                ) : (
                  <img
                    src={video.poster}
                    alt={`YouTube Poster ${video.id}`}
                    className="youtube-poster"
                    onClick={() => handlePlay(video.id)}
                  />
                )
              ) : (
                <video
                  src={video.src}
                  poster={video.poster}
                  muted
                  loop
                  preload="none"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                />
              )}
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default function VideoShowcase() {
  return (
    <div className="dual-carousel-container">
      <VideoRow videos={topRowVideos} direction="left" horizontalIndex={2} />
      <VideoRow videos={bottomRowVideos} direction="right" />
    </div>
  );
}