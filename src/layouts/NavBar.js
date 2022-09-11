import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "scss/NavBar.scss";
import Logo from "assets/images/navbar/logo.svg";
import searchIcon from "assets/images/navbar/searchIcon.svg";
import profileIcon from "assets/images/navbar/profileIcon.svg";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={Logo} alt="Logo" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/network"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Network
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/jobs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Jobs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/messages"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Messages
              </NavLink>
            </li>
          </ul>

          <div className="searchBoxArea">
            <img src={searchIcon} alt="searchIcon" className="searchIcon" />
            <input type="text" placeholder="some text in ther" className="searchBox" />
          </div>

          <div className="profile">
            <img src={profileIcon} alt="profile" className="profileIcon" />
          </div>

          <button className="postBtn">Post a Job</button>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
