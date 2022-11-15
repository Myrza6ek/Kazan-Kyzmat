import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
// import ProductDetails from "./Components/Products/ProductDetails/ProductDetails";
// import EditProduct from "./Components/Admin/EditProduct/EditProduct";
// import Basket from "./Components/Basket/Basket";
// import Authorization from "./Components/Auth/Authorization";
import ProductList from "./Components/Products/ProductList/ProductList";
import Authentic from "./Components/Authentic/Authentic";
import AddProduct from "./Components/Adminchik/AddProduct/AddProduct";
import AboutUs from "./Components/AboutUs/AboutUs";
import Servises from "./Components/servises/Servises";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Authentic />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/list" element={<ProductList />} />
      <Route path="/servises" element={<Servises />} />
      {/* <Route path="/details/:id" element={<ProductDetails />} /> */}
      {/* <Route path="/edit/:id" element={<EditProduct />} /> */}
    </Routes>
  );
};

export default MainRoutes;
