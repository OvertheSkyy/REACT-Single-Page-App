import React from "react";
import "./toggle.css";
import On from "./on.png";
import Off from "./off.png";
import { useContext } from "react";
import { ThemeContext } from "./context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return React.createElement(
    "div",
    { className: "t" },
    React.createElement("img", { src: On, alt: "", className: "t-icon" }),
    React.createElement("img", { src: Off, alt: "", className: "t-icon" }),
    React.createElement("div", {
      className: "t-button",
      onClick: handleClick,
      style: { left: theme.state.darkMode ? 0 : 25 }
    })
  );
};

export default Toggle;

