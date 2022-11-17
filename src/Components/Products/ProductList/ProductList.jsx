import React, { useContext, useEffect, useState } from "react";
import { Box, Grid, Pagination } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { useSearchParams } from "react-router-dom";
import { productContext } from "../../../Contexts/ProductContextProvider";
// import ProductList from "../Products/ProductList/ProductList";

const ProductList = () => {
  const { productsArr, readProduct, pageTotalCount } =
    useContext(productContext);
  const [paramsSearch, setParamsSearch] = useSearchParams();

  const [page, setPage] = useState(1);

  useEffect(() => {
    setParamsSearch({
      q: paramsSearch.get("q") || "", // null || ""
      _page: page,
      _limit: 3,
    });
    // readProduct();
  }, [paramsSearch, page]);

  useEffect(() => {
    readProduct();
  }, [paramsSearch, pageTotalCount]);

  return (
    <div>
      {/* <ProductCard /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          width: "65vw",
        }}>
        {/* <ProductCard /> */}
        {/* <ProductCard />
            <ProductCard />
            <ProductCard /> */}
        {productsArr
          ? productsArr.map(item => (
              <Grid item={true} xs={3.5} mb={7} key={item.id}>
                <ProductCard obj={item} />
              </Grid>
            ))
          : null}
      </Box>

      <Grid
        sx={{
          width: "auto",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgba(240, 248, 255, 0.758)",
        }}
        mx="auto"
        my="10px">
        <Pagination
          count={+pageTotalCount}
          // color="secondary"
          page={+page}
          onChange={(e, value) => setPage(value)}
        />
      </Grid>
    </div>
  );
};

export default ProductList;
