import React, { useState, useEffect, useRef } from "react";
import img from "../../../assets/thumb.jpg";

const slides = [
  {
    orientation: "horizontal",
    thumbnail: "video-horizontal-thumb.jpg",
    videoSrc: "ZDOj45zYPcM", // use video ID (not full embed URL)
  },
  {
    orientation: "vertical",
    thumbnail: img,
    videoSrc: "ZDOj45zYPcM",
  },
  {
    orientation: "vertical",
    thumbnail: "short2-thumb.jpg",
    videoSrc: "SHORT2_ID",
  },
];

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  // load YT API once
  useEffect(() => {
    if (window.YT && window.YT.Player) return;
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    // no need to set window.onYouTubeIframeAPIReady here; handled below when creating player
  }, []);

  // create / destroy player when isPlaying changes or slide changes
  useEffect(() => {
    // if not playing, destroy existing player (if any)
    if (!isPlaying) {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {}
        playerRef.current = null;
      }
      return;
    }

    // create player helper
    const createPlayer = () => {
      // defensive: destroy previous
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
        playerVars: {
          autoplay: 1,
          rel: 0,
        },
        events: {
          onReady: () => {
            // ensure iframe stacking / sizing so buttons can overlay it
            try {
              const iframe = playerRef.current.getIframe();
              if (iframe) {
                iframe.style.position = "absolute";
                iframe.style.top = "0";
                iframe.style.left = "0";
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                iframe.style.zIndex = "1"; // keep it below UI controls
              }
            } catch (e) {}
          },
          onStateChange: (event) => {
            // auto return to thumbnail when ended
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
      // If API not ready, set callback
      window.onYouTubeIframeAPIReady = createPlayer;
    }

    // cleanup for this effect
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
    if (playerRef.current && playerRef.current.pauseVideo) {
      try {
        playerRef.current.pauseVideo();
      } catch (e) {}
      try {
        playerRef.current.stopVideo();
      } catch (e) {}
      try {
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

  const renderSlide = (slide, index) => {
    const isActive = index === currentIndex;
    return (
      <div
        key={index}
        className={`custom-carousel-slide ${
          slide.orientation === "horizontal"
            ? "custom-carousel-horizontal"
            : "custom-carousel-vertical"
        }`}
        style={{ display: isActive ? "block" : "none" }}
      >
        {isActive && isPlaying ? (
          <div className="video-wrapper">
            {/* YT Player will inject an iframe into this div */}
            <div id={`yt-player-${index}`} className="player-host" />
            <button
              className="custom-carousel-close"
              onClick={stopVideo}
              aria-label="Close video"
            >
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
    );
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
        {slides.map((slide, index) => renderSlide(slide, index))}

        <button
          className="custom-carousel-arrow custom-carousel-arrow-left"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          className="custom-carousel-arrow custom-carousel-arrow-right"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>

      <style jsx>{`
        .custom-carousel-container {
          width: 100%;
          max-width: 720px;
          margin: auto;
          position: relative;
        }
        .custom-carousel {
          position: relative;
          overflow: hidden;
          background: black;
          width: 100%;
        }
        /* make wrapper aspect-ratio change with orientation */
        .custom-carousel-horizontal {
          aspect-ratio: 16 / 9;
        }
        .custom-carousel-vertical {
          aspect-ratio: 9 / 16;
        }

        .custom-carousel-slide {
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0; /* slides low so controls can overlay */
        }

        .player-host {
          position: absolute; /* YT iframe will be absolutely positioned inside */
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1; /* iframe will inherit this from getIframe styling */
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .custom-carousel-video-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
        }
        .custom-carousel-thumb-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
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

        /* Close button */
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
          z-index: 1002; /* above iframe */
        }

        /* Arrows */
        .custom-carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(255, 255, 255, 0.9);
          border: none;
          font-size: 24px;
          cursor: pointer;
          padding: 8px;
          z-index: 1001; /* above iframe */
          border-radius: 50%;
        }
        .custom-carousel-arrow-left {
          left: 8px;
        }
        .custom-carousel-arrow-right {
          right: 8px;
        }
      `}</style>
    </div>
  );
}