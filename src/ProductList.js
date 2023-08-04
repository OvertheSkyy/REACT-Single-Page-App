import React from "react";
import "./productList.css";
import Product from "./Product";
import { products } from "./data";

const ProductList = () => {
  return React.createElement(
    "div",
    { className: "pl" },
    React.createElement(
      "div",
      { className: "pl-texts" },
      React.createElement(
        "h1",
        { className: "pl-title" },
        "List of Services"
      ),
      React.createElement(
        "p",
        { className: "pl-desc" },
        "Here are the list of services that I provide. Web Development. Quality Assurance. Technical."
      )
    ),
    React.createElement(
      "div",
      { className: "pl-list" },
      products.map(item => React.createElement(Product, { key: item.id, img: item.img, link: item.link }))
    )
  );
};

export default ProductList;

