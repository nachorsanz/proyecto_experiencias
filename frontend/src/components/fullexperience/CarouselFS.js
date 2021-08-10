import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import gastro from '../../assets/gastroCategory.jpg';
// import aqua from '../../assets/aquaCategory.jpeg';
// import spa from '../../assets/spaCategory.jpg';
// import pareja from '../../assets/parejaCategory.jpg';
// import motor from '../../assets/motorCategory.jpg';
// import aventure from '../../assets/routesCategory.jpeg';
// import fly from '../../assets/globoCategory.jpg';
// import { useEffect, useState } from 'react';

function CarouselFS({ photos }) {
  console.log('foto', photos);

  return (
    <>
      <Carousel 
        dynamicHeight={true} 
        emulateTouch={true} 
        infiniteLoop={true} 
        showArrows={false} 
        showStatus={false} 
        showIndicators={false} 
        className="carouselElements"
        >
          {photos.photos &&
            photos.photos.map((photo) => (
              <div key={photo.url}>
                <img
                  src={`http://localhost:8080/uploads/${photo.url}`}
                  alt="category"
                  height='400px'
                />
              </div>
            ))}
      </Carousel>
    </>
  );
}
export default CarouselFS;
