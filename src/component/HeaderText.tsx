import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Prop {
  title: string;
  boxRef?: React.MutableRefObject<HTMLDivElement | null>;
}

gsap.registerPlugin(ScrollTrigger);

const HeaderText = ({ title }: Prop) => {
  const boxRef = useRef<HTMLDivElement | null>(null);
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
  }, []);

  return (
    <>
      <Box
        ref={boxRef}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: 200,
          opacity: 0,
          transform: "translateX(100px)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "inherit",
            color: "#dadada",
          }}
        >
          {title}
        </Typography>
      </Box>
    </>
  );
};

export default HeaderText;
