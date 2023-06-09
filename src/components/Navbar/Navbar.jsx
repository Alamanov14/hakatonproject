import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import "./NavbarAdaptive.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Favorite } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { display, style } from "@mui/system";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useProduct } from "../../context/ProductContextProvaider";
import { Badge } from "@mui/material";
import { useCart } from "../../context/CartContextProvider";
import { getCountProductsInCart } from "../../helpers/functions";
import Search from "../Search/Search";
import { useAuth } from "../../context/AuthContextProvier";
import Burger from "../BuregerMenu/Burger";

export default function Navbar() {
  const navigate = useNavigate();

  const { modalActive, setModalActive, getProducts } = useProduct();
  const [count, setCount] = React.useState(0);
  const { addProductToCart } = useCart();

  const {
    handleLogout,
    user: { email },
  } = useAuth();

  React.useEffect(() => {
    setCount(getCountProductsInCart());
  }, [addProductToCart]);

  function shopViewer() {
    navigate("/shop");
    setModalActive(true);
    // console.log(modalActive);
    getProducts();
  }
  return (
    <div>
      <div className="nav_logo">
        <img src="http://womazing.s-host.net/wp-content/uploads/2021/02/logo.svg" />
      </div>
      <div className="burger__div">
        <div className="header__bureger">
          <Burger />
        </div>

        <Box sx={{ flexGrow: 2, color: "black" }} className="nav">
          <AppBar className="NavbarMain" position="static" id="app_bar">
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: " 0 200px",
                color: "black",
              }}
              className="toolbar__end"
            >
              <Typography
                component="a"
                href="/"
                marginBottom="-10px"
                marginRight="200px"
                className="LogoMAin"
              >
                <img
                  src="http://womazing.s-host.net/wp-content/uploads/2021/02/logo.svg"
                  alt="image"
                  border="0"
                />
              </Typography>
              <Box
                className="NavbarLeft"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  id="Navbar_Navigation"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Button
                    variant="h6"
                    component="a"
                    href="/"
                    sx={{
                      textTransform: "none",
                    }}
                  >
                    Главная
                  </Button>
                  <Button
                    className="NavbarButton"
                    variant="h6"
                    component="a"
                    onClick={() => shopViewer()}
                    sx={{
                      textTransform: "none",
                    }}
                  >
                    Магазин
                  </Button>
                  <Button
                    className="NavbarButton"
                    variant="h6"
                    component="a"
                    onClick={() => navigate("/about")}
                    sx={{
                      textTransform: "none",
                    }}
                  >
                    О бренде
                  </Button>
                  <Button
                    className="NavbarButton"
                    variant="h6"
                    component="a"
                    onClick={() => navigate("/contact")}
                    sx={{
                      textTransform: "none",
                    }}
                  >
                    Контакты
                  </Button>
                </Typography>
              </Box>

              <Box
                className="NavbarRight"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Box
                  className="Call"
                  component="a"
                  href="tel:+720(495)20823-54-12"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "50px",
                  }}
                >
                  <CallIcon />
                  {/* <p> +7 (495) 823-54-12</p> */}
                </Box>

                <Badge badgeContent={count} color="primary">
                  <LocalMallIcon onClick={() => navigate("/cart")} />
                </Badge>

                <Favorite onClick={() => navigate("/favorite")} />
                {email ? (
                  <Button
                    onClick={handleLogout}
                    sx={{ my: 2, display: "block" }}
                  >
                    <Typography id="pages_link">Logout</Typography>
                  </Button>
                ) : (
                  <Button
                    onClick={() => navigate("/login")}
                    sx={{ my: 2, display: "block" }}
                  >
                    <Typography id="pages_link">Login</Typography>
                  </Button>
                )}
                {window.location.pathname === "/shop" ? (
                  <Search setActive={setModalActive} />
                ) : null}
                {console.log(modalActive)}
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </div>
  );
}
