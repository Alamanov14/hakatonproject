import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContextProvider";
import "../Order/Order.css";
import "../Order/OrderAdap.css";

const Order = () => {
  const { cart, getCart } = useCart();

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [country, setСountry] = useState("");
  const [siti, setCiti] = useState("");
  const [street, setStreet] = useState("");
  const [home, sethome] = useState("");
  const [apartment, setApartment] = useState("");
  const navigate = useNavigate();

  const handleValues = () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !message.trim() ||
      !country.trim() ||
      !siti.trim() ||
      !home.trim() ||
      !street.trim() ||
      !apartment.trim()
    ) {
      alert("заполните поля");
      return;
    }

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setСountry("");
    setCiti("");
    setStreet("");
    sethome("");
    setApartment("");
  };

  return (
    <div className="order">
      <div className="order_div_top">
        <h1 className="order_div_top_h1">Оформление заказа</h1>
        <div className="order_div_top_div_p">
          <p className="order_div_top_p">Главная </p>
          <p className="order_div_top_pp">— Оформление заказа</p>
        </div>
      </div>
      <div className="order_center">
        <div className="order_center_left">
          <h1 className="order_center_left_h1">Данные покупателя</h1>
          <TextField
            onChange={(e) => setName(e.target.value)}
            className="order_center_left_inp"
            id="standard-basic"
            label="Имя"
            variant="standard"
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            className="order_center_left_inp"
            id="standard-basic"
            label="E-mail"
            variant="standard"
          />
          <TextField
            onChange={(e) => setPhone(e.target.value)}
            className="order_center_left_inp"
            id="standard-basic"
            label="Телефон"
            variant="standard"
          />
        </div>
        <div className="order_center_right">
          <h1 className="order_center_right_h1">Ваш заказ</h1>
          <p className="order_center_right_p">Товар -- Всего</p>
          {cart?.products.map((row) => (
            <p className="order_center_right_pp">Итого -- {row.subPrice} $</p>
          ))}
        </div>
      </div>
      <div className="order_bottom">
        <div className="order_bottom_left">
          <h1 className="order_bottom_left_h1">Данные покупателя</h1>
          <TextField
            onChange={(e) => setСountry(e.target.value)}
            className="order_center_left_inp"
            id="standard-basic"
            label="Страна"
            variant="standard"
          />
          <TextField
            onChange={(e) => setCiti(e.target.value)}
            className="order_center_left_inp"
            id="standard-basic"
            label="Город"
            variant="standard"
          />
          <TextField
            onChange={(e) => setStreet(e.target.value)}
            className="order_center_left_inp"
            id="standard-basic"
            label="Улица"
            variant="standard"
          />
          <TextField
            onChange={(e) => sethome(e.target.value)}
            className="order_center_left_inp"
            id="standard-basic"
            label="Дом"
            variant="standard"
          />
          <TextField
            onChange={(e) => setApartment(e.target.value)}
            className="order_center_left_inp"
            id="standard-basic"
            label="Квартира"
            variant="standard"
          />
          <TextField
            onChange={(e) => setMessage(e.target.value)}
            className="order_center_left_inp"
            id="standard-basic"
            label="Комментарии"
            variant="standard"
          />
        </div>
        <div className="order_bottom_right">
          <h1 className="order_bottom_right_h1">Способы оплаты</h1>
          <FormControlLabel
            className="order_bottom_right_inp"
            control={<Checkbox defaultChecked />}
            label="Оплата наличными "
          />
          <br />
          <button
            onClick={() => navigate("/Processed")}
            className=" order_bottom_right_button"
          >
            Разместить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
