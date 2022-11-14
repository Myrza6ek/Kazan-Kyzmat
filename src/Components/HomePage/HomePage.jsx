import { Box, Card, Paper, Typography } from "@mui/material";
import React from "react";
import Home from "../Home/Home";
import "../Home/Home.css";
import MainInfo from "../MainInfo/MainInfo";
import Transition from "../Transition/Transition";

import bgshyrdak from "../Home/media/bgshyrdak.jpg";
const HomePage = () => {
  return (
    <>
      <Box className="main_box" pt="100px">
        <Paper
          sx={{
            borderRadius: "0px",
            backgroundImage: `url(${bgshyrdak})`,
            // backgroundSize: "",
          }}>
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(33, 43, 42, 0.45)",
            }}
            color="white"
            fontSize="25px"
            fontWeight="bold"
            padding="60px"
            variant="h3">
            Ваши хлопоты - наша забота!
          </Typography>
        </Paper>
        <Transition />
        <MainInfo />
        <Home />
      </Box>
    </>
  );
};

export default HomePage;
