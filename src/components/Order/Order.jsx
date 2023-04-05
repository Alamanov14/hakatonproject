import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import "../Order/Order.css";

const Order = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Address: ${address}, Phone: ${phone}`);
  };

  return (
    <div className="order">
      <div className="order_div_top">
        <h1 className="order_div_top_h1">О бренде</h1>
        <div className="order_div_top_div_p">
          <p className="order_div_top_p">Главная </p>
          <p className="order_div_top_pp">— О бренде</p>
        </div>
      </div>
      <div className="order_center">
        <div className="order_center_left">
          <h1 className="order_center_left_h1">Данные покупателя</h1>
          <TextField id="standard-basic" label="Имя" variant="standard" />
          <TextField id="standard-basic" label="E-mail" variant="standard" />
          <TextField id="standard-basic" label="Телефон" variant="standard" />
        </div>
        <div className="order_center_right">
          <h1 className="order_center_right_h1">Ваш заказ</h1>
          <p className="order_center_right_p">Товар</p>
          <p className="order_center_right_p">Джемпер Jaklin - S, Коричневый</p>
          <p className="order_center_right_p">Подытог</p>
          <p className="order_center_right_p">Итого</p>
        </div>
      </div>
      <div className="order_bottom">
        <div className="order_bottom_left">
          <h1 className="order_bottom_left_h1">Данные покупателя</h1>
          <TextField id="standard-basic" label="Страна" variant="standard" />
          <TextField id="standard-basic" label="Город" variant="standard" />
          <TextField id="standard-basic" label="Улица" variant="standard" />
          <TextField id="standard-basic" label="Дом" variant="standard" />
          <TextField id="standard-basic" label="Квартира" variant="standard" />
          <TextField
            id="standard-basic"
            label="Комментарии"
            variant="standard"
          />
        </div>
        <div className="order_bottom_right">
          <h1 className="order_bottom_right_h1">Способы оплаты</h1>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Оплата наличными"
          />
          <button className=" order_bottom_right">Разместить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
