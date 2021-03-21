import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <header>
      <nav>
        <div className="nav-padding"></div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
        <div className={ click ? "nav-links show" : "nav-links"}>
          <ul>
            <li className="nav-item">
              <a href="#">Profile</a>
            </li>
            <li className="nav-item">
              <a href="#">Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
