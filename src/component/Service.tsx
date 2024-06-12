import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import WebIcon from "@mui/icons-material/Web";
import { serviceData } from "../icon";
import HeaderText from "./HeaderText";
import { Animation2 } from "./Animation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const cardRefs = useRef<HTMLDivElement | null>(null);

  return (
    <div
      style={{ backgroundColor: "transparent", marginBottom: "10px" }}
      id="services"
    >
      {/* for header text */}
      <HeaderText title="SERVICES" />

      {/* for content */}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box
          ref={cardRefs}
          sx={{
            width: "80%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            opacity: 0,
            transform: "translateY(50px)",
          }}
        >
          {serviceData.map((d) => {
            return (
              <Box
                key={d.id}
                sx={{
                  width: 500,
                  height: 300,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexWrap: "wrap",
                  mr: 4,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <d.icon sx={{ color: "#535C91", fontSize: 30 }} />
                </Box>

                <Box
                  sx={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "flex-start",
                    fontFamily: "inherit",
                    mt: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#dadada" }}>
                    {d.name}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "flex-start",
                    fontFamily: "inherit",
                    mt: 2,
                  }}
                >
                  <Typography
                    sx={{ color: "#dadadaab", fontSize: 15, width: "80%" }}
                  >
                    {d.text}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Animation2
          divName={cardRefs}
          option={{ opacity: 1, y: 0, duration: 2.5 }}
          startPosition="top 80%"
          endPosition="top 30%"
        />
      </Box>
    </div>
  );
};

export default Service;
