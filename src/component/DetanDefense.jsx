import React from "react";


const bundleProducts = [
  {
    id: 1,
    step: "FADE",
    image: "/images/ubtan-facewash.png", 
    title: "Brightening Ubtan Tikta Face Wash",
    price: 238,
    oldPrice: 317,
  },
  {
    id: 2,
    step: "EVEN",
    image: "/images/tamarind-lepa.png",
    title: "Fresh Tamarind Kasturi Detan Lepa Face Pack",
    price: 188,
    oldPrice: 250,
  },
  {
    id: 3,
    step: "PROTECT",
    image: "/images/malai-moisturiser.png",
    title: "48HR Malai Moisturiser - Pigmentation Control",
    price: 301,
    oldPrice: 401,
  },
];

export default function DetanDefense() {
  return (
    <section className="detan-section">
      <div className="detan-header">
        <h2 className="detan-title">Detan Defense</h2>
        <span className="detan-subtitle">Summer Care Essentials</span>
      </div>

      <div className="bundle-container">
        {bundleProducts.map((product, index) => (
          <React.Fragment key={product.id}>
            <div className="bundle-card-wrapper">
              <span className="step-tag">{product.step}</span>
              <div className="bundle-card">
                <div className="bundle-img-box">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="bundle-info">
                  <h4 className="bundle-product-title">{product.title}</h4>
                  <div className="bundle-price-row">
                    <span className="b-price">₹{product.price}</span>
                    <span className="b-old-price">₹{product.oldPrice}</span>
                  </div>
                </div>
              </div>
            </div>

            {index < bundleProducts.length - 1 && (
              <div className="plus-separator">+</div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="bundle-footer">
        <div className="total-pricing">
          <div className="pricing-line">
            <span className="total-now">₹727</span>
            <span className="total-was">₹968</span>
            <span className="bundle-discount">25% off</span>
          </div>
          <p className="savings-note">
            Saved additional <strong>₹241</strong> compared to when bought individually
          </p>
        </div>

        <button className="bundle-add-btn">+ ADD</button>
      </div>
    </section>
  );
}        