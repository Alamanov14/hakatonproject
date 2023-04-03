import React from "react";
import { useNavigate } from "react-router-dom";
import "../AboutPages/AboutPaged.css";

const AboutPages = () => {
  const navigate = useNavigate();
  return (
    <div className="AboutPagess">
      <div className="AboutPages_div_top">
        <h1 className="AboutPages_div_top_h1">О бренде</h1>
        <div className="AboutPages_div_top_div_p">
          <p className="AboutPages_div_top_p">Главная </p>
          <p className="AboutPages_div_top_pp">— О бренде</p>
        </div>
      </div>
      <div className="AboutPages_div_center">
        <div className="AboutPages_div_center_left">
          <img
            src="http://womazing.s-host.net/wp-content/uploads/2021/03/about-pictures1.jpg"
            alt=""
          />
        </div>
        <div className="AboutPages_div_center_right">
          <h4 className="AboutPages_div_center_right_h4">Идея и женщина</h4>
          <p className="AboutPages_div_center_right_p">
            Womazing была основана в 2010-ом и стала одной из самых успешных
            компаний нашей страны. Как и многие итальянские фирмы, Womazing
            остаётся семейной компанией, хотя ни один из членов семьи не
            является модельером. <br />
            <br /> Мы действуем по успешной формуле, прибегая к услугам
            известных модельеров для создания своих коллекций. Этот метод был
            описан критиком моды Колином Макдауэллом как форма дизайнерского
            со-творчества, характерная для ряда итальянских prêt-a-porter
            компаний.
          </p>
        </div>
      </div>
      <div className="AboutPages_div_bottom">
        <div className="AboutPages_div_bottom_left">
          <h4 className="AboutPages_div_bottom_left_h4">Магия в деталях</h4>
          <p className="AboutPages_div_bottom_left_p">
            Первый магазин Womazing был открыт в маленьком городке на севере
            страны в 2010-ом году. Первая коллекция состояла из двух пальто и
            костюма, которые были копиями парижских моделей. <br />
            <br />
            Несмотря на то, что по образованию основательница была адвокатом, ее
            семья всегда была тесно связана с шитьём (прабабушка основательницы
            шила одежду для женщин, а мать основала профессиональную школу кроя
            и шитья). Стремление производить одежду для масс несло в себе
            большие перспективы, особенно в то время, когда высокая мода
            по-прежнему доминировала, а рынка качественного prêt-a-porter
            попросту не существовало.
          </p>
        </div>
        <div className="AboutPages_div_bottom_right">
          <img
            src="http://womazing.s-host.net/wp-content/uploads/2021/03/about-pictures2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="AboutPages_div_buttom">
        <button onClick={() => navigate("/shop")} className="AboutPages_buttom">
          Перейти в магазин
        </button>
      </div>
    </div>
  );
};

export default AboutPages;
