import React from "react";
import babyYoda from "../assets/baby-yoda.png";
import "./Sections/Grid.scss";

export const NothingFound = () => {
  return (
    <div className="not-found">
      <p className="white-text">Nothing found...</p>
      <img src={babyYoda} alt="baby Yoda" />
    </div>
  );
};
