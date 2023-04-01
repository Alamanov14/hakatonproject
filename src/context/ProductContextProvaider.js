import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/consts";

export const productContext = createContext();
export const useProduct = () => {
  return useContext(productContext);
};
const INIT_STATE = {
  products: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

const ProductContextProvaider = ({ children }) => {
  const [state, diapatch] = useReducer(reducer, INIT_STATE);

  console.log(state);

  // todo  read(get request)
  const getProducts = async () => {
    const { data } = await axios.get(`${API}${window.location.search}`);
    diapatch({ type: "GET_PRODUCTS", payload: data });
  };
  // todo create (post request)
  // todo Delete
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    getProducts();
  };
  const values = {
    products: state.products,
    getProducts,
    addProduct,
    deleteProduct,
  };
  console.log(values.products);
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvaider;
