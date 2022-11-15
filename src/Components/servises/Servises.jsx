import React from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import { Box } from "@mui/material";

import "../Home/Home.css";
import ProductList from "../Products/ProductList/ProductList";

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
        <Box sx={{ px: 8 }}>
          <Typography>{children}</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}>
            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
          </Box>
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
  return (
    <>
      <Box className="main_box" width="100%">
        <Box
          p="120px 180px 90px"
          sx={{
            fontWeight: "bold",
            // fontSize: "100px",
            color: "rgb(114, 249, 249)",
            flexGrow: 1,
            // bgcolor: "rgba(51, 29, 108, 0.761)",
            bgcolor: "rgb(60 57 67 / 74%)",
            display: "flex",
            height: "auto",
          }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ width: "30%", borderRight: 4, borderColor: "divider" }}>
            <Tab
              style={{ color: "orange" }}
              label="Item One"
              {...a11yProps(0)}
            />
            <Tab
              style={{ color: "orange" }}
              label="Item Two"
              {...a11yProps(1)}
            />
            <Tab
              style={{ color: "orange" }}
              label="Item Three"
              {...a11yProps(2)}
            />
            <Tab
              style={{ color: "orange" }}
              label="Item Four"
              {...a11yProps(3)}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Typography color="orange">Item One</Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography color="orange">Item Two</Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography color="orange">Item 3</Typography>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Typography color="orange">Item 4</Typography>
          </TabPanel>
        </Box>
      </Box>
    </>
  );
};

export default Servises;
