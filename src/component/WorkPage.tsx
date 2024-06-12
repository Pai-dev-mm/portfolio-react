import { ArrowRightAltRounded } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import foodiePhoto from "../asset/foodie.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderText from "./HeaderText";

gsap.registerPlugin(ScrollTrigger);

const WorkPage = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const cardRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%", // Animation starts when the top of the element hits 80% of the viewport height
        end: "top 30%", // Animation ends when the top of the element hits 30% of the viewport height
        scrub: true, // Smooth scrubbing
        toggleActions: "play none none none", // Actions to take when element enters/exits the viewport
      },
      opacity: 1,
      x: 0,
      duration: 2.5,
    });

    gsap.to(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%", // Animation starts when the top of the element hits 80% of the viewport height
        end: "top 30%", // Animation ends when the top of the element hits 30% of the viewport height
        scrub: true, // Smooth scrubbing
        toggleActions: "play none none none", // Actions to take when element enters/exits the viewport
      },
      opacity: 1,
      x: 0,
      duration: 2.5,
    });

    gsap.to(cardRef2.current, {
      scrollTrigger: {
        trigger: cardRef2.current,
        start: "top 80%", // Animation starts when the top of the element hits 80% of the viewport height
        end: "top 30%", // Animation ends when the top of the element hits 30% of the viewport height
        scrub: true, // Smooth scrubbing
        toggleActions: "play none none none", // Actions to take when element enters/exits the viewport
      },
      opacity: 1,
      x: 0,
      duration: 2.5,
    });
  }, []);

  return (
    <div style={{ height: "auto" }} id="work">
      {/* For head text */}
      <HeaderText title="RECENT WORK" />

      {/* for work card */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            flexWrap: " wrap",
            width: "80%",
          }}
        >
          {/* for each card */}
          <Box
            ref={cardRef}
            sx={{
              width: 500,
              height: 450,
              bgcolor: "#1b1a55bd",
              mb: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 5,
              opacity: 0,
              transform: "translateX(-50px)",

              transition: "all .4s ease",
              "&:hover": {
                boxShadow: " 0px 0px 25px 10px rgba(83,92,145,0.4)",
                transform: "scale(1.05)",
              },
            }}
          >
            {/* arrow icon */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <IconButton sx={{ mr: 4 }}>
                <ArrowRightAltRounded
                  sx={{
                    fontSize: 32,
                    color: "#dadada",
                    "&:hover": { color: "#9290C3" },
                  }}
                />
              </IconButton>
            </Box>
            {/* for project name */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                height: 30,
              }}
            >
              <Typography
                sx={{ color: "#dadada", fontFamily: "inherit", fontSize: 26 }}
              >
                Foodie POS
              </Typography>
              <Typography
                sx={{
                  color: "#dadadaab",
                  fontFamily: "inherit",
                  fontSize: 16,
                  mt: 1,
                }}
              >
                Short the description of the project was carried out in this
                portfolio.
              </Typography>
            </Box>

            {/* for image */}
            <Box
              sx={{
                width: "80%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                mt: 5,
              }}
            >
              <img
                src={foodiePhoto}
                alt="foodie"
                style={{ width: "100%", height: "80%" }}
              />
            </Box>
          </Box>

          <Box
            ref={cardRef2}
            sx={{
              width: 500,
              height: 450,
              bgcolor: "#1b1a55bd",
              mb: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 5,
              opacity: 0,
              transition: "all .4s ease",
              transform: "translateX(-50px)",
              "&:hover": {
                boxShadow: " 0px 0px 25px 10px rgba(83,92,145,0.4)",
                transform: "scale(1.05)",
              },
            }}
          >
            {/* arrow icon */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <IconButton sx={{ mr: 4 }}>
                <ArrowRightAltRounded
                  sx={{
                    fontSize: 32,
                    color: "#dadada",
                    "&:hover": { color: "#9290C3" },
                  }}
                />
              </IconButton>
            </Box>
            {/* for project name */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                height: 30,
              }}
            >
              <Typography
                sx={{ color: "#dadada", fontFamily: "inherit", fontSize: 26 }}
              >
                Foodie POS
              </Typography>
              <Typography
                sx={{
                  color: "#dadadaab",
                  fontFamily: "inherit",
                  fontSize: 16,
                  mt: 1,
                }}
              >
                Short the description of the project was carried out in this
                portfolio.
              </Typography>
            </Box>

            {/* for image */}
            <Box
              sx={{
                width: "80%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                mt: 5,
              }}
            >
              <img
                src={foodiePhoto}
                alt="foodie"
                style={{ width: "100%", height: "80%" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default WorkPage;
