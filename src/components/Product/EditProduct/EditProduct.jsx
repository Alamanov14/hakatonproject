// import React from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../../context/ProductContextProvaider";
import { useEffect } from "react";
const EditProduct = () => {
  const { saveEditedProduct, getProductDetails, productDetails } = useProduct();

  const navigate = useNavigate();

  const [product, setProduct] = React.useState(productDetails);
  const { id } = useParams();
  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  useEffect(() => {
    getProductDetails(id);
  }, []);

  console.log(product);

  function inputData(e) {
    if (e.target.name == "price") {
      let obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      let obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  }
  return (
    <>
      <Container>
        <Box
          component="form"
          sx={{
            width: "40vw",
            margin: "5vh auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "30px",
            padding: "20px",
          }}
          noValidate
          autoComplete="off"
        >
          <h1 onClick={() => navigate(`/`)}>Измнение продукта</h1>

          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            name="name"
            onChange={inputData}
            value={product.name || ""}
          />
          <TextField
            id="outlined-basic"
            label="picture"
            variant="outlined"
            name="picture"
            onChange={inputData}
            value={product.picture || ""}
          />
          <TextField
            id="outlined-basic"
            label="category"
            variant="outlined"
            name="category"
            onChange={inputData}
            value={product.category || ""}
          />
          <TextField
            id="outlined-basic"
            label="price"
            variant="outlined"
            name="price"
            onChange={inputData}
            value={product.price || ""}
          />
          <TextField
            id="outlined-basic"
            label="description"
            variant="outlined"
            name="description"
            onChange={inputData}
            value={product.description || ""}
          />
          <Button
            onClick={() => {
              saveEditedProduct(product);
              navigate("/shop");
              console.log(product);
            }}
          >
            Save changes
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default EditProduct;
