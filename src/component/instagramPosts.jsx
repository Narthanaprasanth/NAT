import React from "react";
import { FaInstagram } from "react-icons/fa"; // Optional: adds standard social icon interaction on hover

const instagramPosts = [
  { id: 1, image: "/images/insta1.jpg", url: "https://instagram.com" }, // Replace with your image paths
  { id: 2, image: "/images/insta2.jpg", url: "https://instagram.com" },
  { id: 3, image: "/images/insta3.jpg", url: "https://instagram.com" },
  { id: 4, image: "/images/insta4.jpg", url: "https://instagram.com" },
  { id: 5, image: "/images/insta5.jpg", url: "https://instagram.com" },
  { id: 6, image: "/images/insta6.jpg", url: "https://instagram.com" },
  { id: 7, image: "/images/insta7.jpg", url: "https://instagram.com" },
  { id: 8, image: "/images/insta8.jpg", url: "https://instagram.com" },
];

export default function InstagramGrid() {
  return (
    <section className="instagram-section">
      {/* Header text exactly matching the layout */}
      <div className="instagram-header">
        <h2 className="instagram-title">Follow us on Instagram</h2>
        <a 
          href="https://www.instagram.com/nathabit.in/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="instagram-handle"
        >
          @nathabit.in
        </a>
      </div>

      {/* Responsive Photo Grid Grid */}
      <div className="insta-grid">
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="insta-tile-wrapper"
          >
            <div className="insta-tile">
              <img 
                src={post.image} 
                alt={`Instagram feed post sample ${post.id}`} 
                className="insta-img" 
              />
              {/* Dark subtle overlay layer popping up on focus/hover standard across e-commerce */}
              <div className="insta-overlay">
                <FaInstagram className="insta-icon" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}