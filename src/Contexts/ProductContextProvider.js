import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const productContext = createContext(); // облако

const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: null,
  productCard: null,
  pageTotalCount: 1,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...prevState,
        product: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };
    case "GET_ONE_PRODUCT":
      return { ...prevState, productCard: action.payload };
    default:
      return prevState;
  }
}

const ProductContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [inpValues, setInpValues] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  // create
  async function addProduct(newProduct) {
    try {
      await axios.post(API, newProduct);
      readProduct();
      navigate("/servises");
    } catch (error) {
      return error;
    }
  }

  //   read
  // console.log(location.search);
  async function readProduct() {
    const res = await axios(`${API}${location.search}`);
    dispatch({
      type: "GET_PRODUCT",
      payload: res,
    });
  }
  //   readProduct();
  //   console.log(state);

  //readOneProduct

  async function readOneProduct(id) {
    try {
      const { data } = await axios(`${API}/${id}`);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }
  // readOneProduct(1);

  // delete
  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
      readProduct();
      navigate("/servises");
    } catch (error) {
      return error;
    }
  }

  //edit

  async function editProduct(id, editedObj) {
    try {
      await axios.patch(`${API}/${id}`, editedObj);
      readProduct();
    } catch (error) {
      return error;
    }
  }

  let cloud = {
    addProduct,
    readProduct,
    deleteProduct,
    readOneProduct,
    editProduct,

    productsArr: state.product,
    productCard: state.productCard,
    pageTotalCount: state.pageTotalCount,
    inpValues,
    setInpValues,
  };

  return (
    <productContext.Provider value={cloud}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
