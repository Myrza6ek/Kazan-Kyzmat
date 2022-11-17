import { Box, Card, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { commentcontext } from "../../Contexts/ComContextProvider";
import "./AboutUs.css";

const AboutUs = () => {
  const { readComment, commentsArr } = useContext(commentcontext);

  useEffect(() => {
    readComment();
  }, []);
  // console.log(readComment());
  // console.log(commentsArr);
  return (
    <Box className="box_aboutUs">
      <Box
        style={{
          mx: "auto",
          padding: "80px",
          // width: "100%",
          backgroundColor: "rgba(59, 56, 66, 0.74)",
        }}>
        <Card style={{ backgroundColor: "rgb(43, 34, 33)" }}>
          <Typography variant="h6" padding="70px" color="white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            quidem molestias commodi tempore in laborum id illo. Exercitationem
            dolores blanditiis minima aperiam iure voluptatem, natus assumenda
            illo consequatur iusto praesentium fugit delectus sed, maxime
            sapiente facere consequuntur quam cum illum molestiae, pariatur
            explicabo repudiandae velit. Accusamus mollitia quasi repellat amet.
          </Typography>
        </Card>

        <Box
          sx={{
            margin: "20px 0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            // alignContent: "space-between",
          }}>
          <Card sx={{ mr: "10px" }}>
            <Typography variant="h5" padding="50px" color="rgb(52, 8, 3)">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              repellendus blanditiis quibusdam vero nulla dolor illo beatae,
              assumenda sapiente labore accusamus reiciendis eum voluptatum
              tempore sed ea delectus laboriosam inventore saepe expedita
              ducimus molestiae. Exercitationem dolores laudantium sapiente!
              Sint enim eligendi dicta asperiores quibusdam quis, praesentium
              fugiat id unde nisi, iure adipisci repellat minus rerum? Beatae
              quae ut porro repudiandae eum, similique culpa
            </Typography>
          </Card>

          <Card sx={{ ml: "10px" }}>
            <Typography variant="h5" padding="50px" color="rgb(52, 8, 3)">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              repellendus blanditiis quibusdam vero nulla dolor illo beatae,
              assumenda sapiente labore accusamus reiciendis eum voluptatum
              tempore sed ea delectus laboriosam inventore saepe expedita
              ducimus molestiae. Exercitationem dolores laudantium sapiente!
              Sint enim eligendi dicta asperiores quibusdam quis, praesentium
              fugiat id unde nisi, iure adipisci repellat minus rerum? Beatae
              quae ut porro repudiandae eum, similique culpa
            </Typography>
          </Card>
        </Box>
        {/* 
        {commentsArr.length ? (
          commentsArr.map(item => (
            <Card
              sx={{
                width: "50%",
                margin: "20px auto",
                padding: "30px",
                fontSize: "large",
              }}
              key={item.id}>
              Комментарии:
              <Typography variant="h4">{item.name}</Typography>
              <Typography variant="h6">{item.comment}</Typography>
            </Card>
          ))
        ) : (
          <h1>error</h1>
        )} */}
        <Card>
          <Typography variant="h6" padding="70px">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            quidem molestias commodi tempore in laborum id illo. Exercitationem
            dolores blanditiis minima aperiam iure voluptatem, natus assumenda
            illo consequatur iusto praesentium fugit delectus sed, maxime
            sapiente facere consequuntur quam cum illum molestiae, pariatur
            explicabo repudiandae velit. Accusamus mollitia quasi repellat amet.
          </Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default AboutUs;
