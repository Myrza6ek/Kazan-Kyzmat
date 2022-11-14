import React from "react";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import ModalHome from "./Components/Home/ModalHome/ModalHome";
import HomePage from "./Components/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import ProductCard from "./Components/Products/ProductCard/ProductCard";
import Servises from "./Components/servises/Servises";
import SideBar from "./Components/SideBar/SideBar";

const App = () => {
  return (
    <>
      {/* <SideBar /> */}
      <NavBar />
      <HomePage />
      <ModalHome />
      <AboutUs />
      <Servises />
      {/* <ProductCard /> */}

      <Footer />
    </>
  );
};

export default App;
