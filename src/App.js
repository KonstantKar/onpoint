import { useEffect, useState } from "react";
import "./App.css";
import Advantage from "./pages/advantage/Advantage";
import Description from "./pages/description/Description";
import Home from "./pages/home/Home";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [startTouchX, setStartTouchX] = useState(null);
  const [endTouchX, setEndTouchX] = useState(null);

  const handleTouchStart = (e) => {
    setStartTouchX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setEndTouchX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startTouchX !== null && endTouchX !== null && !isAnimating) {
      setIsAnimating(true);

      if (startTouchX - endTouchX > 100) {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
      } else if (endTouchX - startTouchX > 100) {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
      }

      setStartTouchX(null);
      setEndTouchX(null);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Продолжительность анимации
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  return (
    <div className="app">
      <div
        className="slide-container"
        style={{
          transform: `translateX(${-currentSlide * 100}vw)`,
          touchAction: "pan-y",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Home setCurrentSlide={setCurrentSlide} />
        <Description setCurrentSlide={setCurrentSlide} />
        <Advantage setCurrentSlide={setCurrentSlide} />
      </div>
    </div>
  );
}

export default App;
