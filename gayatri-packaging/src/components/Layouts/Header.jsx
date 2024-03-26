import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, Drawer, List, ListItem, ListItemText, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import './header.css'

const Header = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("");

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <AppBar position="static" sx={{ background: "#89CFF0", color: "black" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={handleDrawerClose}
              >
                <List>
                  <ListItem
                    component={Link}
                    to="/home"
                    onClick={() => {
                      handleDrawerClose();
                      handleLinkClick("/home");
                    }}
                    className={activeLink === "/home" ? "active" : ""}
                  >
                    <ListItemText>HOME</ListItemText>
                  </ListItem>
                  <ListItem
                    component={Link}
                    to="/about"
                    onClick={() => {
                      handleDrawerClose();
                      handleLinkClick("/about");
                    }}
                    className={activeLink === "/about" ? "active" : ""}
                  >
                    <ListItemText>ABOUT</ListItemText>
                  </ListItem>
                  <ListItem
                    component={Link}
                    to="/quality"
                    onClick={() => {
                      handleDrawerClose();
                      handleLinkClick("/quality");
                    }}
                    className={activeLink === "/quality" ? "active" : ""}
                  >
                    <ListItemText>QUALITY</ListItemText>
                  </ListItem>
                  <ListItem
                    component={Link}
                    to="/products"
                    onClick={() => {
                      handleDrawerClose();
                      handleLinkClick("/products");
                    }}
                    className={activeLink === "/products" ? "active" : ""}
                  >
                    <ListItemText>PRODUCTS</ListItemText>
                  </ListItem>
                  <ListItem
                    component={Link}
                    to="/infrastructure"
                    onClick={() => {
                      handleDrawerClose();
                      handleLinkClick("/infrastructure");
                    }}
                    className={activeLink === "/infrastructure" ? "active" : ""}
                  >
                    <ListItemText>INFRASTRUCTURE</ListItemText>
                  </ListItem>
                  <ListItem
                    component={Link}
                    to="/gallery"
                    onClick={() => {
                      handleDrawerClose();
                      handleLinkClick("/gallery");
                    }}
                    className={activeLink === "/gallery" ? "active" : ""}
                  >
                    <ListItemText>GALLERY</ListItemText>
                  </ListItem>
                  <ListItem
                    component={Link}
                    to="/contact"
                    onClick={() => {
                      handleDrawerClose();
                      handleLinkClick("/contact");
                    }}
                    className={activeLink === "/contact" ? "active" : ""}
                  >
                    <ListItemText>CONTACT</ListItemText>
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <>
              <Typography
                variant="h6"
                to="/"
                sx={{
                  flexGrow: 1,
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: "bold",
                  mr: 3,
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      // marginLeft: 2,
                      fontSize: "2rem",
                      fontFamily: "Georgia, serif",
                      // color: "#D35400",
                      fontWeight: "bold"
                    }}
                  >
                    GP
                  </Typography>
                </div>
              </Typography>

              <Button
                component={Link}
                to="/home"
                color="inherit"
                sx={{ fontSize: "1rem", mr: 5 }}
                className={activeLink === "/home" ? "active" : ""}
                onClick={() => handleLinkClick("/home")}
              >
                HOME
              </Button>
              <Button
                component={Link}
                to="/about"
                color="inherit"
                sx={{ fontSize: "1rem", mr: 5 }}
                className={activeLink === "/about" ? "active" : ""}
                onClick={() => handleLinkClick("/about")}
              >
                ABOUT
              </Button>
              <Button
                component={Link}
                to="/quality"
                color="inherit"
                sx={{ fontSize: "1rem", mr: 5 }}
                className={activeLink === "/quality" ? "active" : ""}
                onClick={() => handleLinkClick("/quality")}
              >
                QUALITY
              </Button>
              <Button
                component={Link}
                to="/products"
                color="inherit"
                sx={{ fontSize: "1rem", mr: 5 }}
                className={activeLink === "/products" ? "active" : ""}
                onClick={() => handleLinkClick("/products")}
              >
                PRODUCTS
              </Button>
              <Button
                component={Link}
                to="/infrastructure"
                color="inherit"
                sx={{ fontSize: "1rem", mr: 5 }}
                className={activeLink === "/infrastructure" ? "active" : ""}
                onClick={() => handleLinkClick("/infrastructure")}
              >
                INFRASTRUCTURE
              </Button>
              <Button
                component={Link}
                to="/gallery"
                color="inherit"
                sx={{ fontSize: "1rem", mr: 5 }}
                className={activeLink === "/gallery" ? "active" : ""}
                onClick={() => handleLinkClick("/gallery")}
              >
                GALLERY
              </Button>
              <Button
                component={Link}
                to="/contact"
                color="inherit"
                sx={{ fontSize: "1rem", mr: 5 }}
                className={activeLink === "/contact" ? "active" : ""}
                onClick={() => handleLinkClick("/contact")}
              >
                CONTACT
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
