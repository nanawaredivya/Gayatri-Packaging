import React from 'react';
import { Grid, Typography } from '@mui/material';
import './Gallery.css'; // Import CSS file for styling

const Gallery = () => {
  // Array of image URLs
  const imageUrls = [
    './Assets/client1.jpg',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ];

  return (
    <>
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#007FFF",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}>
        GALLERY
      </Typography>
      <Grid container spacing={2} className="gallery-container" >
        {imageUrls.map((url, index) => (
          <Grid key={index} item xs={6} sm={3} >
            <div className="image-container">
              <img src={url} alt={`ImageUrl ${index + 1}`} className="gallery-image" />
              <div className="overlay">
                <div className="overlay-text"></div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Gallery;
