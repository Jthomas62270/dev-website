import React, { useEffect, useState, useRef } from 'react'
import './PhotoCarousel.css'

const PhotoCarousel = ({photos}) => {

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0); 
    const containerRef = useRef(null); 

    useEffect(() => {
        const intervalId = setInterval(() => { 
            setCurrentPhotoIndex((prevIndex) => (prevIndex + 3) % photos.length); 
            }, 3000); 

            return () => clearInterval(intervalId); 
        },[photos.length]);

    useEffect(() => { 
        if(containerRef.current) {
            const width = containerRef.current.offsetWidth/photos.length; 
            const newTransform = width * currentPhotoIndex; 
            containerRef.current.style.transform = `translateX(${newTransform}px`;
        }
    },[currentPhotoIndex, photos.length]);

  return (
    <div className="photo-carousel">
      <div
        ref={containerRef}
        className='photo-container'
        style={{ 
          width: `${100 * photos.length}%`,
        }}
      >
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            className='photo'
            alt={`Carousel ${index}`}
            style={{ width: `${100 / photos.length}%`, height: 'auto'}}
          />
        ))}
      </div>
    </div>
  );
}; 

export default PhotoCarousel