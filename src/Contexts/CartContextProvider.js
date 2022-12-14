import React, { createContext, useReducer } from "react";

export const cartContext = createContext();

function getCountProductsCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
}

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartCount: getCountProductsCart(),
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_CART":
      return { ...prevState, cart: action.payload };
    case "CHANGE_CART_COUNT":
      return {
        ...prevState,
        cartCount: action.payload,
      };
    default:
      return prevState;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addProductToCart(productObj) {
    // console.log(productObj, "productObj");
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: productObj,
      count: 1,
      subPrice: productObj.price,
    };

    // Хранение дубликатов
    let filterCart = cart.products.filter(elem => {
      return elem.item.id === productObj.id;
    });

    if (filterCart.length > 0) {
      cart.products = cart.products.filter(elem => {
        return elem.item.id !== productObj.id;
      });
    } else {
      cart.products.push(newProduct);
    }
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.products.length,
    });
  }

  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  }

  function changeProductCount(id, count) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map(elem => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = count * elem.item.price; // vy4eslenie cwny tovara v zavisimosti ot ego kol-va
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  function calcTotalPrice(products) {
    let total = 0;
    products.map(item => {
      total += item.subPrice;
    });
    return total;
  }

  function deleteCartProduct(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter(elem => {
      return elem.item.id !== id;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.products.length,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  const cloud = {
    addProductToCart,
    getCart,
    changeProductCount,
    deleteCartProduct,
    productsInCart: state.cart,
    cartCount: state.cartCount,
  };

  return (
    <div>
      <cartContext.Provider value={cloud}>{children}</cartContext.Provider>
    </div>
  );
};

export default CartContextProvider;
