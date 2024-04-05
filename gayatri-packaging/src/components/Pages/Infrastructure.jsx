import { Grid, Typography } from '@mui/material';
import React, { useState, useEffect, useMemo } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Infrastructure = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = useMemo(() => [
    {
      src: '/Assets/silder1.png',
      alt: 'Slide 1',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
      src: '/Assets/slider2.png',
      alt: 'Slide 2',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
      src: '/Assets/slider3.jpg',
      alt: 'Slide 3',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
  ], []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1800);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '550px'
      }}>
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }} />
        <div style={{
          position: 'absolute',
          bottom: 0, width: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          padding: '10px',
          textAlign: 'center'
        }}>
          <p>{images[currentImageIndex].text}</p>
        </div>
      </div>
      {/* second section */}
      <Grid index xs={12} sx={{ marginTop: "2rem", marginBottom: "2rem", }}>
        <Typography sx={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "2rem" }}>
          Why Gayatri ?
        </Typography>
        <Typography sx={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magni earum sunt delectus quae impedit quia accusamus! Enim, corrupti neque?
          Gayatri Packaging is committed to designing, manufacturing and selling high quality products with utmost consistency. To ensure that our products meet our customers' requirements, we devote ourselves:
        </Typography>
        <Typography sx={{ marginBottom: "0.7rem" }}>
          <ArrowForwardIosIcon sx={{ marginRight: '0.5rem', fontSize: "1rem" }} />
          To exceed industrial and performance standards on the international platform
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, earum nam nobis reiciendis rem ea! 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quae qui suscipit quam tempora cum atque, fugiat animi eius. Quisquam.
        </Typography>
        <Typography sx={{ marginBottom: "0.7rem" }}>
          <ArrowForwardIosIcon sx={{ marginRight: '0.5rem', fontSize: "1rem" }} />
          To employ a workforce that shares the same commitment to quality
          dolor sit amet consectetur adipisicing elit. Atque, earum nam nobis reiciendis rem ea!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quae qui suscipit quam tempora cum atque, fugiat animi eius. Quisquam.
        </Typography>
        <Typography sx={{ marginBottom: "0.7rem" }}>
          <ArrowForwardIosIcon sx={{ marginRight: '0.5rem', fontSize: "1rem" }} />
          To ensure continual improvement of processes and systems
          dolor sit amet consectetur adipisicing elit. Atque, earum nam nobis reiciendis rem ea! Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Dolore quae qui suscipit quam tempora cum atque, fugiat animi eius. Quisquam.
        </Typography>
        <Typography sx={{ marginBottom: "0.7rem" }}>
          <ArrowForwardIosIcon sx={{ marginRight: '0.5rem', fontSize: "1rem" }} />
          To excel in research and development
          dolor sit amet consectetur adipisicing elit. Atque, earum nam nobis reiciendis rem ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Dolore quae qui suscipit quam tempora cum atque, fugiat animi eius. Quisquam.
        </Typography>
      </Grid>

        {/* third section */}
        <Grid container spacing={2} sx={{backgroundColor: "#F0F8FF"}}>
      <Grid item xs={12} md={4} >
      <img
            src="/Assets/quality.jpgn"
            alt="add compays complete img"
          />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography sx={{fontWeight: "bold", marginBottom: "0.5rem" }}>
        Our People are our Strength!
        </Typography>
        <Typography sx={{marginBottom: "2rem"}}>
        Our Human Resources are amongst the best trained and skilled in the industry. Commitment, team-work and dedication to quality by our workforce have reflected on our organization’s growth and reputation in the industry.
        </Typography>

        <Typography sx={{fontWeight: "bold", marginBottom: "1rem"}}>
        In line with our philosophy, at Gayatri we :
        </Typography>
        <Typography sx={{ marginBottom: "0.7rem" }}>
            <ArrowForwardIosIcon sx={{ marginRight: '0.5rem', fontSize: "1rem" }} />
            Continuously upgrade our employee skill sets by on site and off site training backed by an inclusive work environment.
          </Typography>
          <Typography sx={{ marginBottom: "0.7rem" }}>
            <ArrowForwardIosIcon sx={{ marginRight: '0.5rem', fontSize: "1rem"}} />
            Encourage and support Innovation through an excellent rewards and recognition mechanism.
          </Typography>
          <Typography sx={{ marginBottom: "2rem" }}>
            <ArrowForwardIosIcon sx={{ marginRight: '0.5rem', fontSize: "1rem" }} /> 
            Maintain all standards and government regulations on Safety, Health and Environment at all manufacturing locations.
          </Typography>
      </Grid>
      </Grid>
    </>
  );
};

export default Infrastructure;
