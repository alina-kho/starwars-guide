import React from "react";
import "./Home.scss";
import logo from "../../assets/logo-sw.png";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../models/Paths";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <img src={logo} alt="SW-logo" />
      <h1>Explore the world of Star Wars!</h1>
      <div className="hp-buttons">
        <button onClick={() => navigate(Paths.MOVIES)}>Movies</button>
        <button onClick={() => navigate(Paths.CHARACTERS)}>Characters</button>
      </div>
    </div>
  );
};
