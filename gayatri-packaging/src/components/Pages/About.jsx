import { Card, CardContent, Grid, Typography, Grow } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={7}>
        <Typography variant="body1"
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#007FFF",
            marginTop: "3rem"
          }}>
          GAYATRI PACKAGING
        </Typography>
        <Typography
          sx={{
            fontSize: '1.5rem',
            marginBottom: "1rem",
            marginLeft: "1rem",
            fontFamily: 'cursive'
          }}>
          "Honestly guides action"
        </Typography>
        <Typography variant='body2'
          sx={{
            fontSize: '1.3rem',
          }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias odit expedita, nemo repellendus tenetur 
          minus animi ipsa ab beatae veritatis officiis tempora, ut ea est eos, aspernatur exercitationem repellat? 
          Illo adipisci iusto beatae tempore accusantium provident facere quasi accusamus nesciunt eligendi.
        </Typography>
        <Typography variant='body2'
          sx={{
            fontSize: '1.3rem',
            marginTop: "1rem",
            marginBottom: '3rem',
          }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias odit expedita, nemo repellendus tenetur 
          minus animi ipsa ab beatae veritatis officiis tempora, ut ea est eos, aspernatur exercitationem repellat? 
          Illo adipisci iusto beatae tempore accusantium provident facere quasi accusamus nesciunt eligendi.
        </Typography>
      </Grid>
      <Grid item xs={12} md={5}>

        <Grow in={true} timeout={1000}>
          <Card
            sx={{
              marginTop: "3rem",
              height: "10rem",
              width: "32rem",
              backgroundColor: "#1F75FE",
              textAlign: "center",
              color: 'white',
            }}>
            <CardContent>
              <Typography variant="body2" component="p" sx={{ fontSize: "1.2rem", marginTop: "1.5rem", }}>
                “Our commitment lies in consistently delivering high-quality products to our valued customers through best-in-class manufacturing practices.”
              </Typography>
            </CardContent>
          </Card>
        </Grow>
        <Grow in={true} timeout={1000} style={{ marginBottom: "2rem" }}>
          <Card sx={{
            marginTop: "2rem",
            height: "10rem",
            width: "32rem",
            backgroundColor: "#1F75FE",
            textAlign: "center",
            color: 'white',
          }}>
            <CardContent>
              <Typography variant="body2" component="p" sx={{ fontSize: "1.2rem", marginTop: "1.5rem", }}>
                “We prioritize continuous process improvements to enhance the quality and value of our offerings for our customers.”
              </Typography>
            </CardContent>
          </Card>
        </Grow>
      </Grid>
    </Grid>
  );
};

export default About;
