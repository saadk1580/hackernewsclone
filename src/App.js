import "./App.css";
import React, { useState } from "react";
import { HackerNews } from "./HackerNewsApi/HackerNews";
import Rrouter from "./Router/Router";

function App() {
  const changeColor = () => {
    document.getElementsByClassName("newBtn");
  };
  return (
    <div className="App">
      <div className="n-p-btns">
        {/* <button className={`newBtn ${changeColor}`}>NEW</button>
        <button className="pstBtn">PAST</button> */}
        <Rrouter />
      </div>
      <div className="story-container">
        {/* <HackerNews numStories={count} /> */}
      </div>
    </div>
  );
}

export default App;
