import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Container,
  List,
  ListItem,
  ListItemText,
  Toolbar
} from "@mui/material";
import Logo from "../../images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //---- Handle SideBar Menu Click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // ------Define Hearder/navigation items
  const Pages = [
    { label: "Home", to: "/" },
    { label: "Menu", to: "/menu" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  // ------Create SideBar Nevigation for Items
  const navigationLinks = Pages.map((item, index) => (
    <ListItem
      key={index}
      component={NavLink}
      to={item.to}
      onClick={handleDrawerToggle}
    >
      <ListItemText primary={item.label} />
    </ListItem>
  ));

  //-------SideBar Menu Drawer-For Mobile/sm
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img src={Logo} alt="logo" height={"70"} width="200" />
      <Divider />
      {/* ---------for hr/vr Line---------- */}
      <List className="mobile-navigation">{navigationLinks}</List>
    </Box>
  );

  return (
    <>
      <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
        {/* ------------------------TopBar/Header --------------------------> */}
        <AppBar component={"nav"}>
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Box color={"goldenrod"} component="div" sx={{ flexGrow: 1 }}>
              <img src={Logo} alt="logo" height={"70"} width="250" />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <List className="navigation-menu">{navigationLinks}</List>
            </Box>
          </Toolbar>
        </AppBar>

        {/* ------------------------Side Bar/For Sm Screen --------------------------> */}
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Container>
    </>
  );
};

export default Header;
