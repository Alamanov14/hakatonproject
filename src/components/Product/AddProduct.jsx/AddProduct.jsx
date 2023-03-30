// import React from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { width } from "@mui/system";

const AddProduct = () => {
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
          <TextField id="outlined-basic" label="name" variant="outlined" />
          <TextField id="outlined-basic" label="picture" variant="outlined" />
          <TextField id="outlined-basic" label="category" variant="outlined" />
          <TextField id="outlined-basic" label="price" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="description"
            variant="outlined"
          />
        </Box>
      </Container>
    </>
  );
};

export default AddProduct;
