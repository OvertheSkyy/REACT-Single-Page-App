import React from "react";
import "./about.css";
import Pup from "./pup.png";

export function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://cdn3.vectorstock.com/i/1000x1000/30/37/web-developer-design-vector-5883037.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am a proactive 2nd-year student of Bachelor of Science in Computer Engineering at the Polytechnic University of the Philippines. I am seeking considerable amounts of experience in academic and applied fields of study. I am considered a valuable asset in peer-to-peer, a vital component of a successful company—looking forward to enhancing skills that will help both individuality and the workplace.
        </p>
        <div className="a-award">
          <img src={Pup} alt="" className="a--img" />
          <div className="a-award-texts">
            <h4 className="a-award-title"></h4>
            <p className="a-award-desc">
              Bachelor of Science in Computer Engineering - 2nd Year
            </p>
            <h4 className="a-award-title"></h4>
          </div>
        </div>
      </div>
    </div>
  );
}
