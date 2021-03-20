import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import NavLinks from "./navLinks.js";

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
        <NavLinks />
      </nav>
    </header>
  );
}

export default Header;
