import React from "react";
import { Box, Button, Paper, TextField } from "@mui/material";

import "./EditProduct.css";

const EditProduct = () => {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <>
      edit
      <br />
      edit
      <Box py="120px" backgroundColor="lightgreen">
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
          <form
            id="form-add" //onSubmit={e => handleAdd(e)}
          >
            <TextField
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                margin: "10px 0",
              }}
              label="Категория"
              variant="outlined"
              // value={category}
              // onChange={e => setCategory(e.target.value)}
            />
            <TextField
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                margin: "10px 0",
              }}
              label="ФИО"
              variant="outlined"
              // value={title}
              // onChange={e => setTitle(e.target.value)}
            />
            <TextField
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                margin: "10px 0",
              }}
              label="Номер телефона"
              variant="outlined"
              // value={subCategory}
              // onChange={e => setSubCategory(e.target.value)}
            />

            <TextField
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                margin: "10px 0",
              }}
              label="Деятельность"
              variant="outlined"
              // value={description}
              // onChange={e => setDescription(e.target.value)}
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
              // value={price}
              // onChange={e => setPrice(e.target.value)}
            />
            <TextField
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                margin: "10px 0",
              }}
              label="Фото 1"
              variant="outlined"
              // value={img1}
              // onChange={e => setImg1(e.target.value)}
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
            />
          </form>
          <Button
            sx={{ my: "30px", width: "30%" }}
            variant="contained"
            color="success"
            type="submit">
            Сохранить
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default EditProduct;
