import React from "react";
import "./Description.css";
import Navbar from "../../components/navbar/Navbar";
const Description = ({ setCurrentSlide }) => {
  return (
    <div className="background-2">
      <main className="description container ">
        <Navbar setCurrentSlide={setCurrentSlide} />
        <h2 className="description__message">
          ТЕКСТ <br />
          СООБЩЕНИЯ
        </h2>
        <div className="description__info">
          <p>
            <span>Lorem ipsum dolor sit amet</span>, consectetur. adipisicing
            elit.Rerum ab consequatur in, doloremque, nobis commodi, molestias
            impedit odit rem a repudiandae cupiditate porro possimus? Distinctio
            inventore eaque exercitationem deleniti provident! Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Doloremque, corporis.
            Corporis doloribus placeat beatae. Cupiditate dolore magnam debitis
            atque culpa harum sapiente provident aut, dicta aspernatur,
            doloribus enim, omnis quibusdam!Doloremque, corporis. Corporis
            doloribus placeat beatae. Cupiditate dolore magnam debitis atque
            culpa harum sapiente provident aut, dicta aspernatur, doloribus
            enim, omnis quibusdam!Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Doloremque, corporis. Corporis doloribus placeat
            beatae. Cupiditate dolore magnam debitis atque culpa harum sapiente
            provident aut, dicta aspernatur, doloribus enim, omnis
            quibusdam!Doloremque, corporis. Corporis doloribus placeat beatae.
            Cupiditate dolore magnam debitis atque culpa harum sapiente
            provident aut, dicta aspernatur, doloribus enim, omnis
            quibusdam!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque, corporis. Corporis doloribus placeat beatae. Cupiditate
            dolore magnam debitis atque culpa harum sapiente provident aut,
            dicta aspernatur, doloribus enim, omnis quibusdam!Doloremque,
            corporis. Corporis doloribus placeat beatae. Cupiditate dolore
            magnam debitis atque culpa harum sapiente provident aut, dicta
            aspernatur, doloribus enim, omnis quibusdam!Сonsectetur adipisicing
            elit. Doloremque, corporis. Corporis doloribus placeat beatae.
            Cupiditate dolore magnam debitis atque culpa harum sapiente
            provident aut, dicta aspernatur, doloribus enim, omnis
            quibusdam!Doloremque, corporis. Corporis doloribus placeat beatae.
            Cupiditate dolore magnam debitis atque culpa harum sapiente
            provident aut, dicta aspernatur, doloribus enim, omnis
            quibusdam!Сonsectetur adipisicing elit. Doloremque, corporis.
            Corporis doloribus placeat beatae. Cupiditate dolore magnam debitis
            atque culpa harum sapiente provident aut, dicta aspernatur,
            doloribus enim, omnis quibusdam!Doloremque, corporis. Corporis
            doloribus placeat beatae. Cupiditate dolore magnam debitis atque
            culpa harum sapiente provident aut, dicta aspernatur, doloribus
            enim, omnis quibusdam!
          </p>
        </div>
      </main>
      <div className="overlay-image-21"></div>
      <div className="overlay-image-22"></div>
      <div className="overlay-image-23"></div>
      <div className="overlay-image-24"></div>
      <div className="overlay-image-25"></div>
    </div>
  );
};

export default Description;
