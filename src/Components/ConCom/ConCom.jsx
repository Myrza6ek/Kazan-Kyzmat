import {
  Box,
  Button,
  Card,
  CardMedia,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
// import "../ConCom/ConCom.css";
import map from "./medi/map.jpg";

const ConCom = () => {
  return (
    <>
      <Box
        sx={{
          margin: "100px auto 0px",
          padding: "50px",
          width: "76%",
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "rgba(240, 248, 255, 0.9)",
        }}>
        <Box width="40%">
          <Typography variant="h4" fontWeight="bold">
            Contact Us
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            Главный офис
          </Typography>
          <Typography>
            Кыргызстан, Бишкек, Табышалиева 29 / Подвал, аквариум Tel: 9095 1817
            (Office Hours Only)
          </Typography>
          <Typography>
            Email: <Link>info@steak-king.com</Link>
          </Typography>
          <Typography>
            Store Opening Hours: Mon-Sat 10AM-6PM / 11AM-4PM Sundays
            <br />
            Where to find us:
          </Typography>
          <img src={map} alt="googlemap" width="80%" />
          <Typography>
            From Wong Chuk Hang MTR Exit B, follow the footbridge across Heung
            Yip road and take the steps down to ground level. Kwai Bo Ind
            Building will be on your left.
          </Typography>
        </Box>
        <Box width="40%" mt="40px">
          <Typography variant="h6" fontWeight="bold">
            Оставьте комментарий
          </Typography>
          <Typography>
            If you have more questions, complete the form below and we will be
            in touch as soon as possible:
          </Typography>
          <TextField
            sx={{
              width: "90%",
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px 0",
            }}
            label="Email"
            variant="outlined"
            // value={category}
            // onChange={e => setCategory(e.target.value)}
          />
          <TextField
            sx={{
              width: "90%",
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px 0",
            }}
            label="Name"
            variant="outlined"
            // value={category}
            // onChange={e => setCategory(e.target.value)}
          />

          <TextField
            sx={{
              width: "90%",
              backgroundColor: "white",
              margin: "10px 0",
            }}
            id="outlined-multiline-static"
            label="Comment"
            multiline
            rows={6}
          />
          <Button
            sx={{ my: "30px", width: "30%" }}
            variant="contained"
            color="secondary"
            type="submit">
            Отправить
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ConCom;
