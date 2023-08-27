import React, { useState } from "react";
import "./Advantage.css";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/button/Button";
import { PiPlus } from "react-icons/pi";
import Popup from "./popup/Popup";
const Advantage = ({ setCurrentSlide }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const containerClasses = `background ${isPopupOpen ? "bg2" : "bg1"}`;

  return (
    <div className={containerClasses}>
      <main className="advantage container ">
        <Navbar setCurrentSlide={setCurrentSlide} />
        <h2 className="advantage__message">КЛЮЧЕВОЕ СООБЩЕНИЕ</h2>
        <div className="advantage__info">
          <p>
            BREND<span>XY</span>
          </p>
        </div>
        <div className="advantage__card-section">
          <div className="advantage__card-1">
            <span className="advantage__card-icon-1"></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="advantage__card-2">
            <p>Lorem ipsum dolore</p>
            <span className="advantage__card-icon-2"></span>
          </div>
          <div className="advantage__info-button">
            <Button text={"Подробнее"} icon={<PiPlus />} func={togglePopup} />
          </div>
        </div>
        {isPopupOpen && <Popup togglePopup={togglePopup} />}
      </main>
      <div className="overlay-image-31"></div>
      <div className="overlay-image-32"></div>
      <div className="overlay-image-33"></div>
      <div className="overlay-image-34"></div>
      <div className="overlay-image-35"></div>
      <div className="overlay-image-36"></div>
      <div className="overlay-image-37"></div>
      <div className="overlay-image-38"></div>
      <div className="overlay-image-39"></div>
    </div>
  );
};

export default Advantage;
