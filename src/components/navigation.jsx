import slideshow1 from '../assets/Slideshow1.jpeg';
import React, { useState, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import slideshow2 from '../assets/Slideshow2.jpeg';
const pages = ["Home", "Say Happy Birthday", "RealTimeData", "Memories","Contact Me","FAQ"];
const settings = ["HAPPY BIRTHDAY AADARSH","Created by AASHISH KUMAR SINGH"];
export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
const [goToSection,setgotosection]=useState(null);
  const footerRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const galleryRef = useRef(null);
  const faqRef = useRef(null);
  const sayHappyBirthdayRef = useRef(null);
  const realTimeDataRef = useRef(null);
  const memoriesRef = useRef(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handlenavigation = (nav) => {
    if (nav === 'Home') {     
setgotosection('#Home');
    } else if (nav === 'RealTimeData') {
      setgotosection("#Realdata")
    } else if (nav === 'Gallery') {
      setgotosection('#GalleryCard')
    } else if (nav === 'Say Happy Birthday'||nav==='HAPPY BIRTHDAY AADARSH') {
      setgotosection('#Happy')
    } else if (nav === 'FAQ') {
      setgotosection('#FaqCard')
    } else if (nav === 'Footer') {
      setgotosection('#Footer')
    } else if (nav === 'Contact Me') {
      setgotosection('#Contact')
    } else if (nav === 'Memories') {
      setgotosection('#GalleryCard')
    }
    else if(nav === 'Created by AASHISH KUMAR SINGH'){
      alert("Thankyou to visit this Website!");
    }
    else{
      const h=0;
    }
  };
  return (
    <AppBar className=' select-none'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 600,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
            className=' skew-x-3'
          >
            HAPPY BIRTHDAY AADARSH
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
             
            >
              {pages.map((page) => (
                <Button
                key={page}
                onClick={() => handlenavigation(page)}
                sx={{ my: 2, color: "black", display: "block" }}
                href={goToSection}
              >
                {page}
              </Button>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 1,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 600,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Happy B'Day
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
            className="float-right mx-4"
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlenavigation(page)}
                sx={{ my: 2, color: "white", display: "block" }}
                href={goToSection}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="info">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src={slideshow1} className='hover:z-40 shadow-2xl relative  hover:scale-150' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Button
                key={setting}
                onClick={() => handlenavigation(setting)}
                sx={{ my: 2, color: "black", display: "block" }}
                href={goToSection}
              >
                {setting}
              </Button>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

