import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-sw.png";
import { Paths } from "../../models/Paths";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <header>
      <Link to={Paths.HOME}>
        <img src={logo} alt="sw-logo" />
      </Link>

      <nav>
        <Link to={Paths.HOME}>Home</Link>
        <Link to={Paths.MOVIES}>Movies</Link>
        <Link to={Paths.CHARACTERS}>Characters</Link>
      </nav>
    </header>
  );
};
