import React, { useState, useRef, useEffect } from "react";
import {
  FiSearch,
  FiShoppingBag,
  FiHeart,
  FiUser,
  FiMenu,
} from "react-icons/fi";
import { MdFlashOn } from "react-icons/md";
import { FaFire } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollRef = useRef();

  // ITEMS ARRAY (clean + reusable)
  const items = [
    { icon: <MdFlashOn />, name: "Flash Deals", highlight: true },
    { icon: <FaFire />, name: "Trending" },
    { name: "Summer Care" },
    { name: "Hair" },
    { name: "Face" },
    { name: "Body" },
    { name: "Eyes & Lips" },
    { name: "Baby" },
    { name: "Hair Fall" },
    { name: "Men" },
    { name: "Gifting" },
    { name: "Concern" },
    { name: "Ingredients" },
  ];

  // duplicate for infinite effect
  const loopItems = [...items, ...items];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollPosition = 0;

    const interval = setInterval(() => {
      scrollPosition += 1.2; 

      container.scrollLeft = scrollPosition;

      // when half reached → reset WITHOUT visible jump
      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }
    }, 16); 

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="navbar">

      {/* TOP BAR */}
      <div className="navbar-top">

        <div className="logo">Nat Habbit</div>

        <div className="search-box">
          <FiSearch />
          <input type="text" placeholder="Search products..." />
        </div>

        <div className="icons">
          <FiSearch className="icon mobile-search-icon" />
          <FiMenu
            className="icon mobile-menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <FiHeart className="icon" />
          <FiShoppingBag className="icon" />
          <FiUser className="icon" />
        </div>

      </div>

      {/* CATEGORY CAROUSEL */}
      <div className="navbar-bottom" ref={scrollRef}>

        {loopItems.map((item, index) => (
          <div
            key={index}
            className={`nav-item ${item.highlight ? "highlight" : ""}`}
          >
            {item.icon} {item.name}
          </div>
        ))}

      </div>

    </header>
  );
}

export default Navbar;