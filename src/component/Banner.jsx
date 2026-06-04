import React, { useEffect, useState } from "react";


function Banner() {
  const images = [
    "/images/banner1.png",
    "/images/banner2.png"
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      <img src={images[current]} alt="banner" className="banner-image" />
    </div>
  );
}

export default Banner;