import "./App.css";
import React, { useState } from "react";
import { HackerNews } from "./HackerNewsApi/HackerNews";

function App() {
  const [count, setCount] = useState(10);
  const handleClick = () => {
    setCount(count + 10);
  };
  return (
    <div className="App">
      <div>
        <h1 className="heading">
          <span id="pc">HACKER</span>NEWS<span id="pc">.</span>
        </h1>
        <button>NEW</button>
        <button>PAST</button>
        <HackerNews numStories={count} />
        <button onClick={handleClick}>Load More</button>
      </div>
    </div>
  );
}

export default App;
