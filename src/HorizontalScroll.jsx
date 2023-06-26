import React, { useRef } from "react";
import "./HorizontalScroll.css"; // This file contains the CSS for this component

const HorizontalScroll = ({ children }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="scroll-container">
      <button className="scroll-button scroll-button-left" onClick={() => scroll(-300)}>
        Left
      </button>
      <div className="scroll-content-container" ref={scrollContainerRef}>
        {children}
      </div>
      <button className="scroll-button scroll-button-right" onClick={() => scroll(300)}>
        Right
      </button>
    </div>
  );
};

export default HorizontalScroll;
