import React, { useState, useEffect } from 'react';
import slideshow1 from '../assets/Slideshow1.jpeg';
import slideshow2 from '../assets/Slideshow2.jpeg';
const Slideshow = ({ interval }) => {
  const images = [slideshow1, slideshow2];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [images, interval]);
  const goToNextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const goToPrevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-200">
      <div className="flex items-center justify-center w-full h-full absolute">
        <button
          className="absolute left-0 z-100 w-10 h-10 bg-black bg-opacity-50 text-white flex items-center justify-center ml-2"
          onClick={goToPrevSlide}
        >
          &lt;
        </button>
        <div className="flex flex-1 overflow-hidden">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              alt={`Slide ${i + 1}`}
              className={`flex-shrink-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <button
          className="absolute right-0 z-10 w-10 h-10 bg-black bg-opacity-50 text-white flex items-center justify-center mr-2"
          onClick={goToNextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default function SlideImages() {
  return (
    <div className=" bg-cover bg-slate-300">
      <Slideshow interval={3000} />
    </div>
  );
}
