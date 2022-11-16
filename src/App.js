import React from "react";
import AboutUs from "./Components/AboutUs/AboutUs";
import AddProduct from "./Components/Adminchik/AddProduct/AddProduct";
import EditProduct from "./Components/Adminchik/EditProduct/EditProduct";
import Cart from "./Components/Cart/Cart";
import ConCom from "./Components/ConCom/ConCom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import ModalHome from "./Components/Home/ModalHome/ModalHome";
import HomePage from "./Components/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import ProductCard from "./Components/Products/ProductCard/ProductCard";
import Servises from "./Components/servises/Servises";
import SideBar from "./Components/SideBar/SideBar";
import AuthenticContextProvider from "./Contexts/AuthenticContextProvider";
import ProductContextProvider from "./Contexts/ProductContextProvider";
import MainRoutes from "./MainRotes";

const App = () => {
  return (
    <>
      <AuthenticContextProvider>
        <ProductContextProvider>
          {/* <SideBar /> */}
          <NavBar />
          <MainRoutes />
          {/* <ConCom /> */}
          {/* <Cart /> */}
          {/* <AddProduct />
      <EditProduct /> */}
          {/* <HomePage /> */}
          {/* <ModalHome /> */}

          {/* <Servises /> */}
          {/* <ProductCard /> */}

          <Footer />
        </ProductContextProvider>
      </AuthenticContextProvider>
    </>
  );
};

export default App;
