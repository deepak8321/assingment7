import React, { useState } from "react";
import "./Product.css"; // Import your CSS file

const Product = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleHover = () => {
    setIsButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setIsButtonVisible(false);
  };

  return (
    <div
      className="product-container"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      Product View
      {isButtonVisible && (
        <button className="view-product-button">View Product</button>
      )}
    </div>
  );
};

export default Product;
