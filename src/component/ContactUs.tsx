import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import HeaderText from "./HeaderText";
import "../styles/contactMe.scss";
import emailjs from "@emailjs/browser";
import { Animation2 } from "./Animation";
import { FacebookTwoTone, Instagram, LinkedIn } from "@mui/icons-material";

const ContactUs = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();
    const templateID = "template_7egzd0i";
    const serviceID = "service_6ni3vtt";
    const publicKey = "PW6uk6yKKfFaVFpvL";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Pai Thet",
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response);
        setEmail("");
        setName("");
        setMessage("");
        setSuccess("Send message successfully.");
      },
      (error) => {
        console.log("FAILED...", error.text);
        setSuccess("Send message not successful.");
      }
    );
  };

  return (
    <div style={{ width: "100%", backgroundColor: "transparent" }} id="contact">
      {/* for header text */}
      <HeaderText title="CONTACT US" />

      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: { xs: " 80% ", lg: "40%" },
            height: { xs: 700, lg: 470 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <input
              ref={nameRef}
              placeholder="Name"
              className="nameInput"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Animation2
              divName={nameRef}
              option={{ opacity: 1, x: 0, duration: 2.5 }}
              startPosition="top 80%"
              endPosition="top 30%"
            />

            <input
              ref={emailRef}
              placeholder="Email"
              className="nameInput"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Animation2
              divName={emailRef}
              option={{ opacity: 1, x: 0, duration: 2.5 }}
              startPosition="top 80%"
              endPosition="top 30%"
            />
            <textarea
              ref={messageRef}
              className="message"
              placeholder="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Animation2
              divName={messageRef}
              option={{ opacity: 1, y: 0, duration: 2.5 }}
              startPosition="top 80%"
              endPosition="top 30%"
            />

            <Box sx={{ width: "80%" }}>
              <Typography
                sx={{
                  color: "#11ef43",
                  fontFamily: "inherit",
                  mt: 2,
                  mb: 2,
                  fontSize: 17,
                }}
              >
                {success}
              </Typography>
            </Box>

            <Button
              onSubmit={sendEmail}
              variant="contained"
              sx={{ width: "fit-content", mt: 3, bgcolor: "#535C91" }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: 100,
          bgcolor: "transparent",
          display: "flex",
          cursor: "default",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            mr: 3,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FacebookTwoTone sx={{ fontSize: 22, color: "#dadada", mr: 1 }} />
          <Typography sx={{ fontSize: 15, color: "#dadada" }}>
            FaceBook
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            mr: 3,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Instagram sx={{ fontSize: 22, color: "#dadada", mr: 1 }} />
          <Typography sx={{ fontSize: 15, color: "#dadada" }}>
            Instagram
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LinkedIn sx={{ fontSize: 22, color: "#dadada", mr: 1 }} />
          <Typography sx={{ fontSize: 15, color: "#dadada" }}>
            LinkedIn
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default ContactUs;
