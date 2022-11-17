import React, { useContext, useEffect } from "react";
import { Box, Button, Card, CardMedia, Paper, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Cart.css";
import { cartContext } from "../../Contexts/CartContextProvider";
import { Link } from "react-router-dom";

const Cart = () => {
  const { productsInCart, getCart, changeProductCount, deleteCartProduct } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <Box className="box_main_cart">
        <Paper
          elevation={5}
          className="overlay"
          sx={{ background: "rgba(228, 223, 223, 0.515)" }}>
          <Box className="drawer">
            <Typography variant="h3" className="drawer-korzina">
              Корзина
              <Link to="/servises">
                <Button
                //onClick={() => props.setModalCart(false)}
                >
                  <CancelIcon />
                </Button>
              </Link>
            </Typography>

            {productsInCart ? (
              <>
                <Card className="first_items">
                  {productsInCart.products.map(elem => (
                    <Paper
                      key={elem.item.id}
                      elevation={6}
                      className="cartItem">
                      <CardMedia className="cartItemImg">
                        <img
                          style={{ width: "100%" }}
                          src={elem.item.img}
                          alt="obj.img"
                        />
                      </CardMedia>

                      <Box className="cartItem-p">
                        <Typography sx={{ fontWeight: "bold" }}>
                          {elem.item.category}
                        </Typography>
                        {elem.item.activity}

                        <b>{elem.item.price}</b>
                      </Box>
                      <Button
                        onClick={() => {
                          deleteCartProduct(elem.item.id);
                        }}
                        className="removeBtn"
                        width={20}
                        height={20}>
                        <DeleteOutlineIcon />
                      </Button>
                      <Box>
                        Days:
                        <input
                          min="1"
                          type="number"
                          style={{ width: "35px" }}
                          value={elem.count}
                          onChange={e =>
                            changeProductCount(elem.item.id, e.target.value)
                          }
                        />
                        <Typography>
                          Сумма:
                          {elem.subPrice}
                        </Typography>
                      </Box>
                    </Paper>
                  ))}
                  <div className="cartTotalBlock">
                    <div className="TotalBlock">
                      <h4>
                        Итого:_____________________________
                        {productsInCart.totalPrice}
                      </h4>
                      <div className="cherta1"></div>

                      {/* <li className="nalog">
                                <span>Налог 5%:</span>
                                <div className="cherta2"></div>
                                <b>1074 руб.</b>
                              </li> */}
                    </div>
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
              </>
            ) : (
              <h1>Loading...</h1>
            )}
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Cart;
