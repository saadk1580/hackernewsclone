import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Router } from "react-router-dom";
import Rrouter from "./Router/Router";

ReactDOM.render(
  <React.StrictMode>
    <Rrouter />
  </React.StrictMode>,
  document.getElementById("root")
);
