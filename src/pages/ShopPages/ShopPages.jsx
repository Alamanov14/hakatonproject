import { Box } from "@mui/material";
import React from "react";
import CardProduct from "../../components/Product/AddProduct.jsx/CardRoduct";
import ProductList from "../../components/Product/ProductList/ProductList";
import "../ShopPages/ShopStyle.css";
const ShopPages = () => {
  return (
    <div className="shop__style">
      <ProductList />
    </div>
  );
};

export default ShopPages;
