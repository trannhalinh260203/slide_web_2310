import React, { useState } from 'react';
import './Slide.css'; // Đảm bảo đường dẫn đúng

const Slide = () => {
  const [index, setIndex] = useState(0);
  const maxImages = 1000;
  const imageUrl = `https://picsum.photos/300/200?image=${index}`;

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % maxImages);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const goToStart = () => {
    setIndex(0);
  };

  return (
    <div className="slideshow-container">
      <img src={imageUrl} alt={`Slide ${index}`} />
      <div className="button-container">
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
        <button onClick={goToStart}>Back to Start</button>
      </div>
    </div>
  );
};

export default Slide;
