import { Box, Card, Typography } from "@mui/material";
import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <Box className="box_aboutUs">
      <Card style={{ backgroundColor: "rgba(43, 34, 33, 0.814)" }}>
        <Typography variant="h6" padding="70px" color="white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          quidem molestias commodi tempore in laborum id illo. Exercitationem
          dolores blanditiis minima aperiam iure voluptatem, natus assumenda
          illo consequatur iusto praesentium fugit delectus sed, maxime sapiente
          facere consequuntur quam cum illum molestiae, pariatur explicabo
          repudiandae velit. Accusamus mollitia quasi repellat amet.
        </Typography>
      </Card>

      <br />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          // alignContent: "space-between",
        }}>
        <Card sx={{ mr: "10px", opacity: "0.8" }}>
          <Typography variant="h5" padding="50px" color="rgb(52, 8, 3)">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            repellendus blanditiis quibusdam vero nulla dolor illo beatae,
            assumenda sapiente labore accusamus reiciendis eum voluptatum
            tempore sed ea delectus laboriosam inventore saepe expedita ducimus
            molestiae. Exercitationem dolores laudantium sapiente! Sint enim
            eligendi dicta asperiores quibusdam quis, praesentium fugiat id unde
            nisi, iure adipisci repellat minus rerum? Beatae quae ut porro
            repudiandae eum, similique culpa
          </Typography>
        </Card>
        <Card sx={{ ml: "10px", opacity: "0.8" }}>
          <Typography variant="h5" padding="50px" color="rgb(52, 8, 3)">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            repellendus blanditiis quibusdam vero nulla dolor illo beatae,
            assumenda sapiente labore accusamus reiciendis eum voluptatum
            tempore sed ea delectus laboriosam inventore saepe expedita ducimus
            molestiae. Exercitationem dolores laudantium sapiente! Sint enim
            eligendi dicta asperiores quibusdam quis, praesentium fugiat id unde
            nisi, iure adipisci repellat minus rerum? Beatae quae ut porro
            repudiandae eum, similique culpa
          </Typography>
        </Card>
      </Box>
      <br />
      <Card style={{ opacity: "0.8" }}>
        <Typography variant="h6" padding="70px">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          quidem molestias commodi tempore in laborum id illo. Exercitationem
          dolores blanditiis minima aperiam iure voluptatem, natus assumenda
          illo consequatur iusto praesentium fugit delectus sed, maxime sapiente
          facere consequuntur quam cum illum molestiae, pariatur explicabo
          repudiandae velit. Accusamus mollitia quasi repellat amet.
        </Typography>
      </Card>
    </Box>
  );
};

export default AboutUs;
