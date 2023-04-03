import { TextField } from "@mui/material";
import React from "react";
import "../ContactPages/ContactPages.css";

const ContactPages = () => {
  return (
    <div className="Contact">
      <div className="Contact_div_con">
        <h2 className="contact_h2">Контакты</h2>
        <div className="contact_div_top">
          <p className="contact_p">Главная — </p>
          <p className="contact_pp">Контакты</p>
        </div>
      </div>
      <div className="contact_cart">
        <iframe
          className="footer_map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.1304438103593!2d4.367699815745808!3d50.8472686795321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c482a7578471%3A0xa7713c3e13f82b7d!2sSouth%20Asia%20Democratic%20Forum!5e0!3m2!1sru!2skg!4v1679565990272!5m2!1sru!2skg"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact_div_center">
        <div className="contact_left">
          <p className="contact_left_p">Телефон</p>
          <p className="contact_left_h5">+7 (495) 823-54-12</p>
        </div>
        <div className="contact_center">
          <p className="contact_center_p">E-mail</p>
          <p className="contact_center_h5">hello@womazing.com</p>
        </div>
        <div className="contact_right">
          <p className="contact_right_p">Адрес</p>
          <p className="contact_right_h5">
            г. Москва, улица Марии Ульяновой 25
          </p>
        </div>
      </div>
      <div className="contact_input">
        <h3 className="contact_h3">Напишите нам</h3>
        <TextField
          className="contact_inp "
          id="standard-basic"
          label="Имя"
          variant="standard"
        />
        <TextField
          className="contact_inp"
          id="standard-basic"
          label="E-mail"
          variant="standard"
        />
        <TextField
          className="contact_inp"
          id="standard-basic"
          label="Телефон"
          variant="standard"
        />
        <TextField
          className="contact_inp"
          id="standard-basic"
          label="Сообщение"
          variant="standard"
        />
      </div>
      <button className="contact_button">Oтправить</button>
    </div>
  );
};

export default ContactPages;
