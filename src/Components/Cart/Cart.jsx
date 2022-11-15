import React from "react";
import { Box, Button, Card, CardMedia, Paper, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Cart.css";

const Cart = () => {
  return (
    <Box className="box_main_cart">
      <Paper
        elevation={5}
        className="overlay"
        sx={{ background: "rgba(228, 223, 223, 0.515)" }}>
        <Box className="drawer">
          <Typography variant="h3" className="drawer-korzina">
            Корзина
            <Button //onClick={() => props.setModalCart(false)}
            >
              <CancelIcon />
            </Button>
          </Typography>

          {/* {productsInCart ? (
            <> */}
          <Card className="first_items">
            {/* {productsInCart.dentalProducts.map(elem => ( */}
            <Paper
              //  key={elem.item.id}
              elevation={6}
              className="cartItem">
              <CardMedia className="cartItemImg">
                <img src="" alt="obj.img" />
              </CardMedia>

              <Box className="cartItem-p">
                <Typography className="cartItem-kroc">
                  {/* {elem.item.category} */}
                  abcd
                  <br />
                  {/* {elem.item.title} */}efgh
                </Typography>
                {/* <b>{elem.item.price}</b> */}
                jklmnop
              </Box>
              <Button
                // onClick={() => {
                //   deleteCartProduct(elem.item.id);
                // }}
                className="removeBtn"
                width={20}
                height={20}>
                <DeleteOutlineIcon />
              </Button>
              <Typography>
                Сумма:
                {/* {elem.subPrice} */}
              </Typography>
            </Paper>
            <Paper
              //  key={elem.item.id}
              elevation={6}
              className="cartItem">
              <CardMedia className="cartItemImg">
                <img src="" alt="obj.img" />
              </CardMedia>

              <Box className="cartItem-p">
                <Typography className="cartItem-kroc">
                  {/* {elem.item.category} */}
                  abcd
                  <br />
                  {/* {elem.item.title} */}efgh
                </Typography>
                {/* <b>{elem.item.price}</b> */}
                jklmnop
              </Box>
              <Button
                // onClick={() => {
                //   deleteCartProduct(elem.item.id);
                // }}
                className="removeBtn"
                width={20}
                height={20}>
                <DeleteOutlineIcon />
              </Button>
              <Typography>
                Сумма:
                {/* {elem.subPrice} */}
              </Typography>
            </Paper>
            {/* ))} */}
            <div className="cartTotalBlock">
              <ul className="TotalBlock">
                <li className="itogo">
                  <span>Итого</span>
                  <div className="cherta1"></div>
                  <b>1500som</b>
                </li>
                {/* <li className="nalog">
                  <span>Налог 5%:</span>
                  <div className="cherta2"></div>
                  <b>1074 руб.</b>
                </li> */}
              </ul>
              <button className="greenButton">
                Оформить заказ
                <img
                  width={40}
                  height={40}
                  src="https://cdn-icons-png.flaticon.com/512/2989/2989981.png"
                  alt="Arrow"
                />
              </button>
            </div>
          </Card>
          {/* </> */}
          {/* ) : (
            <h1>Loading...</h1>
          )} */}
        </Box>
      </Paper>
    </Box>
  );
};

export default Cart;
