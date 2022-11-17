import React from "react";
import ConCom from "./Components/ConCom/ConCom";

import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";

import AuthenticContextProvider from "./Contexts/AuthenticContextProvider";
import CartContextProvider from "./Contexts/CartContextProvider";
import ComContextProvider from "./Contexts/ComContextProvider";
import ProductContextProvider from "./Contexts/ProductContextProvider";
import MainRoutes from "./MainRotes";

const App = () => {
  return (
    <>
      <ComContextProvider>
        <AuthenticContextProvider>
          <CartContextProvider>
            <ProductContextProvider>
              <NavBar />
              <MainRoutes />
              <Footer />
            </ProductContextProvider>
          </CartContextProvider>
        </AuthenticContextProvider>
      </ComContextProvider>
    </>
  );
};

export default App;
