import React, { useState } from "react";
import { useProduct } from "../../context/ProductContextProvaider";
import CardProduct from "../Product/AddProduct.jsx/CardRoduct";

const Filter = ({ currentData }) => {
  //   const { products } = useProduct;
  const [selectedCategory, setSelectedCategory] = useState("всe");

  const categories = [
    "все",
    ...new Set(currentData().map((product) => product.category)),
  ];

  const filteredProducts = currentData().filter((product) =>
    selectedCategory === "все" ? true : product.category === selectedCategory
  );

  //   console.log(filteredProducts);

  return (
    <div>
      <div>
        <span>Выберите категорию:</span>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              fontWeight: selectedCategory === category ? "bold" : "normal",
            }}
          >
            {category}
            {console.log(categories)}
          </button>
        ))}
      </div>
      <div>
        {filteredProducts.map((item) => (
          <CardProduct item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
