import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HackerNews } from "../HackerNewsApi/HackerNews";
import Links from "./Links";
import "./Router.css";

export default function Rrouter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 3);
  };
  const handleClickPrevious = () => {
    setCount(count - 3);
  };
  return (
    <Router>
      <h1 className="heading">
        <span id="pc">HACKER</span>NEWS<span id="pc">.</span>
      </h1>
      <Links />
      <Switch>
        <Route exact path="/" render={() => <Redirect to={`top`} />} />

        <Route
          path="/:type"
          render={({ match }) => {
            return (
              <div>
                <HackerNews
                  key={match.params.type}
                  type={match.params.type}
                  resCount={count}
                />
                <div className="btn-container">
                  <button onClick={handleClick} className="loadBtn">
                    Load More
                  </button>
                  {count !== 0 ? (
                    <button
                      onClick={handleClickPrevious}
                      className="loadBtnPre"
                    >
                      Previous
                    </button>
                  ) : (
                    <p></p>
                  )}
                </div>
                <div className="bot-header-container">
                  <h1 className="bot-header">HACKERNEWS.</h1>
                </div>
              </div>
            );
          }}
        />
      </Switch>
    </Router>
  );
}
