import React from "react";
import "./Button.css";

const Button = ({ text, icon, func }) => {
  return (
    <div>
      <button className="myButton" onClick={func}>
        <span className="myButton-icon">{icon}</span>
        {text}
      </button>
    </div>
  );
};

export default Button;
