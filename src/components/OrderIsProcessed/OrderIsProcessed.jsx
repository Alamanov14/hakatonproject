import React from "react";
import { useNavigate } from "react-router-dom";
import "../OrderIsProcessed/Processed.css";
import "../OrderIsProcessed/ProcessedAdap.css";

const OrderIsProcessed = () => {
  const navigate = useNavigate();
  return (
    <div className="Processed">
      <div className="Processeddd">
        <div>
          <img
            className="
          Processed_img"
            src="http://womazing.s-host.net/wp-content/themes/womazing/img/icon-success.svg"
            alt=""
          />
        </div>
        <div>
          <p className="ppp">
            Заказ успешно оформлен
            <br />
            Мы свяжемся с вами в ближайшее время!
          </p>
        </div>
      </div>
      <div className="Processedd">
        <button onClick={() => navigate("/")} className="button">
          Перейти на главную
        </button>
      </div>
    </div>
  );
};

export default OrderIsProcessed;
