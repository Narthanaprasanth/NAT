import React, { useEffect, useState } from "react";

function Banner2() {
  const images = [
    "/images/add.png",
    "/images/add2.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-slider-container">
      {/* Moving track holding all images inline */}
      <div 
        className="slider-track" 
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="slide-item">
            <img 
              src={src} 
              alt={`Promo slide ${index + 1}`} 
              className="slide-fluid-img" 
            />
          </div>
        ))}
      </div>

      {/* Navigation Indicators/Dots */}
      <div className="slider-dots-indicator">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner2;