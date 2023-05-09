import React from "react";
import "./styles.css";
import Botao from "./botoesnav.jsx";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <a href="/">
          {" "}
          <img className="logo" src="https://i.imgur.com/YpOLmro.png" />{" "}
        </a>
      </div>
      <ul className="navlinks">
        <li>
          <Botao />
        </li>
      </ul>
    </nav>
  );
}
