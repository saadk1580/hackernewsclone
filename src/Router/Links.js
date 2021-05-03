import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Links() {
  return (
    <div>
      <NavLink to="/new">New</NavLink>
      <NavLink to="/past">Past</NavLink>
    </div>
  );
}
