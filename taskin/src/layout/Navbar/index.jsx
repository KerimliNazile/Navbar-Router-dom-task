import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleDrop = () => {
    setOpen(!open);
  };
  const closeDropdown = () => {
    setOpen(false);
  };
  return (
    <div className="navbar">
      <div>
        <a className="logo" href="">
          <h1>Dazzling Demo</h1>
        </a>
      </div>
      <ul className="links">
        <li>
          <NavLink
            onClick={closeDropdown}
            className="navig"
            activeClassName="active"
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeDropdown}
            className="navig"
            activeClassName="active"
            to={"/gallery"}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeDropdown}
            className="navig"
            activeClassName="active"
            to={"/shortcodes"}
          >
            Shortcodes
          </NavLink>
        </li>
        <li className="about">
          <NavLink
            onClick={handleDrop}
            className="navig drop"
            activeClassName="active"
            to={"/about"}
          >
            {" "}
            About{" "}
          </NavLink>{" "}
          <ul className={`dropdown ${open ? "open-drop" : ""}`}>
            <li className="menu-item">
              <Link to={"/markup"}>
                <i class="fa-solid fa-bars"></i> Page Markup And Formatting
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/contact"}>
                <i class="fa-solid fa-envelope"></i> Contact Form
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/image"}>
                <i class="fa-regular fa-image"></i> Page Image Alignment
                (Full-Width)
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/clearing"}>
                <i class="fa-brands fa-envira"></i> Clearing Floats
              </Link>
            </li>
            <li className="menu-item comment">Comment options</li>
            <li className="menu-item">
              <Link to={"/comments"}>
                <i class="fa-solid fa-message"></i> Page with comments
              </Link>
            </li>
            <hr />
            <li className="menu-item">
              <Link to={"/disabled"}>
                <i class="fa-solid fa-xmark"></i> Page with comments disabled
              </Link>
            </li>
            <li className="menu-item more">More options</li>
            <hr />
            <li className="menu-item disabled">This item is disabled</li>
          </ul>{" "}
        </li>
        <li>
          <NavLink
            className="navig"
            activeClassName="active"
            to={"/language"}
            onClick={closeDropdown}
          >
            Languages
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
