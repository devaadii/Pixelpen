import React, { useState, useEffect, useRef } from "react";
import img from "../../../assets/thumb.jpg";

const slides = [
  {
    orientation: "horizontal",
    thumbnail: img,
    videoSrc: "ZDOj45zYPcM",
  },
  {
    orientation: "vertical",
    thumbnail: img,
    videoSrc: "ZDOj45zYPcM",
  },
  {
    orientation: "vertical",
    thumbnail: img,
    videoSrc: "SHORT2_ID",
  },
];

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  // YouTube API loader
  useEffect(() => {
    if (window.YT && window.YT.Player) return;
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }, []);

  // Manage player lifecycle
  useEffect(() => {
    if (!isPlaying) {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {}
        playerRef.current = null;
      }
      return;
    }

    const createPlayer = () => {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {}
        playerRef.current = null;
      }

      playerRef.current = new window.YT.Player(`yt-player-${currentIndex}`, {
        videoId: slides[currentIndex].videoSrc,
        width: "100%",
        height: "100%",
        playerVars: { autoplay: 1, rel: 0 },
        events: {
          onReady: () => {
            try {
              const iframe = playerRef.current.getIframe();
              if (iframe) {
                Object.assign(iframe.style, {
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  zIndex: "1",
                });
              }
            } catch (e) {}
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              setIsPlaying(false);
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;
    }

    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {}
        playerRef.current = null;
      }
    };
  }, [isPlaying, currentIndex]);

  const stopVideo = () => {
    if (playerRef.current) {
      try {
        playerRef.current.stopVideo();
        playerRef.current.destroy();
      } catch (e) {}
      playerRef.current = null;
    }
    setIsPlaying(false);
  };

  const prevSlide = () => {
    stopVideo();
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    stopVideo();
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  return (
    <div className="custom-carousel-container">
      <div
        className={`custom-carousel ${
          slides[currentIndex].orientation === "horizontal"
            ? "custom-carousel-horizontal"
            : "custom-carousel-vertical"
        }`}
      >
<div
  className="custom-carousel-track"
  style={{
    transform: `translateX(-${currentIndex * 100}%)`,
  }}
>
 {slides.map((slide, index) => (
  <div
    key={index}
    className={`custom-carousel-slide ${
      slide.orientation === "horizontal"
        ? "custom-carousel-horizontal"
        : "custom-carousel-vertical"
    }`}
  >
    {isPlaying && index === currentIndex ? (
      <div className="video-wrapper">
        <div id={`yt-player-${index}`} className="player-host" />
        <button className="custom-carousel-close" onClick={stopVideo}>
          ✕
        </button>
      </div>
    ) : (
      <div
        className="custom-carousel-thumb-wrapper"
        onClick={() => handleThumbnailClick(index)}
      >
        <img
          src={slide.thumbnail}
          alt={`Video thumbnail ${index}`}
          className="custom-carousel-video-thumb"
        />
        <div className="custom-carousel-play-button">▶</div>
      </div>
    )}
  </div>
))}
        </div>

        <button
          className="custom-carousel-arrow custom-carousel-arrow-left"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="custom-carousel-arrow custom-carousel-arrow-right"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
<style jsx>{`
.custom-carousel-container {
  display: flex;
  justify-content: center; /* horizontal center */
  align-items: center;     /* vertical center */
  width: 100%;
}

  .custom-carousel {
    position: relative;
    overflow: hidden;
    background: black;
    width: 100%;
    border: 12px solid #111;   /* phone bezel */
    border-radius: 32px;       /* phone rounded corners */
    box-shadow: 0 0 20px rgba(0,0,0,0.4);
  }

  .custom-carousel-track {
  display: flex;
  transition: transform 0.6s ease-in-out;
  width: 100%;
  height: 100%;
}

  .custom-carousel-horizontal {
    aspect-ratio: 16 / 9;
    max-height: 280px; /* like watching in landscape on a phone */
  }

  .custom-carousel-vertical {
    aspect-ratio: 9 / 16;
    max-width:300px

  }



 .custom-carousel-slide {
  flex-shrink: 0;
  position: relative;
  width: 100%;   /* for horizontal */
  height: 100%;  /* for vertical */
}

  .video-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .player-host {
    width: 100%;
    height: 100%;
    border-radius: 24px; /* match phone frame */
    overflow: hidden;
  }

.custom-carousel-thumb-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 200px;   /* ✅ guarantees visible thumbnail */
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-carousel-video-thumb {
  display: block;
  width: 100%;
  height: auto;        /* ✅ prevents collapsing */
  border-radius: 24px;
  object-fit: cover;
}

  .custom-carousel-play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 32px;
    padding: 12px 20px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;
  }

  .custom-carousel-close {
    position: absolute;
    top: 8px;
    right: 8px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 18px;
    border: none;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    cursor: pointer;
    z-index: 1002;
  }

.custom-carousel-arrow {
  position: absolute;          /* inside the carousel */
  top: 50%;                    /* vertically center */
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
  border-radius: 50%;
}

.custom-carousel-arrow-left {
  left: 16px;   /* fixed distance from left */
}

.custom-carousel-arrow-right {
  right: 16px;  /* fixed distance from right */
}
`}</style>
    </div>
  );
}