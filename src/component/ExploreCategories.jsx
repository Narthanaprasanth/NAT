import React, { useRef } from "react";

const categoriesData = [
  { id: 1, name: "Home", image: "/images/cat-home.png" },
  { id: 2, name: "Summer Care", image: "/images/cat-summer.png" },
  { id: 3, name: "Hair", image: "/images/cat-hair.png" },
  { id: 4, name: "Face", image: "/images/cat-face.png" },
  { id: 5, name: "Body", image: "/images/cat-body.png" },
  { id: 6, name: "Analyse Skin", image: "/images/cat-analyse.png" },
  { id: 7, name: "Eyes & Lips", image: "/images/cat-eyes.png" },
  { id: 8, name: "Baby", image: "/images/cat-baby.png" },
  { id: 9, name: "Hair Fall", image: "/images/cat-fall.png" },
  { id: 10, name: "Men", image: "/images/cat-men.png" },
  { id: 11, name: "Gifting ✨", image: "/images/cat-gifting.png" },
];

export default function ExploreCategories() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = 200;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="explore-section">
      {/* Header */}
      <div className="explore-header">
        <h2 className="explore-title">Explore our other Categories</h2>
        <p className="explore-subtitle">We hope you'll like them</p>
      </div>

    

      {/* Slider */}
      <div className="categories-slider" ref={scrollRef}>
        <div className="categories-track">
          {categoriesData.map((category) => (
            <div key={category.id} className="category-capsule">
              <div className="circle-avatar-frame">
                <img
                  src={category.image}
                  alt={category.name}
                  className="avatar-img"
                />
              </div>
              <span className="category-label">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}