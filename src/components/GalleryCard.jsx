import React from 'react';
import '../App.css'; 
// import slideshow1 from '../assets/Slideshow1.jpeg';
import slideshow2 from '../assets/Slideshow2.jpeg';
import slideshow3 from '../assets/Slideshow3.jpeg';
import slideshow4 from '../assets/Slideshow4.jpeg';
import slideshow5 from '../assets/Slideshow5.jpeg';
import slideshow6 from '../assets/Slideshow6.jpeg';
import slideshow7 from '../assets/Slideshow7.jpeg';
import slideshow8 from '../assets/Slideshow8.jpeg';
// import slideshow9 from '../assets/Slideshow9.jpeg';
// import slideshow10 from '../assets/Slideshow10.jpeg';
import slideshow11 from '../assets/Slideshow11.jpeg';
const GalleryCard = () => {
  const images = [
    // slideshow1,
    slideshow2,
    slideshow3,
    slideshow4,
    slideshow5,
    slideshow6,
    slideshow7,
    slideshow8,
    // slideshow9,
    // slideshow10,
    slideshow11
  ];
  return (
    <>
    <h1 className='text-2xl text-white text-center font-bold mt-5'>Some Lovely Memories</h1>
    <div className="flex flex-wrap justify-center gap-7 justify-items-stretch content-cente items-stretch place-content-between cursor-pointer ">
      {images.map((image, index) => (
        <div key={index} className="m-4 w-64 shadow-xl shadow-slate-400 border-rounded rounded-lg hover:shadow-green-700 hover:scale-150 hover:aspect-video">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={image} alt={`Image ${index + 1}`} className="w-full h-48 aspect-square" />
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default GalleryCard;
