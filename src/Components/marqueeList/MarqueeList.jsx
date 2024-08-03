import React, { useEffect } from "react";
import "./MarqueeList.css";
import { Link } from "react-router-dom";
const MarqueeList = () => {
  useEffect(() => {
    const list = document.querySelector(".marquee-list");
    const clone = list.innerHTML;
    list.innerHTML += clone;
  }, []);
  return (
    <div className="marquee-container">
      <div className="marquee-list">
        <Link to="/products" className="marquee_link">
          <div className="marquee-item">مشاهده محصولات بیشتر</div>
        </Link>
        <Link to='/about-us' className="marquee_link" >
          <div className="marquee-item">درباره چوبکده</div>
        </Link>
      </div>
    </div>
  );
};

export default MarqueeList;
