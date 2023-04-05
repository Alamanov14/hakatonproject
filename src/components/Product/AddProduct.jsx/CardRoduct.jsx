import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProduct } from "../../../context/ProductContextProvaider";
import { useNavigate } from "react-router";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { IconButton } from "@mui/material";
import { useCart } from "../../../context/CartContextProvider";
import { Favorite } from "@mui/icons-material";
import { useFavorite } from "../../../context/FavoriteContextProvider";
import "../AddProduct.jsx/CardProduct.css";
export default function CardProduct({ item }) {
  const { deleteProduct, getProducts } = useProduct();

  const navigate = useNavigate();
  const { addProductToCart, checkProductInCart } = useCart();
  const { addProductToFavorite, checkProductInFavorite } = useFavorite();
  return (
    <div className="card__element">
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia sx={{ height: 598 }} image={item.picture} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.type}
          </Typography>
        </CardContent>
        <CardActions className="card__button">
          <Button size="small" onClick={() => deleteProduct(item.id)}>
            delete
          </Button>
          <Button size="small" onClick={() => navigate(`/editPage/${item.id}`)}>
            Edit
          </Button>
          {/* <Button size="small">details</Button> */}
          <IconButton onClick={() => addProductToCart(item)}>
            <LocalMallIcon
              color={checkProductInCart(item.id) ? "primary" : ""}
            />
          </IconButton>
          <IconButton onClick={() => addProductToFavorite(item)}>
            <Favorite
              color={checkProductInFavorite(item.id) ? "primary" : ""}
            />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
