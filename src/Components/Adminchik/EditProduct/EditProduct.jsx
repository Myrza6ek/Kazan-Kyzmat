import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Paper, TextField } from "@mui/material";

import "./EditProduct.css";
import { productContext } from "../../../Contexts/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";
// import ProductCard from "../../Products/ProductCard/ProductCard";

const EditProduct = () => {
  const { productCard, readOneProduct, editProduct, inpValues, setInpValues } =
    useContext(productContext);

  // const [inpValues, setInpValues] = useState(null);
  console.log(productCard);

  const { id } = useParams();
  console.log(id);
  // const [value, setValue] = React.useState("Controlled");
  function handleChange(e) {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  }

  const navigate = useNavigate();

  function handleSave(e) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (
      !inpValues.category.trim() ||
      !inpValues.fio.trim() ||
      !inpValues.numberTel.trim() ||
      !inpValues.activity.trim() ||
      !inpValues.price ||
      !inpValues.img.trim() ||
      !inpValues.description.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }
    editProduct(id, inpValues);
    navigate("/servises");
  }

  return (
    <>
      {inpValues ? (
        <Box py="120px" backgroundColor="rgba(144, 238, 144, 0.665)">
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
            <h2 id="add-title">Исправить</h2>
            <form id="form-add" onSubmit={e => handleSave(e)}>
              <TextField
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  margin: "10px 0",
                }}
                label="Категория"
                variant="outlined"
                name="category"
                value={inpValues.category}
                onChange={e => handleChange(e)}
              />
              <TextField
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  margin: "10px 0",
                }}
                label="ФИО"
                variant="outlined"
                name="fio"
                value={inpValues.fio}
                onChange={e => handleChange(e)}
              />
              <TextField
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  margin: "10px 0",
                }}
                label="Номер телефона"
                variant="outlined"
                name="numberTel"
                value={inpValues.numberTel}
                onChange={e => handleChange(e)}
              />

              <TextField
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  margin: "10px 0",
                }}
                label="Деятельность"
                variant="outlined"
                name="activity"
                value={inpValues.activity}
                onChange={e => handleChange(e)}
              />

              <TextField
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  margin: "10px 0",
                }}
                type="number"
                label="Цена услуги"
                variant="outlined"
                name="price"
                value={inpValues.price}
                onChange={e => handleChange(e)}
              />
              <TextField
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  margin: "10px 0",
                }}
                label="Фото 1"
                variant="outlined"
                name="img"
                value={inpValues.img}
                onChange={e => handleChange(e)}
              />
              <TextField
                sx={{
                  width: "29%",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  margin: "10px 0",
                }}
                label="Описание"
                placeholder="Placeholder"
                multiline
                name="description"
                value={inpValues.description}
                onChange={e => handleChange(e)}
              />
              <Button
                sx={{ my: "30px", width: "30%" }}
                variant="contained"
                color="success"
                type="submit">
                Сохранить
              </Button>
            </form>
          </Paper>
        </Box>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};

export default EditProduct;
