import React, { useContext, useState } from "react";
import { Box, Button, Paper, TextField } from "@mui/material";
import { productContext } from "../../../Contexts/ProductContextProvider";

import "./AddProduct.css";

const AddProduct = () => {
  const { addProduct } = useContext(productContext);
  const [category, setCategory] = useState("");
  const [fio, setFio] = useState("");
  const [numberTel, setNumberTel] = useState("");
  const [activity, setActivity] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");

  function handleAdd(e) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (
      !category.trim() ||
      !fio.trim() ||
      !numberTel.trim() ||
      !activity.trim() ||
      !price.trim() ||
      !img.trim() ||
      !description.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }

    let obj = {
      category,
      fio,
      numberTel,
      activity,
      price: +price,
      img,
      description,
    };
    console.log(obj);
    addProduct(obj);
    setCategory("");
    setFio("");
    setNumberTel("");
    setActivity("");
    setPrice(0);
    setImg("");
    setDescription("");
  }
  return (
    <>
      add
      <br />
      app
      <Box py="120px" backgroundColor="mediumslateblue">
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            mx: "auto",
            width: "50%",
            bgcolor: "#818987ca",
          }}
          elevation={9}>
          <h2 id="add-title">Добавление услуги</h2>
          <form id="form-add" onSubmit={e => handleAdd(e)}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                // flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "20px",
                mx: "auto",
                width: "100%",
                // bgcolor: "#818987ca",
              }}>
              <TextField
                sx={{
                  width: "45%",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  margin: "10px ",
                }}
                label="Категория"
                variant="outlined"
                value={category}
                onChange={e => setCategory(e.target.value)}
              />
              <TextField
                sx={{
                  width: "45%",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  margin: "10px ",
                }}
                label="ФИО"
                variant="outlined"
                value={fio}
                onChange={e => setFio(e.target.value)}
              />
              <TextField
                sx={{
                  width: "45%",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  margin: "10px ",
                }}
                type="number"
                label="Номер телефона"
                variant="outlined"
                value={numberTel}
                onChange={e => setNumberTel(e.target.value)}
              />

              <TextField
                sx={{
                  width: "45%",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  margin: "10px ",
                }}
                label="Деятельность"
                variant="outlined"
                value={activity}
                onChange={e => setActivity(e.target.value)}
              />

              <TextField
                sx={{
                  width: "45%",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  margin: "10px ",
                }}
                type="number"
                label="Цена услуги"
                variant="outlined"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
              <TextField
                sx={{
                  width: "45%",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  margin: "10px ",
                }}
                label="Фото"
                variant="outlined"
                value={img}
                onChange={e => setImg(e.target.value)}
              />
              <TextField
                sx={{
                  width: "59%",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  margin: "10px ",
                }}
                label="Описание"
                placeholder="Placeholder"
                multiline
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </Box>
            <Button
              sx={{ my: "30px", width: "30%" }}
              variant="contained"
              color="secondary"
              type="submit">
              Добавить
            </Button>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default AddProduct;
