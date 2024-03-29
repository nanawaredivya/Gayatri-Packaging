import React from "react";
import { AppBar, Toolbar, Typography, IconButton, useMediaQuery, Box, Grid } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";
import { Phone, Mail, LocationOn  } from '@mui/icons-material';

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <AppBar position="static" sx={{ background: "#333" }}>
      <Toolbar sx={{ justifyContent: "space-between", fontFamily: "sans-serif" }}>
        <Grid container spacing={isMobile ? 1 : 2}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="body2"
                sx={{
                  color: "white",
                  mr: isMobile ? 0 : 3,
                  fontWeight: "bold",
                  fontSize: "1.8rem"
                }}>
                Gayatri Packaging
              </Typography>
              <Typography variant="body2"
                sx={{
                  color: "white",
                  mr: isMobile ? 0 : 3,
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  marginBottom: "0.5rem"
                }}>
                Manufacturer of all Types of Tin Containers & Components
              </Typography>
              <Typography variant="body2"
                sx={{
                  color: "white",
                  mr: isMobile ? 0 : 3,
                  marginBottom: "0.5rem",
                  fontSize: "1.1rem",
                }}>
                <LocationOn sx={{ marginRight: 1 }} />
                Gat No. 215/1, Behind Rahul Petroleum, Khandala-Dhawadwadi Road,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 Khandala, Tal. Khandala, Dist. Satara 412 802.
              </Typography>
              <Typography variant="body2"
                sx={{
                  color: "white",
                  mr: isMobile ? 0 : 3,
                  marginBottom: "0.5rem",
                  fontSize: "1rem",
                }}>
                <Mail sx={{  marginRight: 1 }} />
                Email:  gayatripackagings@gmail.com
              </Typography>
              <Typography variant="body2"
                sx={{
                  color: "white",
                  mr: isMobile ? 0 : 3,
                  marginBottom: "0.5rem",
                  fontSize: "1rem",
                }}>
                 <Phone sx={{ marginRight: 1, }} />
                Phone:  +91 7248962818
              </Typography>

              {/* social site link */}
              <Box>
                <Typography variant="body2"
                  sx={{
                    color: "white",
                    mr: isMobile ? 0 : 3,
                    marginBottom: "0.5rem",
                    fontSize: "1.5rem",
                    fontWeight: "bold"
                  }}>
                  Follow US :
                </Typography>
                <IconButton
                  color="inherit"
                  href="https://www.facebook.com/example"
                  target="_blank"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://www.instagram.com/example"
                  target="_blank"
                >
                  <Instagram />
                </IconButton>

              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <iframe
                title="Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.858120931636!2d<YOUR-LONGITUDE>!3d<YOUR-LATITUDE>!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI1JzQ5LjciTiAwwrAzMic1My4wIlc!5e0!3m2!1sen!2suk!4v1633386129961!5m2!1sen!2suk"
                width="100%"
                height="300"
                style={{ border: 0, marginTop: "2rem" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ backgroundColor: "white", marginTop: "1rem", }} >
            <Typography variant="body1" sx={{ color: "black", backgroundColor: "white", textAlign: "center" }}>
              Copyrights © {new Date().getFullYear()} Gayatri Packaging. All Rights Reserved. Site designed by Divya Nanaware
            </Typography>
          </Grid>
        </Grid>

      </Toolbar>
    </AppBar>
  );
};

export default Footer;
