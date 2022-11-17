import React, { useContext, useEffect, useState } from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import { Box, Grid, Pagination } from "@mui/material";

import "../Home/Home.css";

import { productContext } from "../../Contexts/ProductContextProvider";
import ProductList from "../Products/ProductList/ProductList";
import LiveSearch from "../LiveSearch/LiveSearch";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      // width="10px"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ px: 7, width: "90%" }}>
          <Typography>{children}</Typography>
          <LiveSearch />
          <ProductList />
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Servises = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { productsArr, readProduct } = useContext(productContext);

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <>
      <Box className="main_box">
        <Box
          p="120px 90px"
          sx={{
            fontWeight: "bold",
            // fontSize: "100px",
            // color: "rgb(208, 251, 251)",
            color: "rgb(201, 239, 233)",

            flexGrow: 1,
            // bgcolor: "rgba(53, 39, 90, 0.761)",
            bgcolor: "rgb(60 57 67 / 70%)",
            display: "flex",
            height: "auto",
          }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              mt: "55px",
              width: "100%",
              height: "500px",
              backgroundColor: "rgba(249, 246, 246, 0.968)",
              borderRight: 4,
              borderColor: "orange",
            }}>
            <Tab
              sx={{ my: "5px" }}
              style={{ color: "orange" }}
              label="Все категории"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ my: "5px" }}
              style={{ color: "orange" }}
              label="Бокол по барашкам"
              {...a11yProps(1)}
            />
            <Tab
              sx={{ my: "5px" }}
              style={{ color: "orange" }}
              label="Бокол по уйам"
              {...a11yProps(2)}
            />
            <Tab
              sx={{ my: "5px" }}
              style={{ color: "orange" }}
              label="бокол по жылкылар"
              {...a11yProps(3)}
            />
            <Tab
              sx={{ my: "5px" }}
              style={{ color: "orange" }}
              label="Келинка на час"
              {...a11yProps(3)}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Typography
              variant="h6"
              borderRadius="4px"
              textAlign="center"
              mx="auto"
              width="30%"
              color="orange"
              backgroundColor="rgba(249, 246, 246, 0.868)">
              Все категории
            </Typography>
            {/* <ProductList /> */}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography
              variant="h6"
              borderRadius="4px"
              textAlign="center"
              mx="auto"
              width="30%"
              color="orange"
              backgroundColor="rgba(249, 246, 246, 0.868)">
              бокол по барашкам
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography
              variant="h6"
              borderRadius="4px"
              textAlign="center"
              mx="auto"
              width="30%"
              color="orange"
              backgroundColor="rgba(249, 246, 246, 0.868)">
              бокол по уйам
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Typography
              variant="h6"
              borderRadius="4px"
              textAlign="center"
              mx="auto"
              width="30%"
              color="orange"
              backgroundColor="rgba(249, 246, 246, 0.868)">
              бокол по жылкы
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Typography
              variant="h6"
              borderRadius="4px"
              textAlign="center"
              mx="auto"
              width="30%"
              color="orange"
              backgroundColor="rgba(249, 246, 246, 0.868)">
              келинка на час
            </Typography>
          </TabPanel>
        </Box>
      </Box>
    </>
  );
};

export default Servises;
