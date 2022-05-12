import React from "react";
import {
  AppBar,
  Typography,
  Container,
  Button,
  Box,
  Toolbar,
  Menu,
  IconButton,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar_() {
  const pages = [
    { key: "home", value: "Home" },
    { key: "about_us", value: "About Us" },
    { key: "inform_us", value: "Inform Us" },
    { key: "contact_us", value: "Contact" },
    { key: "feeds", value: "Feeds" },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#282F65" }}>
      <Container maxWidth="xl">
        {/* <img src={logo} alt="dome-logo" className="banner-logo" /> */}
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            CYBERDOME KOCHI
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
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
              }}>
              {pages.map((page) => (
                <MenuItem key={page.key}>
                  <Button href={`#${page.key}`} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.value}</Typography>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            CYBERDOME KOCHI
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
            }}>
            {pages.map((page) => (
              <Button
                variant="text"
                size="large"
                key={page.key}
                href={`#${page.key}`}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&:hover": {
                    opacity: 0.75,
                  },
                }}>
                <Typography variant="h7">{page.value}</Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar_;
