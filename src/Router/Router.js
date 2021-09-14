import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from "react-router-dom";
import { HackerNews } from "../HackerNewsApi/HackerNews";
// import Links from "./Links";
import "./Router.css";

export default function Rrouter() {
  //count is incremented by 3 because we want to show only three stories at a time
  const [count, setCount] = useState(10);

  // handleClick funtion adds 3 to the count
  const handleClick = () => {
    setCount(count + 10);
  };

  // handleClickPrevious funtion minuses 3 to the count
  const handleClickPrevious = () => {
    setCount(count - 10);
  };

  return (
    <Router>
      <div className="header">
        <h1 className="heading">
          <span id="pc">HACKER</span>NEWS<span id="pc">.</span>
        </h1>
      </div>
      <div className="n-p-btns">
        <NavLink className="new-btn" activeClassName="active" to="/new">
          New
        </NavLink>
        <NavLink className="past-btn" activeClassName="active" to="/past">
          Past
        </NavLink>
      </div>

      <Switch>
        <Route exact path="/" render={() => <Redirect to={`top`} />} />
        <Route
          path="/:type"
          render={({ match }) => {
            return (
              <div>
                {match.params.type === "past" ? (
                  <HackerNews key={"best"} type={"best"} resCount={count} />
                ) : (
                  <HackerNews
                    key={match.params.type}
                    type={match.params.type}
                    resCount={count}
                  />
                )}
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
              </div>
            );
          }}
        />
      </Switch>
    </Router>
  );
}
