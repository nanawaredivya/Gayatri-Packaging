import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Quality = () => {
  return (
    <>
    <Typography
        sx={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#007FFF",
          marginTop: "1rem",
          marginBottom: "0.5rem",
          textAlign: 'center'
        }}>
        QUALITY
      </Typography>
    <Grid container>
      <Grid item xs={12} md={6} >
        <Box
          sx={{
            marginTop: "2rem"
          }}>
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#007FFF",
              marginTop: "2rem",
              marginBottom: "1rem"
            }}>
            Our Quality Commitment
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            Gayatri Packaging is committed to designing, manufacturing and selling high quality products with utmost consistency. To ensure that our products meet our customers' requirements, we devote ourselves:
          </Typography>
          <Typography sx={{ marginBottom: "0.7rem" }}>
            <ArrowForwardIosIcon sx={{ marginRight: '0.5rem', fontSize: "1rem" }} /> To exceed industrial and performance standards on the international platform
          </Typography>
          <Typography sx={{ marginBottom: "0.7rem" }}>
            <ArrowForwardIosIcon sx={{ marginRight: '0.5rem', fontSize: "1rem" }} />To employ a workforce that shares the same commitment to quality
          </Typography>
          <Typography sx={{ marginBottom: "0.7rem" }}>
            <ArrowForwardIosIcon sx={{ marginRight: '0.5rem', fontSize: "1rem" }} />To ensure continual improvement of processes and systems
          </Typography>
          <Typography sx={{ marginBottom: "0.7rem" }}>
            <ArrowForwardIosIcon sx={{ marginRight: '0.5rem', fontSize: "1rem" }} /> To excel in research and development
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box
          sx={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 1)',
            marginTop: "3rem",
            marginBottom: "3rem"
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
    </Grid>
    </>
  )
}

export default Quality