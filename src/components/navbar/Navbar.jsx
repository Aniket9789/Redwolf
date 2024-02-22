import * as React from "react";
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
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../../images/logo.png";
import Hero from "../hero_section/HeroSection";
import { Link } from "react-router-dom";
import HeroSub from "../hero_section/HeroSub";
import Footer from "../footer/Footer";
import HeroSuper from "../hero_section/HeroSuper";
import CardSection from "../hero_section/CardSection";

const pages = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Product", url: "/product" },
  { name: "Contact Us", url: "/contact" },
  { name: "Login", url: "https://portal.tcopsztpro.in/" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link to={"/"}>
                {" "}
                <img src={logo} className="w-[35%] h-auto" alt="logo" />
              </Link>
            </Typography>

            {/* mobile device */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to={page.url}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Link to={page.url}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;



// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import { Link } from "react-router-dom";
// import logo from "../../images/logo.png";

// const pages = [
//   { name: "Home", url: "/" },
//   { name: "About", url: "/about" },
//   { name: "Product", url: "/product" },
//   { name: "Contact Us", url: "/contact" },
//   { name: "Login", url: "https://portal.tcopsztpro.in/" },
// ];

// function Navbar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar disableGutters>
//         <Typography
//           variant="h6"
//           noWrap
//           component="a"
//           href="#app-bar-with-responsive-menu"
//           sx={{
//             mr: 2,
//             display: { md: "flex" },
//             fontFamily: "monospace",
//             fontWeight: 700,
//             letterSpacing: ".3rem",
//             color: "inherit",
//             textDecoration: "none",
//           }}
//         >
//           <Link to={"/"}>
//             {" "}
//             <img src={logo} className="w-[35%] h-auto" alt="logo" />
//           </Link>
//         </Typography>

//         {/* mobile device */}
//         <Box
//           sx={{
//             flexGrow: 1,
//             display: { xs: "flex", md: "none" },
//             justifyContent: "flex-end",
//           }}
//         >
//           <IconButton
//             size="large"
//             aria-label="account of current user"
//             aria-controls="menu-appbar"
//             aria-haspopup="true"
//             onClick={handleOpenNavMenu}
//             color="inherit"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorElNav}
//             anchorOrigin={{
//               vertical: "bottom",
//               horizontal: "left",
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "left",
//             }}
//             open={Boolean(anchorElNav)}
//             onClose={handleCloseNavMenu}
//             sx={{
//               display: { xs: "block", md: "none" },
//             }}
//           >
//             {pages.map((page) => (
//               <MenuItem key={page} onClick={handleCloseNavMenu}>
//                 <Link to={page.url}>
//                   <Typography textAlign="center">{page.name}</Typography>
//                 </Link>
//               </MenuItem>
//             ))}
//           </Menu>
//         </Box>

//         <Box
//           sx={{
//             flexGrow: 1,
//             display: { xs: "none", md: "flex" },
//             justifyContent: "flex-end",
//           }}
//         >
//           {pages.map((page) => (
//             <Link to={page.url} key={page.url}>
//               <Button
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {page.name}
//               </Button>
//             </Link>
//           ))}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;
