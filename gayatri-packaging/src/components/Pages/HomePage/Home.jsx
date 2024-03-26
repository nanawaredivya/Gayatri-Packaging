import React from 'react'
import ImageSlider from './ImageSlider'
import { Grid, Typography } from '@mui/material'

const Home = () => {
  return (
    <>
      <ImageSlider/>
      <Grid item xs={12} md={4}>
      <Typography variant="body1">
        This is a short info section. You can add any relevant information here.
      </Typography>
    </Grid>
    </>
  )
}

export default Home