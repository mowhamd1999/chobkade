import { GrNext } from "react-icons/gr";
import { MdArrowBackIos } from "react-icons/md";
import React, { useState } from "react";
import "./Swiper.css";

import image1 from "./../../assets/img/1.jpg";
import image2 from "./../../assets/img/1.jpg";
import image3 from "./../../assets/img/1.jpg";

// const images = [image1, image2, image3];
const images = [
  {
    src: image1,
    description:
      '"مبلمان فضای باز که خریدیم برای پاسیو ما عالی است. راحت، مقاوم در برابر آب و هوا و ظاهر فوق‌العاده‌ای دارد. تجربه خرید بسیار روان بود و کارکنان بسیار آگاه و دوستانه بودند."',
  },
  {
    src: image2,
    description:
      '"مبلمان فضای باز که خریدیم برای پاسیو ما عالی است. راحت، مقاوم در برابر آب و هوا و ظاهر فوق‌العاده‌ای دارد. تجربه خرید بسیار روان بود و کارکنان بسیار آگاه و دوستانه بودند."',
  },
  { src: image3, description: "'مبلمان فضای باز که خریدیم برای پاسیو ما عالی است. راحت، مقاوم در برابر آب و هوا و ظاهر فوق‌العاده‌ای دارد. تجربه خرید بسیار روان بود و کارکنان بسیار آگاه و دوستانه بودند.'" },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
  
    <div className="slider-container">
      <button className="slider-button" onClick={prevImage}>
      <MdArrowBackIos />
      </button>
      <div className="slider">
        {images.map((image, index) => {
          let position = "hidden";
          let opacity = 0.5;
          if (index === currentIndex) {
            position = "active";
            opacity = 1;
          } else if (
            index ===
            (currentIndex - 1 + images.length) % images.length
          ) {
            position = "left";
          } else if (index === (currentIndex + 1) % images.length) {
            position = "right";
          }
          return (
            <div
              key={index}
              className={`slider-item ${position}`}
              style={{ opacity }}
            >
              <div className="slider-item">
                <img
                  src={image.src}
                  alt={`Slide ${index}`}
                  className="slider-image"
                />
                <div className="slider-description">{image.description}</div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="slider-button" onClick={nextImage}>
        <GrNext />
      </button>
    </div>
  );
}
