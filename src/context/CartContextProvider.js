import React, { createContext, useContext, useReducer } from "react";
import { CART } from "../helpers/consts";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/functions";

// Создаем контекст для корзины
export const cartContext = createContext();

// Создаем хук для использования контекста корзины
export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCountProductsInCart(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    // Получаем текущее состояние корзины
    case CART.GET_CART:
      return { ...state, cart: action.payload };

    // Получаем количество товаров в корзине
    case CART.GET_CART_LENGTH:
      return { ...state, cartLength: action.payload };

    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // Получаем текущее состояние корзины из localStorage
  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    // Если корзины нет, то создаем пустую корзину в localStorage
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ products: [], totalPrice: 0 })
      );
      cart = { products: [], totalPrice: 0 };
    }

    dispatch({ type: CART.GET_CART, payload: cart });
  };

  // Добавляем товар в корзину
  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    // Если корзины нет, то создаем пустую корзину
    if (!cart) {
      cart = { products: [], totalPrice: 0 };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = cart.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length === 0) {
      // Если товара нет в корзине, то добавляем его
      cart.products.push(newProduct);
    } else {
      // Если товар уже есть в корзине, то удаляем его
      cart.products = cart.products.filter(
        (elem) => elem.item.id != product.id
      );
    }

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };
  // Проверяем, есть ли товар в корзине по его id
  function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      let newCart = cart.products.filter((elem) => elem.item.id == id);
      return newCart.length > 0 ? true : false;
    }
  }

  // Изменяем количество товара в корзине

  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((product) => {
      if (product.item.id == id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({ type: CART.GET_CART, payload: cart });
  };

  function deleteCartProduct(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((elem) => elem.item.id != id);
    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  const values = {
    getCart,
    cart: state.cart,
    addProductToCart,
    checkProductInCart,
    changeProductCount,
    deleteCartProduct,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
