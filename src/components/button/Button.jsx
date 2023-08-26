import React from "react";
import "./Button.css";

const Button = ({ text, icon }) => {
  return (
    <div>
      <button className="myButton">
        <span className="myButton-icon">{icon}</span>
        {text}
      </button>
    </div>
  );
};

export default Button;
