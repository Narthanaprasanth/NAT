import React from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const shopLinks = [
    "Trending 🔥", "Summer Care", "Hair", "Face", "Body", 
    "Eyes & Lips", "Baby", "Hair Fall", "Men", "Gifting ✨", 
    "Concern", "Ingredients"
  ];

  const usefulLinks = [
    "FAQs", "Legal", "Order Tracking", "Account", 
    "Blogs", "Careers", "In News", "Bulk Order"
  ];

  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* Column 1: Brand About Block */}
        <div className="footer-column brand-info">
          <h3 className="footer-logo">Nat Habit</h3>
          <p className="tagline-highlight">Breathe life, bring your beauty alive with Fresh Ayurveda.</p>
          <p className="about-text">
            Ayurveda triggers deep cell activation, when harnessed fresh & put through nutrition enhancing procedures. 
            We bring to you 100% natural, ultra-potent beauty & wellness products, made with high grade herbs, nuts, 
            grains, milk, fruits, oils, & more, with zero chemicals & preservatives.
          </p>
          <p className="about-text-bold">
            Nat Habit - Breathe Life into Your Beauty
          </p>
        </div>

        {/* Column 2: Shop Menu links */}
        <div className="footer-column">
          <h4 className="column-title">SHOP FOR</h4>
          <ul className="footer-links-list">
            {shopLinks.map((link, index) => (
              <li key={index}><a href={`#${link.toLowerCase()}`}>{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 3: Resource Links */}
        <div className="footer-column">
          <h4 className="column-title">USEFUL LINKS</h4>
          <ul className="footer-links-list">
            {usefulLinks.map((link, index) => (
              <li key={index}><a href={`#${link.toLowerCase().replace(" ", "-")}`}>{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Matrix & Address */}
        <div className="footer-column contact-block">
          <h4 className="column-title">CONTACT US</h4>
          
          <div className="contact-item">
            <FaWhatsapp className="c-icon whatsapp" />
            <div>
              <span className="contact-label">WhatsApp:</span>
              <a href="https://wa.me/918527000777" className="contact-val">+91 8527 000 777</a>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope className="c-icon" />
            <div>
              <span className="contact-label">Collaboration:</span>
              <a href="mailto:collab@nathabit.in" className="contact-val">collab@nathabit.in</a>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope className="c-icon" />
            <div>
              <span className="contact-label">Bulk/Corporate:</span>
              <a href="mailto:corporategifting@nathabit.in" className="contact-val">corporategifting@nathabit.in</a>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope className="c-icon" />
            <div>
              <span className="contact-label">Other Queries:</span>
              <a href="mailto:care@nathabit.in" className="contact-val">care@nathabit.in</a>
            </div>
          </div>

          <div className="contact-item address-item">
            <FaMapMarkerAlt className="c-icon map" />
            <div>
              <h5 className="address-title">OFFICE ADDRESS</h5>
              <p className="address-text">
                GP-26, Sector 18, Gurugram, <br />
                Haryana - 122015, India
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="footer-copyright-bar">
        <p>© {new Date().getFullYear()} nathabit.in. All Rights Reserved.</p>
      </div>
    </footer>
  );
}