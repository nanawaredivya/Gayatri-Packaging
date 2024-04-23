import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

const Quality = () => {
  const [items] = useState([
    {
      image: "/Assets/client1.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum possimus consequatur rerum adipisci ullam error."
    },
    {
      image: "/Assets/client1.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum possimus consequatur rerum adipisci ullam error."
    },
    {
      image: "/Assets/client1.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum possimus consequatur rerum adipisci ullam error."
    },
    {
      image: "/Assets/client1.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum possimus consequatur rerum adipisci ullam error."
    },
    {
      image: "/Assets/client1.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum possimus consequatur rerum adipisci ullam error."
    },
    {
      image: "/Assets/client1.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum possimus consequatur rerum adipisci ullam error."
    },
    {
      image: "/Assets/client1.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum possimus consequatur rerum adipisci ullam error."
    },
    {
      image: "/Assets/client1.jpg",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum possimus consequatur rerum adipisci ullam error."
    },
  ]);

  return (
    <>
      <Typography
        sx={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#007FFF',
          marginTop: '1rem',
          marginBottom: '0.5rem',
          textAlign: 'center',
        }}
      >
        QUALITY
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={{ marginTop: '2rem' }}>
            <Typography
              sx={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#007FFF',
                marginTop: '2rem',
                marginBottom: '1rem',
              }}
            >
              Our Quality Commitment
            </Typography>
            <Typography 
            sx={{ 
              fontSize: '1.3rem', 
              marginBottom: '1rem' 
              }}>
              Gayatri Packaging is committed to designing, manufacturing, and selling high-quality products with utmost 
              consistency. To ensure that our products meet our customers' requirements, we devote ourselves:
            </Typography>
            <Typography sx={{ marginBottom: '0.7rem' }}>
              <ArrowForwardIosIcon sx={{ marginRight: '0.5rem', fontSize: '1rem' }} />
               To exceed industrial and performance standards on the international platform.
            </Typography>
            <Typography sx={{ marginBottom: '0.7rem' }}>
              <ArrowForwardIosIcon sx={{ marginRight: '0.5rem', fontSize: '1rem' }} /> 
              To employ a workforce that shares the same commitment to quality.
            </Typography>
            <Typography sx={{ marginBottom: '0.7rem' }}>
              <ArrowForwardIosIcon sx={{ marginRight: '0.5rem', fontSize: '1rem' }} /> 
              To ensure continual improvement of processes and systems.
            </Typography>
            <Typography sx={{ marginBottom: '0.7rem' }}>
              <ArrowForwardIosIcon sx={{ marginRight: '0.5rem', fontSize: '1rem' }} /> 
              To excel in research and development
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
              marginTop: '3rem',
              // marginBottom: '3rem',
            }}
          >
            <img
              src="/Assets/quality.jpg"
              alt="Product Name"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Grid>
        {/* Strengths */}
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ marginBottom: '1rem' }}>
            Strengths
          </Typography>
          <Typography sx={{ marginBottom: '1rem', fontSize: '1.3rem' }}>
            Gayatri Packaging stands out as a premier manufacturer of tin containers in the Indian market. By using
            premium raw materials, Gayatri enhances the durability and overall quality of its products. The skilled and
            dedicated workforce consistently delivers high-quality tin containers. Gayatri’s product range is both
            flexible and diverse, catering to a wide spectrum of customer needs.<br />
            Our principal strengths that make our products stand-out are as follows:
          </Typography>
          <Grid container spacing={3}>
            {items.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <img
                    src={item.image}
                    alt={`Item ${index + 1}`}
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                  <Typography sx={{ textAlign: 'center', marginTop: '0.5rem' }}>
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Quality;
