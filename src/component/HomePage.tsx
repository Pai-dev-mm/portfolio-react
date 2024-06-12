import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import "../styles/homepage.scss";
import profile from "../asset/myProfile.png";
import arrow from "../asset/arrow.gif";
import { Link, animateScroll as scroll } from "react-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Animation } from "./Animation";

gsap.registerPlugin(ScrollTrigger);
const HomePage = () => {
  const left = useRef<HTMLDivElement | null>(null);
  const right = useRef<HTMLDivElement | null>(null);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#1B1A55",
        display: "flex",
        position: "relative",
      }}
      className="container"
      id="home"
    >
      {/* for left */}
      <Box
        ref={left}
        sx={{
          width: { xs: "100%", lg: "50%" },
          height: { xs: "50%", lg: "100%" },
          bgcolor: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
          transform: "translateX(-100px)",
        }}
      >
        <Box
          sx={{
            width: 350,
            height: 400,
            display: "flex",
            flexDirection: "column",

            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "inherit",
              fontWeight: "bold",
              width: "80%",
              color: "#f0f0f0",
            }}
          >
            Paing Thet Kyaw
          </Typography>
          <h1 className="webText">Web Developer</h1>
        </Box>
      </Box>
      <Animation
        divName={left}
        option={{ x: 0, opacity: 1, duration: 2 }}
        startPosition="bottom 80%"
        endPosition="bottom 30%"
      />
      {/* for right */}
      <Box
        ref={right}
        sx={{
          width: { xs: "100%", lg: "50%" },
          height: { xs: "45%", lg: "100%" },
          bgcolor: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
          transform: "translateX(200px)",
        }}
      >
        <img src={profile} alt="profile.png" className="profileImg" />
        <div className="hoverBlur"></div>
      </Box>
      <Animation
        divName={right}
        option={{ x: 0, opacity: 1, duration: 2.5 }}
        startPosition="bottom 50%"
        endPosition="bottom 0%"
      />

      <Link
        className="recentText"
        to="work"
        smooth={true}
        duration={800}
        style={{
          width: "fit-content",
          position: "absolute",
          bottom: 10,
          color: "#dadada",
          fontSize: 18,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
        }}
      >
        <img src={arrow} alt="arrow" />
        Recent Work
      </Link>
    </div>
  );
};

export default HomePage;
