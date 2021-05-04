import React from "react";
import { NavLink } from "react-router-dom";

export default function Links() {
  return (
    <div className="n-p-btns">
      <NavLink to="/new">New</NavLink>
      <NavLink to="/past">Past</NavLink>
    </div>
  );
}
