import React, { useState, useEffect } from 'react';
import slideshow1 from '../assets/Slideshow1.jpeg';
import slideshow2 from '../assets/Slideshow2.jpeg';
const Gallery = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (viewportWidth <= 760) {
      setIndex(1);
    } else {
      setIndex(0);
    }
  }, [viewportWidth]);
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-200">
      <img
        src={index === 0 ? slideshow1 : slideshow2}
        alt={`Slide ${index + 1}`}
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
      />
    </div>
  );
};
export default Gallery;
