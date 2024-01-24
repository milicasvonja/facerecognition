import React from "react";
import { Tilt } from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 150 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner pa3 tc">
          <img
            style={{ paddingTop: "5px", height: 50, width: 50 }}
            alt="logo"
            src={brain}
          ></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
