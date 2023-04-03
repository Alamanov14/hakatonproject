import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useProduct } from "../../../context/ProductContextProvaider";
import CardProduct from "../AddProduct.jsx/CardRoduct";
// import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ProductList = () => {
  const { getProducts, products } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const itemsPerPage = 2;
  const count = Math.ceil(products.length / itemsPerPage);

  const currentData = () => {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  };

  return (
    <div>
      {" "}
      <Box id="list_card">
        {currentData().map((item) => (
          <CardProduct item={item} key={item.id} />
        ))}
      </Box>
      {/* <Pagination /> */}
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
};

export default ProductList;
