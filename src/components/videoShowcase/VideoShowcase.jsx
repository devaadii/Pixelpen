import React, { useState,useEffect } from "react";
import Marquee from "react-fast-marquee";
import "./VideoShowcase.css";
import thumb1 from "../../assets/thumb.jpg";
import img from "../../assets/Vector 5.png";
import img2 from "../../assets/Vector 6.png"


const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return isMobile;
};


const topRowVideos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/ZDOj45zPcM",
    poster: thumb1,
    type: "youtube",
  },
  {
    id: 2,
    src:"https://www.youtube.com/embed/ZDOj45zYPcM",
    poster: "/thumbs/thumb2.jpg",
    type: "youtube",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/7bq97gCh8V8",
    poster: thumb1,
    type: "youtube",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/fJ9rUzIMcZQ?controls=0",
    poster: "/thumbs/thumb4.jpg",
    type: "youtube",
  },
  {
    id: 5,
    src: "https://www.youtube.com/embed/IcrbM1l_BoI?controls=0",
    poster: "/thumbs/thumb5.jpg",
    type: "youtube",
  },
];

const bottomRowVideos = [
  {
    id: 6,
    src: "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0",
    poster: "/thumbs/thumb6.jpg",
    type: "youtube",
  },
  {
    id: 7,
    src: "https://www.youtube.com/embed/2vjPBrBU-TM?controls=0",
    poster: "/thumbs/thumb7.jpg",
    type: "youtube",
  },
  {
    id: 8,
    src: "https://www.youtube.com/embed/6hzrDeceEKc?controls=0",
    poster: "/thumbs/thumb8.jpg",
    type: "youtube",
  },
  {
    id: 9,
    src: "https://www.youtube.com/embed/VPRjCeoBqrI?controls=0",
    poster: "/thumbs/thumb9.jpg",
    type: "youtube",
  },
  {
    id: 10,
    src: "https://www.youtube.com/embed/8UVNT4wvIGY?controls=0",
    poster: "/thumbs/thumb10.jpg",
    type: "youtube",
  },
  {
    id: 11,
    src: "https://www.youtube.com/embed/OPf0YbXqDm0?controls=0",
    poster: "/thumbs/thumb11.jpg",
    type: "youtube",
  },
  {
    id: 12,
    src: "https://www.youtube.com/embed/y6120QOlsfU?controls=0",
    poster: "/thumbs/thumb12.jpg",
    type: "youtube",
  },
];


const VideoRow = ({ videos, direction, horizontalIndex = null }) => {
    const isMobile = useIsMobile();
const [played, setPlayed] = useState({});
const [hovered, setHovered] = useState({});

const handlePlay = (id) => {
  setPlayed((prev) => ({ ...prev, [id]: true }));
};

const handleHover = (id, isHovering) => {
  setHovered((prev) => ({ ...prev, [id]: isHovering }));
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
        {videos.map((video, idx) => (
     <div
  key={video.id}
  className={`video-card ${idx === horizontalIndex ? "horizontal-card" : ""}`}
  onMouseEnter={() => handleHover(video.id, true)}
  onMouseLeave={() => handleHover(video.id, false)}
>
  {video.type === "youtube" ? (
    played[video.id] && hovered[video.id] ? (
<iframe
  src={`${video.src}?autoplay=1&mute=0&modestbranding=1&rel=0&controls=0&showinfo=0`}
  title={`YouTube Video ${video.id}`}


/>
    ) : (
      <img
        src={video.poster}
        alt="video thumbnail"
        className="video-thumbnail"
        style={{ width: "100%", cursor: "pointer" }}
        onClick={() => handlePlay(video.id)}
      />
    )
  ) : (
    // Local video logic (if needed)
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
        ))}
      </Marquee>
    </div>
  );
};

export default function VideoShowcase() {
  return (
    <>
      <div className="video-carousel-heading">
        <div className="header">
          <h2>Our Edits, Your Story</h2>

          {/* Desktop Vector */}
          <img className="img img-desktop" src={img} alt="vector desktop" />

     


          <p>Results That Speak for Themselves.</p>
                 
    <img className="img img-mobile" src={img2} alt="vector mobile" />
        </div>
      </div>

      <div className="dual-carousel-container">
        <VideoRow videos={topRowVideos} direction="left" horizontalIndex={2} />
  <div className="bottom-row-container">
    <VideoRow videos={bottomRowVideos} direction="right" />
  </div>
      </div>
    </>
  );
}
