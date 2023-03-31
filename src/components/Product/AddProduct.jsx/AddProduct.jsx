// import React from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../../context/ProductContextProvaider";
const AddProduct = () => {
  const navigate = useNavigate();

  const [product, setProduct] = React.useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
    category: "",
  });

  const { addProduct } = useProduct();
  function inputData(e) {
    if (e.target.name == "price") {
      let obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      let obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  }
  console.log(product);
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
          <h1 onClick={() => navigate(`/`)}>Админская панель</h1>

          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            name="name"
            onChange={inputData}
          />
          <TextField
            id="outlined-basic"
            label="picture"
            variant="outlined"
            name="picture"
            onChange={inputData}
          />
          <TextField
            id="outlined-basic"
            label="category"
            variant="outlined"
            name="category"
            onChange={inputData}
          />
          <TextField
            id="outlined-basic"
            label="price"
            variant="outlined"
            name="price"
            onChange={inputData}
          />
          <TextField
            id="outlined-basic"
            label="description"
            variant="outlined"
            name="description"
            onChange={inputData}
          />
          <Button
            onClick={() => {
              addProduct(product);
              navigate("/shop");
            }}
          >
            Add
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default AddProduct;
