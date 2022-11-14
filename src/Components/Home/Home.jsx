import { Box, Card, CardMedia, Paper, Typography } from "@mui/material";
import React from "react";
import ustukan_1 from "./media/ustukan_1.jpg";
import ustukan_2 from "./media/ustukan-2.jpg";
import ustukan_3 from "./media/ustukan-chasti.png";
import ustukan_golova from "./media/ustukan-golova.png";
import ustukan_promysh from "./media/ustukan-promysh.png";
import "./Home.css";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";

import Transition from "../Transition/Transition";

const customTheme = createTheme({
  // palette: {
  //   primary: {
  //     main: deepPurple[500],
  //   },
  // },
});

const StyledAvatar = styled(Card)`
  ${({ theme }) => `
  cursor: pointer;
 
  transition: ${theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    
    transform: scale(1.03);
  }
  `}
`;

const Home = () => {
  return (
    <>
      <Box
      // mt="100px"
      // className="main_box"
      >
        <ThemeProvider theme={customTheme}>
          <Box
            className="content-box"
            pt="120px"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <StyledAvatar sx={{ width: "28%" }}>
              <Card>
                <CardMedia
                  component="img"
                  // height="200"
                  image={ustukan_1}
                  alt="Paella dish">
                  {/* <img src={ustukan_1} alt="" /> */}
                </CardMedia>
              </Card>
            </StyledAvatar>
            <Paper
              elevation={5}
              sx={{
                background: "linear-gradient(50deg,#cdae06 0,#f6ffa1)",
                width: "30%",
                padding: "20px",
                margin: "0 20px",
                // background: "linear-gradient(90deg,#5e4d02 0,#dce35c)",
              }}>
              <Typography variant="h5" color="#a31f2d">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis dicta doloribus provident quis modi dolorem magni,
                perferendis amet aliquid architecto laudantium temporibus atque
                ipsum natus harum odio nisi dignissimos necessitatibus?
              </Typography>
            </Paper>
          </Box>
        </ThemeProvider>
        <ThemeProvider theme={customTheme}>
          <Box
            className="content-box"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Paper
              elevation={5}
              sx={{
                background: "linear-gradient(50deg,#cdae06 0,#f6ffa1)",
                width: "30%",
                padding: "20px",
                margin: "0 20px",
                // background: "linear-gradient(90deg,#5e4d02 0,#dce35c)",
              }}>
              <Typography variant="h5" color="#a31f2d">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis dicta doloribus provident quis modi dolorem magni,
                perferendis amet aliquid architecto laudantium temporibus atque
                ipsum natus harum odio nisi dignissimos necessitatibus?
              </Typography>
            </Paper>
            <StyledAvatar sx={{ width: "28%" }}>
              <Card>
                <CardMedia
                  component="img"
                  // height="200"
                  image={ustukan_3}
                  alt="Paella dish">
                  {/* <img src={ustukan_1} alt="" /> */}
                </CardMedia>
              </Card>
            </StyledAvatar>
          </Box>
        </ThemeProvider>
        <ThemeProvider theme={customTheme}>
          <Box
            className="content-box"
            pt="20px"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <StyledAvatar sx={{ width: "28%" }}>
              <Card>
                <CardMedia
                  // width="40%"

                  component="img"
                  // height="200"
                  image={ustukan_2}
                  alt="Paella dish">
                  {/* <img src={ustukan_1} alt="" /> */}
                </CardMedia>
              </Card>
            </StyledAvatar>
            <Paper
              elevation={5}
              sx={{
                background: "linear-gradient(50deg,#cdae06 0,#f6ffa1)",
                width: "30%",
                padding: "20px",
                margin: "0 20px",
                // background: "linear-gradient(90deg,#5e4d02 0,#dce35c)",
              }}>
              <Typography variant="h5" color="#a31f2d">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis dicta doloribus provident quis modi dolorem magni,
                perferendis amet aliquid architecto laudantium temporibus atque
                ipsum natus harum odio nisi dignissimos necessitatibus?
              </Typography>
            </Paper>
          </Box>
        </ThemeProvider>
        <ThemeProvider theme={customTheme}>
          <Box
            className="content-box"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Paper
              elevation={5}
              sx={{
                background: "linear-gradient(50deg,#cdae06 0,#f6ffa1)",
                width: "30%",
                padding: "20px",
                margin: "0 20px",
                // background: "linear-gradient(90deg,#5e4d02 0,#dce35c)",
              }}>
              <Typography variant="h5" color="#a31f2d">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis dicta doloribus provident quis modi dolorem magni,
                perferendis amet aliquid architecto laudantium temporibus atque
                ipsum natus harum odio nisi dignissimos necessitatibus?
              </Typography>
            </Paper>
            <StyledAvatar sx={{ width: "28%" }}>
              <Card>
                <CardMedia
                  component="img"
                  // height="200"
                  image={ustukan_golova}
                  alt="Paella dish">
                  {/* <img src={ustukan_1} alt="" /> */}
                </CardMedia>
              </Card>
            </StyledAvatar>
          </Box>
        </ThemeProvider>
        <ThemeProvider theme={customTheme}>
          <Box
            className="content-box"
            pt="20px"
            pb="50px"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <StyledAvatar sx={{ width: "28%" }}>
              <Card>
                <CardMedia
                  // width="40%"

                  component="img"
                  // height="200"
                  image={ustukan_promysh}
                  alt="Paella dish">
                  {/* <img src={ustukan_1} alt="" /> */}
                </CardMedia>
              </Card>
            </StyledAvatar>
            <Paper
              elevation={5}
              sx={{
                background: "linear-gradient(50deg,#cdae06 0,#f6ffa1)",
                width: "30%",
                padding: "20px",
                margin: "0 20px",
                // background: "linear-gradient(90deg,#5e4d02 0,#dce35c)",
              }}>
              <Typography variant="h5" color="#a31f2d">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis dicta doloribus provident quis modi dolorem magni,
                perferendis amet aliquid architecto laudantium temporibus atque
                ipsum natus harum odio nisi dignissimos necessitatibus?
              </Typography>
            </Paper>
          </Box>
        </ThemeProvider>
      </Box>
    </>
  );
};

export default Home;
