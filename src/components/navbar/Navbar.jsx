import React from "react";
import { LiaHomeSolid } from "react-icons/lia";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <nav className="navbar-icon">
          <LiaHomeSolid />
        </nav>
        <span></span>
        <div className="navbar-title">PROJECT</div>
      </div>
      <div className="onpoint-image"></div>
    </>
  );
};

export default Navbar;
