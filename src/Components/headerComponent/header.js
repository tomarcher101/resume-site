import { render } from "@testing-library/react";
import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navClass: "nav-green",
      burgerClass: "burger-green",
      isClicked: false,
    };
  }

  setHeaderColor = (e, color) => {
    this.setState({ navClass: "nav-" + color });
    this.setState({ burgerClass: "burger-" + color });
  }

  handleBurgerClick = () => {
    this.setState((state) => {
      return { isClicked: !state.isClicked };
    });
  }

  render() {
    return (
      <nav className={this.state.navClass + " sticky"}>
        {this.state.isClicked ? <div></div> : <div className="nav-padding"></div>}
        <div className={this.state.burgerClass + " menu-icon"} onClick={this.handleBurgerClick}>
          {this.state.isClicked ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
        <div className={this.state.isClicked ? "nav-links show" : "nav-links"}>
          <ul>
            <li className="nav-item">
              <HashLink
                to="/"
                smooth
                onClick={(e) => {
                  this.setHeaderColor(e, "green");
                  window.scrollTo({top: 0, behavior: 'smooth'})
                }}
              >
                About Me
              </HashLink>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                onClick={(e) => this.setHeaderColor(e, "green")}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#contact-div"
                onClick={(e) => {
                  this.setHeaderColor(e, "green");
                }}
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
