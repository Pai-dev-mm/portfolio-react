import { Box, IconButton, Typography } from "@mui/material";

import "../styles/headbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useRef, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const HeadBar = () => {
  const navBarRef = useRef<HTMLDivElement | null>(null);
  const [hashClass, setHashClass] = useState(false);

  const navClick = () => {
    if (navBarRef.current) {
      // Check if this logs the nav element
      navBarRef.current.classList.add("Blah");
      navBarRef.current.style.right = "0";
      setHashClass(navBarRef.current?.classList.contains("Blah"));
    }
  };

  const closeNav = () => {
    if (navBarRef.current) {
      // Check if this logs the nav element
      navBarRef.current.classList.remove("Blah");
      navBarRef.current.style.right = "-100rem";
      setHashClass(navBarRef.current?.classList.contains("Blah"));
    }
    console.log(hashClass);
  };

  useEffect(() => {
    if (navBarRef.current) {
      setHashClass(navBarRef.current?.classList.contains("Blah"));
    }
  }, []);

  return (
    <div
      id="main"
      style={{
        width: "100%",
        height: 60,
        backgroundColor: "#1B1A55",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        fontFamily: "syne",
        position: "sticky",
        top: 0,
        zIndex: 4,
        paddingLeft: 2,
        paddingRight: 2,
      }}
    >
      <Box
        sx={{
          width: "fit-content",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#f0f0f0", fontFamily: " Syne , sans-serif" }}
        >
          Pai Thet
        </Typography>
      </Box>

      <div id="nav" ref={navBarRef}>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={800}>
              Home
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={800}>
              Work
            </Link>
          </li>
          <li>
            <Link to="info" smooth={true} duration={800}>
              My Info
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={800}>
              Services
            </Link>
          </li>

          <li>
            <Link to="contact" smooth={true} duration={800}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>

      {hashClass ? (
        <IconButton
          sx={{
            width: 50,
            height: "100%",
            display: { xs: "flex", lg: "none" },
            alignItems: { xs: "center" },
            justifyContent: { xs: "center" },
            mr: 4,
            position: "relative",
            zIndex: 2,
          }}
          onClick={closeNav}
        >
          <CloseIcon sx={{ color: "#f0f0f0", fontSize: "30px" }} />
        </IconButton>
      ) : (
        <IconButton
          sx={{
            width: 50,
            height: "100%",
            display: { xs: "flex", lg: "none" },
            alignItems: { xs: "center" },
            justifyContent: { xs: "center" },
            mr: 4,
          }}
          onClick={navClick}
        >
          <MenuIcon sx={{ color: "#f0f0f0", fontSize: "30px" }} />
        </IconButton>
      )}
    </div>
  );
};

export default HeadBar;
