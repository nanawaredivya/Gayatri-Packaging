import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import './product.css';

const Product = ({ imageUrl, name }) => {
  return (
    <Grid item xs={12} md={4} className="fade-in box-shadow">
      <div style={{ textAlign: 'center' }}>
        <img src={imageUrl} alt={name}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '200px',
            objectFit: 'cover',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 1)',
          }} />
        <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          backgroundColor: "#F0F8FF",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}>
        {name}
        </Typography>
      </div>
    </Grid>
  );
};

const ProductPage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const products = [
    { imageUrl: '/Assets/slider3.jpg', name: 'Product 1' },
    { imageUrl: '/Assets/slider2.png', name: 'Product 2' },
    { imageUrl: '/Assets/silder1.png', name: 'Product 3' },
    { imageUrl: '/Assets/slider2.png', name: 'Product 2' },
    { imageUrl: '/Assets/slider3.jpg', name: 'Product 1' },
    { imageUrl: '/Assets/slider2.png', name: 'Product 2' },
    { imageUrl: '/Assets/slider3.jpg', name: 'Product 1' },
    { imageUrl: '/Assets/slider2.png', name: 'Product 2' },
    { imageUrl: '/Assets/silder1.png', name: 'Product 3' },
  ];

  return (
    <div>
      <Typography variant="h3" align="center" gutterBottom
      sx={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#007FFF",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}>
        OUR PRODUCTS
      </Typography>
      <Grid container spacing={10} justifyContent="center" className={animate ? 'fade-in' : ''}> {/* Add the fade-in class here */}
        {products.map((product, index) => (
          <Product key={index} imageUrl={product.imageUrl} name={product.name} />
        ))}
      </Grid>
    </div>
  );
};

export default ProductPage;
