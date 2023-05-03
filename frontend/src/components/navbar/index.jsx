import React from "react";
import "./styles.css";
import Botao from "../botaonav.jsx";
import {Link} from "react-router-dom"


export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/"> 
         <img className="logo" src="https://i.imgur.com/YpOLmro.png" alt="Logo do site" />
      </Link>
      <ul className="navlinks">
        <li><Botao /></li>
      </ul>

    </nav>
  );
}
