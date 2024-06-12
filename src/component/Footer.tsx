import { Box, Typography } from "@mui/material";
import { Link, animateScroll as scroll } from "react-scroll";
import React from "react";
import "../styles/footer.scss";
import { ArrowUpward, ArrowUpwardTwoTone } from "@mui/icons-material";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "transparent", width: "100%" }} id="footer">
      <Box
        sx={{
          width: "100%",
          height: { xs: 200, lg: 100 },
          display: "flex",
          flexDirection: { xs: "column-reverse", lg: "row" },
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            width: "50%",

            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 15, color: "#dadadaab" }}>
            &#174; All Right Reserved By Pai Thet
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "80%", lg: "40%" },
            height: "50%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#info">Info</a>
            </li>
          </ul>

          <div
            className="arrowDiv"
            style={{
              width: "10%",

              display: "flex",
              alignItems: "center",
            }}
          >
            <Link to="main" smooth={true} duration={800} className="arrow">
              <ArrowUpwardTwoTone
                sx={{ color: "#dadada", fontWeight: "bold", cursor: "pointer" }}
              />
            </Link>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
