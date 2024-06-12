import { Box, Button, Typography } from "@mui/material";
import React, { useRef } from "react";
import profile from "../asset/myProfile.png";
import "../styles/myInfo.scss";
import { IconData } from "../icon";
import { Animation2 } from "./Animation";
import HeaderText from "./HeaderText";

const MyInfo = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const downloadRef = useRef<HTMLDivElement | null>(null);
  const skillIconRef = useRef<HTMLDivElement | null>(null);
  const skillTextRef = useRef<HTMLDivElement | null>(null);

  return (
    <div style={{ backgroundColor: "transparent" }} id="info">
      {/* for header text */}
      <HeaderText title="MY INFO" />

      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: { xs: "90%", lg: "80%" },
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          {/* for photo  */}
          <Box
            sx={{
              width: { xs: "100%", lg: "50%" },
              height: 400,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "translateX(-100px)",
              opacity: 0,
            }}
            ref={imgRef}
          >
            <img className="profileImg" src={profile} alt="profile" />

            <div className="hoverBlur"></div>
          </Box>
          <Animation2
            divName={imgRef}
            option={{ opacity: 1, x: 0, duration: 4 }}
            startPosition="top 70%"
            endPosition="top 50%"
          />

          {/* for download cv */}
          <Box
            ref={downloadRef}
            sx={{
              width: { xs: "100%", lg: "50%" },
              height: 300,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              transform: "translateX(200px)",
              opacity: 0,
            }}
          >
            <Box>
              <p className="aboutText">About Me</p>
            </Box>
            <Box sx={{ width: "75%" }}>
              <p className="descripText">
                Passionate about creating{" "}
                <span>website with beautiful interfaces.</span> I have years of
                experiences with <span>Web developement</span> with serveral
                project completed.
              </p>
            </Box>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#535C91",
                textTransform: "none",
                width: "fit-content",
              }}
            >
              <a
                href="/asset/Professional-Web-Developer-2023.pdf"
                download=""
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Download Cv
              </a>
            </Button>
          </Box>
          <Animation2
            divName={downloadRef}
            option={{ opacity: 1, x: 0, duration: 3 }}
            startPosition="top 60%"
            endPosition="top 20%"
          />
        </Box>
      </Box>

      {/* for skill  */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",

          height: 250,
          mt: 3,
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",

            flexDirection: "column",
          }}
        >
          <Box
            sx={{ width: "90%", opacity: 0, transform: "translateX(-100px)" }}
            ref={skillTextRef}
          >
            <p className="skillText">Skill</p>
          </Box>
          <Animation2
            divName={skillTextRef}
            option={{ opacity: 1, x: 0, duration: 3 }}
            startPosition="top 30%"
            endPosition="top 80%"
          />

          <Box
            sx={{
              width: { xs: "100%", lg: "40%" },
              display: "flex",
              mt: 3,
              flexWrap: "wrap",
              opacity: 0,
              transform: "translateY(-100px)",
            }}
            ref={skillIconRef}
          >
            {IconData.map((d) => {
              return (
                <Box
                  key={d.id}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 60,
                    mb: 2,
                    mr: 1,
                    transition: "all .4s ease",

                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      opacity: 0.8,
                    },
                  }}
                >
                  <img
                    src={d.icon}
                    alt={d.name}
                    style={{ width: "30px", height: "30px" }}
                  />
                  <p
                    style={{
                      padding: 0,
                      margin: 0,
                      fontFamily: "inherit",
                      color: "#dadada",
                      fontSize: "15px",
                    }}
                  >
                    {d.name}
                  </p>
                </Box>
              );
            })}
            <Animation2
              divName={skillIconRef}
              option={{ opacity: 1, y: 0, duration: 3 }}
              startPosition="top 60%"
              endPosition="top 20%"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MyInfo;
