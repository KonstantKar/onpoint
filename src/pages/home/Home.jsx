import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import { FaArrowRight } from "react-icons/fa";
const Home = () => {
  return (
    <div className="background-1">
      <main className="home container ">
        <Navbar />
        <h2 className="home__greeting">ПРИВЕТ,</h2>

        <h1 className="home__info">
          ЭТО <span>НЕ</span> <br /> КОММЕРЧЕСКОЕ <br />
          ЗАДАНИЕ
          <button className="home__info-button">
            <span className="home__info-button-icon">
              <FaArrowRight />
            </span>
            Что дальше?
          </button>
        </h1>
      </main>
      <div className="overlay-image-1"></div>
      <div className="overlay-image-2"></div>
      <div className="overlay-image-3"></div>
      <div className="overlay-image-4"></div>
      <div className="overlay-image-5"></div>
      <div className="overlay-image-6"></div>
      <div className="overlay-image-7"></div>
      <div className="overlay-image-8"></div>
    </div>
  );
};

export default Home;
