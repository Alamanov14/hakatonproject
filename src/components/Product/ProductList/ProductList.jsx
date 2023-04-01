import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useProduct } from "../../../context/ProductContextProvaider";
import CardProduct from "../AddProduct.jsx/CardRoduct";

const ProductList = () => {
  const { getProducts, products } = useProduct();
  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {" "}
      <Box id="list_card">
        {products.map((item) => (
          <CardProduct item={item} key={item.id} />
        ))}
      </Box>
    </div>
  );
};

export default ProductList;
