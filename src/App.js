import React from "react";
import AboutUs from "./Components/AboutUs/AboutUs";
import AddProduct from "./Components/Adminchik/AddProduct/AddProduct";
import EditProduct from "./Components/Adminchik/EditProduct/EditProduct";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import ModalHome from "./Components/Home/ModalHome/ModalHome";
import HomePage from "./Components/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import ProductCard from "./Components/Products/ProductCard/ProductCard";
import Servises from "./Components/servises/Servises";
import SideBar from "./Components/SideBar/SideBar";
import AuthenticContextProvider from "./Contexts/AuthenticContextProvider";
import MainRoutes from "./MainRotes";

const App = () => {
  return (
    <>
      <AuthenticContextProvider>
        {/* <SideBar /> */}
        <NavBar />
        <MainRoutes />
        {/* <Cart /> */}
        {/* <AddProduct />
      <EditProduct /> */}
        {/* <HomePage /> */}
        {/* <ModalHome /> */}

        {/* <Servises /> */}
        {/* <ProductCard /> */}

        <Footer />
      </AuthenticContextProvider>
    </>
  );
};

export default App;
