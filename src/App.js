import "./App.css";
import React, { useState } from "react";
import { HackerNews } from "./HackerNewsApi/HackerNews";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 3);
  };
  const changeColor = () => {
    document.getElementsByClassName("newBtn");
  };
  return (
    <div className="App">
      <h1 className="heading">
        <span id="pc">HACKER</span>NEWS<span id="pc">.</span>
      </h1>
      <div className="n-p-btns">
        <button className={`newBtn ${changeColor}`}>NEW</button>
        <button className="pstBtn">PAST</button>
      </div>
      <div className="story-container">
        <HackerNews numStories={count} />
      </div>
      <button onClick={handleClick} className="loadBtn">
        Load More
      </button>
    </div>
  );
}

export default App;
