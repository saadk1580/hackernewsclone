import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HackerNews } from "../HackerNewsApi/HackerNews";
import Links from "./Links";

export default function Rrouter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 3);
  };
  return (
    <Router>
      <h1 className="heading">
        <span id="pc">HACKER</span>NEWS<span id="pc">.</span>
      </h1>
      <Links />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/top" />}
          exact={true}
        />
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
                <button onClick={handleClick} className="loadBtn">
                  Load More
                </button>
              </div>
            );
          }}
        />
      </Switch>
    </Router>
  );
}
