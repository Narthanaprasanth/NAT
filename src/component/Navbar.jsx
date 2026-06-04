import React from "react";
import { FiSearch, FiShoppingBag, FiHeart, FiUser } from "react-icons/fi";
import { MdFlashOn } from "react-icons/md";
import { FaFire } from "react-icons/fa";

function Navbar() {
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
          <FiHeart className="icon" />
          <FiShoppingBag className="icon" />
          <FiUser className="icon" />
        </div>
      </div>

      {/* CATEGORY BAR */}
      <div className="navbar-bottom">
        <div className="nav-item highlight">
          <MdFlashOn /> Flash Deals
        </div>

        <div className="nav-item">
          <FaFire /> Trending 
        </div>

        <div className="nav-item">Summer Care</div>
        <div className="nav-item">Hair</div>
        <div className="nav-item">Face</div>
        <div className="nav-item">Body</div>
        <div className="nav-item">Eyes & Lips</div>
        <div className="nav-item">Baby</div>
        <div className="nav-item">Hair Fall</div>
        <div className="nav-item">Men</div>
        <div className="nav-item">Gifting</div>
        <div className="nav-item">Concern</div>
        <div className="nav-item">Ingredients</div>
      </div>
    </header>
  );
}

export default Navbar;