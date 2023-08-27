import { useEffect, useState } from "react";
import "./App.css";
import Advantage from "./pages/advantage/Advantage";
import Description from "./pages/description/Description";
import Home from "./pages/home/Home";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === "ArrowRight" && !isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
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
    <div className="app" onKeyDown={handleKeyPress} tabIndex={0}>
      <div
        className="slide-container"
        style={{ transform: `translateX(${-currentSlide * 100}vw)` }}
      >
        <Home setCurrentSlide={setCurrentSlide} />
        <Description setCurrentSlide={setCurrentSlide} />
        <Advantage setCurrentSlide={setCurrentSlide} />
      </div>
    </div>
  );
}

export default App;
