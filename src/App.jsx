import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HorizontalScroll from "./HorizontalScroll.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HorizontalScroll>
        <ScrollItem val="item-0" />
        <ScrollItem val="item-4" />
        <ScrollItem val="item-5" />
        <ScrollItem val="item-6" />
        <ScrollItem val="item-7" />
        <ScrollItem val="item-8" />
      </HorizontalScroll>
      <HorizontalScroll>
        <ScrollItem val="item-0" />
        <ScrollItem val="item-4" />
        <ScrollItem val="item-5" />
        <ScrollItem val="item-6" />
        <ScrollItem val="item-7" />
        <ScrollItem val="item-8" />
      </HorizontalScroll>
      <HorizontalScroll>
        <ScrollItem val="item-0" />
        <ScrollItem val="item-4" />
        <ScrollItem val="item-5" />
        <ScrollItem val="item-6" />
        <ScrollItem val="item-7" />
        <ScrollItem val="item-8" />
      </HorizontalScroll>
    </>
  );
}

export default App;

function ScrollItem({ val }) {
  const [hover, setHover] = useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="scroll-item">
      {val}{" "}
      {hover && (
        <div
          style={{
            position: "absolute",
            marginLeft: "10px",
            marginTop: "10px",
            width: "100px",
            height: "100px",
            backgroundColor: "green",
            // zIndex: "1",
          }}
        >
          {val}
          hover
        </div>
      )}
    </div>
  );
}
