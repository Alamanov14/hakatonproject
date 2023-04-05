import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvaider";
import CardProduct from "../Product/AddProduct.jsx/CardRoduct";
import "../Filter/Filter.css";
const Filter = ({ currentData }) => {
  const [selectedCategory, setSelectedCategory] = useState("всe");

  const categories = [
    "все",
    ...new Set(currentData().map((product) => product.category)),
  ];

  const filteredProducts = currentData().filter((product) =>
    selectedCategory === "все" ? true : product.category === selectedCategory
  );

  return (
    <div className="filter__page">
      <div className="categorey__div">
        <span className="choose__category">Выберите категорию:</span>
        {categories.map((category) => (
          <button
            className="category__btn"
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              fontWeight: selectedCategory === category ? "bold" : "normal",
              backgroundColor:
                selectedCategory === category ? "black" : "white",
              border: selectedCategory === category ? "black" : "black ",
              color: selectedCategory === category ? "white" : "black ",
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product__card">
        {filteredProducts.map((item) => (
          <CardProduct item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
