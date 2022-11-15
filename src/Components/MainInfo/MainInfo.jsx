import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import shyrdak from "../Home/media/jilikter.jpg";

const customTheme = createTheme({
  // palette: {
  //   primary: {
  //     main: deepPurple[500],
  //   },
  // },
});

const StyledAvatar = styled(Paper)`
  ${({ theme }) => `
  cursor: pointer;
 
  transition: ${theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    
    transform: scale(1.1);
  }
  `}
`;

const MainInfo = () => {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Box //sx={{ backgroundColor: "rgba(239, 235, 249, 0.35)" }}
        >
          <Grid py="60px" mx="auto" width="60%">
            <StyledAvatar>
              <Paper
                sx={{
                  borderRadius: "0px",
                  backgroundImage: `url(${shyrdak})`,
                }}>
                <Typography
                  style={{
                    backgroundColor: "rgba(33, 43, 42, 0.7)",
                  }}
                  // variant="h6"
                  // color="rgb(86, 255, 255)"
                  color="white"
                  fontSize="20px"
                  fontWeight="bold"
                  padding="80px">
                  С древних времен кыргызы придают большое значение подаче мяса.
                  Эти традиции относятся не только к культуре подаче еды, но и к
                  культуре взаимоотношений старших и младших, женщин и мужчин,
                  родственников и близких. Поэтому полагаем, что современной
                  молодежи важно знать правила распределения устуканов. Но,
                  прежде чем подать мясо, нужно правильно разделать барана и
                  сварить его. Уверены, что предлагаемая инфографика поможет
                  получить большее представление о культуре и традициях
                  кыргызов.
                </Typography>
              </Paper>
            </StyledAvatar>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default MainInfo;
