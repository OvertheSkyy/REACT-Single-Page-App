import React from "react";
import "./contact.css";
import Phone from "./phone.png";
import Email from "./email.png";
import Address from "./address.png";

const Contact = () => {
  return React.createElement(
    "div",
    { className: "c" },
    React.createElement("div", { className: "c-bg" }),
    React.createElement(
      "div",
      { className: "c-wrapper" },
      React.createElement(
        "div",
        { className: "c-left" },
        React.createElement(
          "h1",
          { className: "c-title" },
          "Let's discuss YOUR next project!"
        ),
        React.createElement(
          "div",
          { className: "c-info" },
          React.createElement(
            "div",
            { className: "c-info-item" },
            React.createElement("img", { src: Phone, alt: "", className: "c-icon" }),
            "+639567353084"
          ),
          React.createElement(
            "div",
            { className: "c-info-item" },
            React.createElement("img", { className: "c-icon", src: Email, alt: "" }),
            "flyhighbutterfly@gmail.com"
          ),
          React.createElement(
            "div",
            { className: "c-info-item" },
            React.createElement("img", { className: "c-icon", src: Address, alt: "" }),
            "New York City, Cubao, Philippines"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "c-right" },
        React.createElement(
          "p",
          { className: "c-desc" },
          React.createElement(
            "b",
            null,
            "PROJECTS DONE"
          ),
        ),
        React.createElement("img", {
            src: "https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.15752-9/278537902_531449165283031_3020766525464970512_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Qm12Q0YKA5IAX_b1eIt&_nc_ht=scontent.fmnl13-2.fna&oh=03_AVLlU_wL0ZPpSHERBZrW3fhHTMPhG561_zHopHG5OQEo5w&oe=628B648B",
            alt: "",
            className: "a-img"
          }),
        React.createElement(
          "div",
          { className: "c-right" },
          React.createElement(
            "p",
            { className: "c-desc" },
            React.createElement(
              "b",
              null,
              " "
              ),
              React.createElement("img", {
              src: "https://th.bing.com/th/id/OIP._HTK6DZCA3s_Oal3nD42rgHaF4?pid=ImgDet&rs=1",
              alt: "",
              className: "a-img"
          })
          )
        )
      )
    )
  );
};

export default Contact;

