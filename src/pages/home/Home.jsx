import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/button/Button";
import { FaArrowRight } from "react-icons/fa";
const Home = ({ setCurrentSlide }) => {
  return (
    <div className="background-1">
      <main className="home container ">
        <Navbar setCurrentSlide={setCurrentSlide} />
        <h2 className="home__greeting">ПРИВЕТ,</h2>

        <h1 className="home__info">
          <p>
            ЭТО <span>НЕ</span> <br /> КОММЕРЧЕСКОЕ <br />
            ЗАДАНИЕ
          </p>
          <div className="home__info-button" onClick={() => setCurrentSlide(1)}>
            <Button text={"Что дальше?"} icon={<FaArrowRight />} />
          </div>
        </h1>
      </main>
      <div className="overlay-image-11"></div>
      <div className="overlay-image-12"></div>
      <div className="overlay-image-13"></div>
      <div className="overlay-image-14"></div>
      <div className="overlay-image-15"></div>
      <div className="overlay-image-16"></div>
      <div className="overlay-image-17"></div>
      <div className="overlay-image-18"></div>
    </div>
  );
};

export default Home;
