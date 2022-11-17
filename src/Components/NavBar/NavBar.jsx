import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button, Card, CardMedia, Link, ListItemText } from "@mui/material";
import { Link as Rlink, NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { Navigate, useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { authContext } from "../../Contexts/AuthenticContextProvider";
import LiveSearch from "../LiveSearch/LiveSearch";
import imagesed from "./medi/images.png";
import { cartContext } from "../../Contexts/CartContextProvider";

function NavBar() {
  // const { readComment, commentsArr } = useContext(commentcontext);
  // const [comment, setComment] = React.useState("");
  // const location = useLocation();
  const { cartCount } = React.useContext(cartContext);
  const location = useLocation();
  const { user, handleLogout } = React.useContext(authContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Профиль</MenuItem>
      {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Профиль</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, color: "white" }}>
      <AppBar
        sx={{
          height: "100px",

          backdropFilter: "blur(30px)",
          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
        }}
        position="fixed"
        color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          <CardMedia
            style={{ width: "5%", margin: "0 20px", borderRadius: "50px" }}
            component="img"
            // height="80"
            image={imagesed}
            alt="logo"
          />

          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              margin: "0 20px",
            }}></Typography> */}

          {user.email === "foolbull35@gmail.com" ? (
            <IconButton>
              <NavLink
                to="/add"
                style={{
                  borderRadius: "3px",
                  ml: "10px",
                  background: "rgba(255, 136, 0, 0.504)",
                  color: "white",
                  textDecoration: "none",
                }}
                className="link-nav">
                <Typography p="2px 10px">Adminchik</Typography>
              </NavLink>
            </IconButton>
          ) : (
            <Rlink className="link-span" to="/">
              {user.email ? user.email : <span>Не вошли</span>}
            </Rlink>
          )}

          <Box sx={{ flexGrow: 3 }} />
          <Box
            width="40%"
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}>
            <NavLink
              to="/"
              style={{
                borderRadius: "3px",
                background: "rgba(255, 136, 0, 0.504)",
                color: "white",
                textDecoration: "none",
              }}
              className="link-nav">
              <Typography p="2px 10px">BASHKY page</Typography>
            </NavLink>

            {location.pathname === "/list" ? (
              <span style={{ cursor: "pointer" }}>Каталог</span>
            ) : (
              <NavLink
                to="/servises"
                style={{
                  borderRadius: "3px",
                  background: "rgba(255, 136, 0, 0.504)",
                  color: "white",
                  textDecoration: "none",
                }}
                className="link-nav">
                <Typography p=" 2px 10px">Uslugalar</Typography>
              </NavLink>
            )}

            <NavLink
              to="/about"
              style={{
                borderRadius: "3px",
                background: "rgba(255, 136, 0, 0.504)",
                color: "white",
                textDecoration: "none",
              }}
              className="link-nav">
              <Typography p="2px 10px">About биз</Typography>
            </NavLink>
            <NavLink
              to="/contactus"
              style={{
                borderRadius: "3px",
                background: "rgba(255, 136, 0, 0.504)",
                color: "white",
                textDecoration: "none",
              }}
              className="link-nav">
              <Typography p="2px 10px">Contactы</Typography>
            </NavLink>
            <Link
              style={{
                borderRadius: "3px",
              }}
              className="link-nav"
              sx={{
                background: "rgba(255, 136, 0, 0.504)",
                color: "white",
                textDecoration: "none",
              }}>
              <Typography p="2px 10px">Recipes</Typography>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <LiveSearch /> */}

            <Rlink to="/cart">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="warning">
                <Badge badgeContent={cartCount} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Rlink>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="warning">
              <Badge badgeContent={1} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Button sx={{ color: "white" }} onClick={handleLogout}>
              LogOut
            </Button>
            <Rlink to="/auth">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit">
                <AccountCircle />
              </IconButton>
            </Rlink>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

export default NavBar;
