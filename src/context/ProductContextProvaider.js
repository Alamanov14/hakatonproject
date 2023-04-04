import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { API } from "../helpers/consts";

export const productContext = createContext();
export const useProduct = () => {
  return useContext(productContext);
};
const INIT_STATE = {
  products: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
};

const ProductContextProvaider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  console.log(state);

  // todo  read(get request)
  const getProducts = async () => {
    const { data } = await axios.get(`${API}${window.location.search}`);
    dispatch({ type: "GET_PRODUCTS", payload: data });
  };
  // todo create (post request)

  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    getProducts();
  };
  // todo Delete
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };
  //todo get product details
  const getProductDetails = async (id) => {
    const { data } = await axios.get(`${API}/${id}`);
    dispatch({ type: "GET_PRODUCT_DETAILS", payload: data });
  };

  // todo save edit
  const saveEditedProduct = async (editedProduct) => {
    await axios.patch(`${API}/${editedProduct.id}`, editedProduct);
    getProducts();
  };
  // todo live search
  const [modalActive, setModalActive] = useState(false);

  const values = {
    products: state.products,
    getProducts,
    addProduct,
    deleteProduct,
    saveEditedProduct,
    getProductDetails,
    productDetails: state.productDetails,
    modalActive,
    setModalActive,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvaider;
