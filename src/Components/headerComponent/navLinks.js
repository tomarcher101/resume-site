import React, { useState } from "react";

function NavLinks() {
  return (
    <div className="nav-links">
      <ul>
        <li className="nav-item">
          <a href="#">Profile</a>
        </li>
        <li className="nav-item">
          <a href="#">Projects</a>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
