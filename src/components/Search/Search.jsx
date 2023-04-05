import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContextProvaider";
import "../Search/Search.css";
const Search = () => {
  const { modalActive, setModalActive } = useProduct();

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const { getProducts } = useProduct();
  useEffect(() => {
    setSearchParams({ q: search });
    getProducts();
  }, [search]);

  //   setActive(false);
  return (
    <div className={modalActive ? "modal active" : "modal"}>
      <input
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="input__modal"
      />
    </div>
  );
};

export default Search;
