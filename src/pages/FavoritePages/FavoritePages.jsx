import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useFavorite } from "../../context/FavoriteContextProvider";

export default function FavoritePages() {
  const { getFavorite, favorite, deleteFavoriteProduct } = useFavorite();

  React.useEffect(() => {
    getFavorite();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("favorite");
    getFavorite();
  };
  return (
    <div>
      {favorite?.products.map((row) => (
        <Card key={row.item.id} sx={{ maxWidth: 345 }}>
          <CardMedia
            scope="row"
            component="img"
            alt="green iguana"
            height="140"
            image={row.item.picture}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {row.item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {row.item.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {row.item.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {row.item.type}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => deleteFavoriteProduct(row.item.id)}
              size="small"
            >
              Share
            </Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
