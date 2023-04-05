import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useProduct } from "../../../context/ProductContextProvaider";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Filter from "../../Filter/Filter";
import "../ProductList/ProductList.css";
const ProductList = () => {
  const { getProducts, products } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const itemsPerPage = 5;
  const count = Math.ceil(products.length / itemsPerPage);

  const currentData = () => {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  };

  console.log(products);

  return (
    <div>
      <div>
        <h2>Магазин</h2>
      </div>
      <div className="filter_style">
        <Filter currentData={currentData} />
      </div>

      <Box id="list_card">
        <Stack spacing={2}>
          <Typography>Page: {page}</Typography>
          <Pagination count={count} page={page} onChange={handleChange} />
        </Stack>
      </Box>
    </div>
  );
};

export default ProductList;
