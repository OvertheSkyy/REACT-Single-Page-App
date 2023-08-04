import React from "react";
import "./product.css";

const Product = ({ img, link }) => {
  return React.createElement(
    "div",
    { className: "p" },
    React.createElement(
      "div",
      { className: "p-browser" },
      React.createElement("div", { className: "p-circle" }),
      React.createElement("div", { className: "p-circle" }),
      React.createElement("div", { className: "p-circle" })
    ),
    React.createElement(
      "a",
      { href: link, target: "_blank", rel: "noreferrer" },
      React.createElement("img", { src: img, alt: "", className: "p-img" })
    )
  );
};

export default Product;

