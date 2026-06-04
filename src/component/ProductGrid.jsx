import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";

const productsData = [
  {
    id: 1,
    tag: "NEW LAUNCH",
    image: "/images/shampoo.png", 
    title: "Anti-Dandruff Neem Beracyl™ Navdha Shampoo",
    subtitle: "Clinically Tested 99.9% Dandruff Kill | Advanced FlakeZero™ Technology",
    rating: 4.6,
    reviews: 225,
    variants: [
      { id: "v1", label: "250ml x Pack of 1", price: 445, oldPrice: 525, discount: "15% off", perUnit: "₹1.78/ml" },
      { id: "v2", label: "250 x Pack of 2", price: 776, oldPrice: 944, discount: "18% off", perUnit: "₹1.55/ml" }
    ]
  },
  {
    id: 2,
    tag: "NEW LAUNCH",
    image: "/images/facewash.png",
    title: "Anti-Acne Neem Berbamyrisin™ Tikta Face Wash",
    subtitle: "Clinically Tested 99% Acne Kill | Advanced 6D ClariAcne™ Technology",
    rating: 4.8,
    reviews: 144,
    variants: [
      { id: "v3", label: "100g x Pack of 1", price: 284, oldPrice: 335, discount: "15% off", perUnit: "₹2.84/g" },
      { id: "v4", label: "100g x Pack of 2", price: 551, oldPrice: 670, discount: "18% off", perUnit: "₹2.75/g" }
    ]
  },
  {
    id: 3,
    tag: "NEW LAUNCH",
    image: "/images/rosemary.png",
    title: "Rosemary Hair Jal",
    subtitle: "100% Pure Rosmarinic Complex | Growth & Hairfall Control",
    rating: 4.6,
    reviews: 78,
    variants: [
      { id: "v5", label: "200ml x 1", price: 339, oldPrice: 400, discount: "15% off", perUnit: "₹1.70/ml" }
    ]
  },
  {
    id: 4,
    tag: "NEW LAUNCH",
    image: "/images/hibiscus.png",
    title: "Hibiscus Hair Jal",
    subtitle: "100% Pure Quercetin Complex | Growth & Damage Repair",
    rating: 4.6,
    reviews: 76,
    variants: [
      { id: "v6", label: "200ml x 1", price: 339, oldPrice: 400, discount: "15% off", perUnit: "₹1.70/ml" }
    ]
  }
];

function ProductCard({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  return (
    <div className="product-card">
      {/* Image Container */}
      <div className="image-container">
        {product.tag && <span className="badge">{product.tag}</span>}
        <img src={product.image} alt={product.title} className="product-image" />
      </div>

      {/* Product Information */}
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-subtitle">{product.subtitle}</p>

        {/* Ratings block */}
        <div className="rating-container">
          <div className="stars">{"★".repeat(Math.floor(product.rating))}</div>
          <span className="rating-value">{product.rating}</span>
          <span className="reviews-count">({product.reviews})</span>
        </div>

        {/* Variant Selectors (Boxes) */}
        <div className={`variants-grid ${product.variants.length === 1 ? "single-variant" : ""}`}>
          {product.variants.map((v) => (
            <div
              key={v.id}
              className={`variant-box ${selectedVariant.id === v.id ? "selected" : ""}`}
              onClick={() => setSelectedVariant(v)}
            >
              <div className="discount-tag">{v.discount}</div>
              <div className="variant-label">{v.label}</div>
              <div className="price-row">
                <span className="current-price">₹{v.price}</span>
                <span className="old-price">₹{v.oldPrice}</span>
              </div>
              <div className="per-unit">{v.perUnit}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Interactive Actions */}
      <div className="card-footer">
        <button className="wishlist-btn" aria-label="Add to wishlist">
          <FiHeart />
        </button>
        <button className="add-to-cart-btn">+ ADD</button>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section className="grid-container">
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}