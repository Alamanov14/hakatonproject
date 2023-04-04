import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Footer/Footer.css";
const Footer = () => {
  // const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div className="Footer">
        <div className="left">
          <div className="left_logo">
            <img
              className="left_img"
              src="http://womazing.s-host.net/wp-content/uploads/2021/02/logo.svg"
              alt="Error"
            />
          </div>
          <div>
            <p className="left_pp">© Все права защищены</p>
            <p onClick={() => navigate(`/Privacy`)} className="left_p">
              Политика конфиденциальности
            </p>
            <p onClick={() => navigate(`/offer`)} className="left_p">
              Публичная оферта
            </p>
          </div>
        </div>
        <div className="center">
          <div>
            <p className="center_p" onClick={() => navigate(`/`)}>
              Главная
            </p>
          </div>
          <div>
            <p className="center_p" onClick={() => navigate(`/shop`)}>
              Магазин
            </p>
            <h6 onClick={() => navigate(`/coat`)} className="center_h6">
              Пальто
            </h6>
            <h6 onClick={() => navigate(`/sweatshirt`)} className="center_h6">
              Свитшоты
            </h6>
            <h6 onClick={() => navigate(`/cardigan`)} className="center_h6">
              Кардиганы
            </h6>
            <h6 onClick={() => navigate(`/hoodies`)} className="center_h6">
              Толстовки
            </h6>
          </div>
          <div>
            <p className="center_p" onClick={() => navigate(`/about`)}>
              О бренде
            </p>
          </div>
          <div>
            <p className="center_p" onClick={() => navigate(`/contact`)}>
              Контакты
            </p>
          </div>
        </div>
        <div className="right">
          <p className="right_p" onClick={() => navigate(`/feedback`)}>
            +7 (495) 823-54-12
          </p>
          <p className="right_p">hello@womazing.com</p>
          <img
            className="right_img"
            src="http://womazing.s-host.net/wp-content/uploads/2021/02/instagram.svg"
            alt=""
          />
          <img
            className="right_img"
            src="http://womazing.s-host.net/wp-content/uploads/2021/02/facebook.svg"
            alt=""
          />
          <img
            className="right_img"
            src="http://womazing.s-host.net/wp-content/uploads/2021/02/twitter.svg"
            alt=""
          />
          <div>
            <img
              className="right_img"
              src="http://womazing.s-host.net/wp-content/uploads/2021/02/visa-mastercard.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
