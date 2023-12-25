import React, { useState } from "react";
import "./Wishlist.css"; // Import your CSS file

const Wishlist = () => {
  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    setIsRed(!isRed);
  };

  return (
    <div
      className={`wishlist-text ${isRed ? "red" : ""}`}
      onClick={handleClick}
    >
      Wishlist
    </div>
  );
};

export default Wishlist;
