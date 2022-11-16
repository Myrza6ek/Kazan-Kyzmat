import React, { useContext } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import { Paper } from "@mui/material";
import "./ProductCards.css";

import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { authContext } from "../../../Contexts/AuthenticContextProvider";
import { productContext } from "../../../Contexts/ProductContextProvider";

const ProductCard = ({ obj }) => {
  const { readProduct, ProductCard, deleteProduct, setInpValues } =
    useContext(productContext);
  const { id } = useParams();
  const { user } = useContext(authContext);

  const navigate = useNavigate();

  function handleEdit(obj) {
    setInpValues(obj);
    navigate(`/edit/${obj.id}`);
  }
  return (
    <>
      <Card
        className="prod_card"
        variant="outlined"
        // backgroundColor="aliceblue"
        sx={{ width: 320, margin: "50px 0 0" }}>
        <Typography level="h1" fontSize="xl" sx={{ mb: 0.5 }}>
          {obj.fio}
        </Typography>
        <Typography level="body2">{obj.activity}</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
          <BookmarkAdd />
        </IconButton>
        <AspectRatio minHeight="220px" maxHeight="300px" sx={{ my: 2 }}>
          <img
            style={{ width: "auto" }}
            src={obj.img}
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt="photo"
          />
        </AspectRatio>
        <Typography mb="30px" level="body2">
          {obj.description}
        </Typography>

        <Box sx={{ display: "flex" }}>
          <div>
            <Typography level="body3">Цена:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              {obj.price} сом
            </Typography>
          </div>
          <Button
            variant="solid"
            size="sm"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: "auto", fontWeight: 600 }}>
            Order кылуу
          </Button>
        </Box>

        {user.email === "foolbull35@gmail.com" ? (
          <Box display="flex" justifyContent="space-evenly">
            <Button
              className="btn_hov"
              variant="outlined"
              size="md"
              aria-label="Explore Bahamas Islands"
              sx={{
                margin: "20px 0 0",
                fontWeight: 600,
                color: "rgb(22, 183, 7)",
                backgroundColor: "white",
              }}
              onClick={() => handleEdit(obj)}>
              edit
            </Button>
            <Button
              className="btn_hov"
              variant="outlined"
              size="md"
              aria-label="Explore Bahamas Islands"
              sx={{
                margin: "20px 0 0",
                fontWeight: 600,
                color: "red",
              }}
              onClick={() => deleteProduct(obj.id)}>
              delete
            </Button>
          </Box>
        ) : null}
      </Card>
    </>
  );
};

export default ProductCard;
