import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Client = () => {
  const imageUrls = [
    "Assets/client1.jpg",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  return (
    <Box textAlign="center" my={4}>
      <Typography variant="h4" gutterBottom>
        CLIENTS
      </Typography>
      <Typography variant="body1" paragraph>
        Our clients come from a range of industrial, trading, and gifting sectors. We believe this is a <br />
        testimony to our ability to maintain the highest quality standards and the importance we put on<br />
        establishing a rewarding working relationship with them.
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {imageUrls.map((url, index) => (
          <Grid item key={index}>
            <img
              src={url}
              alt={`Client ${index + 1}`}
              style={{ 
                width: "150px", 
                height: "150px", 
                objectFit: "cover", 
                borderRadius: "50%",
                border: "2px solid #007FFF",
               }}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Client;
