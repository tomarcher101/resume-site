import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <nav className="sticky">
      {click ? <div></div> : <div className="nav-padding"></div>}
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      <div className={click ? "nav-links show" : "nav-links"}>
        <ul>
          <li className="nav-item">
            <Link to="/">About Me</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
