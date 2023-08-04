import React from "react";
import "./introduction.css";
import Me from "./gojo.png";
import Logo from "./pup.png"

const Intro = () => {
  return React.createElement(
    "div",
    { className: "i" },
    React.createElement(
      "div",
      { className: "i-left" },
      React.createElement(
        "div",
        { className: "i-left-wrapper" },
        React.createElement(
          "h1",
          { style: { fontSize: 40 }, className: "i-name" },
          "Gaeus Caskie Fabro"
        ),
        React.createElement(
          "div",
          { className: "i-title" },
          React.createElement(
            "div",
            { className: "i-title-wrapper" },
            React.createElement(
              "div",
              { style: { color: 'red' }, className: "i-title-item" },
              "Bayan"
            ),
            React.createElement(
              "div",
              { style: { color: 'blue' }, className: "i-title-item" },
              "Academy"
            ),
            React.createElement(
              "div",
              { className: "i-title-item" },
              "Student"
            )
          )
        ),
      ),
    ),
    React.createElement(
      "div",
      { className: "i-right" },
      React.createElement("div", { className: "i-bg" }),
      React.createElement("img", { src: Me, alt: "", className: "i-img" })
    )
  );
};

export default Intro;

