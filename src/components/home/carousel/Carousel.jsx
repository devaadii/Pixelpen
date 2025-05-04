import "./Carousel.css"
const carouselData = [
  ["Podcast Video Edit", "Youtube Video Edit", "Reel Cut", "Thumbnail Design", "Script Writing", "Video Ads"],
  ["Youtube Video Edit", "Reel Cut", "Thumbnail Design", "Script Writing", "Video Ads", "Podcast Video Edit"],
  ["Reel Cut", "Thumbnail Design", "Script Writing", "Video Ads", "Podcast Video Edit", "Youtube Video Edit"],
  ["Thumbnail Design", "Script Writing", "Video Ads", "Podcast Video Edit", "Youtube Video Edit", "Reel Cut"],
];

function CarouselRow({ items, direction }) {
  const scrollClass = direction === "right" ? "scroll-right" : "scroll-left";

  return (
    <div className="carousel-wrapper">
      <div className="fade-left" />
      <div className="fade-right" />
      <div className={`carousel-track ${scrollClass}`}>
        {[...items, ...items].map((text, index) => (
          <div className="carousel-item" key={index}>
            <span className="dot">•</span> {text}
          </div>
        ))}
      </div>
    </div>
  );
}
export default function Carousel() {
  return (
    <div className="carousel-section">
    {carouselData.map((items, idx) => (
      <CarouselRow
        items={items}
        key={idx}
        direction={idx % 2 === 0 ? "left" : "right"}
      />
    ))}
  </div>
  );
}