import React, { createContext, useContext, useReducer } from "react";
import { CART } from "../helpers/consts";
import { calcTotalPrice, getCountProductsInCart } from "../helpers/functions";

// Создаем контекст для корзины
export const favoriteContext = createContext();

// Создаем хук для использования контекста корзины
export const useFavorite = () => useContext(favoriteContext);

const INIT_STATE = {
  favorite: JSON.parse(localStorage.getItem("favorite")),
  cartLength: getCountProductsInCart(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    // Получаем текущее состояние корзины
    case CART.GET_CART:
      return { ...state, favorite: action.payload };

    // Получаем количество товаров в корзине
    case CART.GET_CART_LENGTH:
      return { ...state, cartLength: action.payload };

    default:
      return state;
  }
}

const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProductToFavorite = (product) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));

    if (!favorite) {
      favorite = { products: [], totalPrice: 0 };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = favorite.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length === 0) {
      favorite.products.push(newProduct);
    } else {
      favorite.products = favorite.products.filter(
        (elem) => elem.item.id != product.id
      );
    }

    favorite.totalPrice = calcTotalPrice(favorite.products);
    localStorage.setItem("favorite", JSON.stringify(favorite));

    dispatch({
      type: CART.GET_CART,
      payload: favorite,
    });
  };

  const getFavorite = () => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      localStorage.setItem(
        "favorite",
        JSON.stringify({ products: [], totalPrice: 0 })
      );
      favorite = { products: [], totalPrice: 0 };
    }

    dispatch({ type: CART.GET_CART, payload: favorite });
  };

  function checkProductInFavorite(id) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (favorite) {
      let newCart = favorite.products.filter((elem) => elem.item.id == id);
      return newCart.length > 0 ? true : false;
    }
  }

  // Изменяем количество товара в корзине

  function deleteFavoriteProduct(id) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    favorite.products = favorite.products.filter((elem) => elem.item.id != id);
    favorite.totalPrice = calcTotalPrice(favorite.products);

    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
  }

  const values = {
    favorite: state.favorite,
    checkProductInFavorite,
    deleteFavoriteProduct,
    addProductToFavorite,
    getFavorite,
  };
  return (
    <favoriteContext.Provider value={values}>
      {children}
    </favoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
