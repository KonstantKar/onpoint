import React, { useState } from "react";
import "./Popup.css";
import { GrClose } from "react-icons/gr";
const Popup = ({ togglePopup }) => {
  const [dignities] = useState([
    { number: "1", message: "Ipsum, dolor sit amet consectetur!" },
    { number: "2", message: "Ipsum, dolor sit amet consectetur!" },
    { number: "3", message: "Ipsum, dolor sit amet consectetur!" },
    { number: "4", message: "Ipsum, dolor sit amet consectetur!" },
    { number: "5", message: "Ipsum, dolor sit amet consectetur!" },
    { number: "6", message: "Ipsum, dolor sit amet consectetur!" },
  ]);

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  // Диапазон индексов для текущей страницы
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPageDignities = dignities.slice(startIndex, endIndex);

  const totalPages = Math.ceil(dignities.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="advantage__popup">
        <h2 className="popup__message">ПРЕИМУЩЕСТВА</h2>
        <div className="popup__closer" onClick={togglePopup}>
          <GrClose />
        </div>
        <p className="popup-title">
          BREND<span>XY</span>
        </p>
        <div className="popup__dignities">
          {currentPageDignities.map((item, index) => (
            <div className="dignitie__container" key={index}>
              <h2 className="dignitie__number">{`0${item.number}`}</h2>
              <p className="dignitie__message">{item.message}</p>
            </div>
          ))}
        </div>
        <div className="popup__pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active" : ""}
              onClick={() => handlePageChange(index + 1)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Popup;
