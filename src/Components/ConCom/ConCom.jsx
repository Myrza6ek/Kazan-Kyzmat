import {
  Box,
  Button,
  Card,
  CardMedia,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Contexts/AuthenticContextProvider";
import { commentcontext } from "../../Contexts/ComContextProvider";
// import "../ConCom/ConCom.css";
import map from "./medi/map.jpg";

const ConCom = () => {
  const { readComment, commentsArr } = useContext(commentcontext);

  useEffect(() => {
    readComment();
  }, []);

  const { AddComment, deleteComment } = useContext(commentcontext);
  const { user } = useContext(authContext);

  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  // let time = new Date();
  // let hours = time.getHours();
  // let minute = time.getMinutes();
  // let Alltime = {
  //   hours,
  //   minute,
  // };
  function handleAdd(e) {
    e.preventDefault();
    if (!comment.trim() || !name.trim()) {
      alert("Заполните все поля!");
      return;
    }

    let obj = {
      user: user.email,
      name,
      comment,
      // card: productDetails.id,
      // hour: Alltime.hours,
      // minute: Alltime.minute,
    };
    AddComment(obj);
    setName("");
    setComment("");
  }

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
          {/* <TextField
            sx={{
              width: "90%",
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px 0",
            }}
            label="Email"
            // value={user}
            variant="outlined"
            // value={category}
            // onChange={e => setCategory(e.target.value)}
          /> */}
          <TextField
            sx={{
              width: "90%",
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "10px 0",
            }}
            label="Name"
            value={name}
            onChange={e => setName(e.target.value)}
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
            value={comment}
            multiline
            rows={6}
            onChange={e => setComment(e.target.value)}
          />
          <Button
            sx={{ my: "30px", width: "30%" }}
            variant="contained"
            color="secondary"
            onClick={e => handleAdd(e)}>
            Отправить
          </Button>
          <br />
          <br />

          <Typography sx={{}}>Comments:</Typography>

          {commentsArr.length ? (
            commentsArr.map(item => (
              <Box
                sx={{ display: "flex", alignItems: "flex-start" }}
                key={item.id}>
                <Card
                  sx={{
                    width: "100%",
                    margin: "20px auto",
                    padding: "30px",
                    fontSize: "large",
                  }}>
                  <Typography variant="h4">{item.name}</Typography>
                  <Typography sx={{ padding: "20px" }} variant="h6">
                    {item.comment}
                  </Typography>
                </Card>
                {user.email === "foolbull35@gmail.com" ? (
                  <Button
                    sx={{ m: "20px 0" }}
                    onClick={() => deleteComment(item.id)}>
                    del
                  </Button>
                ) : null}
              </Box>
            ))
          ) : (
            <h1>error</h1>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ConCom;
