// import React, { useState, useEffect } from 'react';
// import { Grid, Card, CardMedia } from '@mui/material';

// const images = [
//   '/Assets/silder1.png',
//   '/Assets/slider2.png',
//   '/Assets/slider3.jpg',
//   // Add more image URLs as needed
// ];

// const ImageSlider = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(intervalId);
//   }, []); // Run effect only once when component mounts

//   return (
//     <Grid container>
//       <Grid item xs={12} md={8} lg={6}>
//         <Card sx={{ width: '200%', height: '500px', borderRadius: '10px', overflow: 'hidden' }}>
//           <CardMedia
//             component="img"
//             sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
//             image={images[currentImageIndex]}
//             alt={`Slide ${currentImageIndex}`}
//           />
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };

// export default ImageSlider;


import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "../../data/sliderData";
import "./Slider.css";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, );

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="slide" className="image" />
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <hr />
                  <button className="--btn --btn-primary">Get Started</button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;