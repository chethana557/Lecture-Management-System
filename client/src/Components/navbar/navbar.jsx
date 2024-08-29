// Navbar.jsx
import React from "react";
import MenuLink from "../navbar/MenuLink/MenuLink";
import logo from "../../assets/pictures/KDU.png";
import "./navbar.css";

const CustomNavbar = () => {
  return (
    <div id="navcontent">
      <a href="#">
        {" "}
        <img src={logo} alt="React" className="logo" />
        Faculty of Technology
      </a>
      <div>
        <MenuLink linkname="Home" url="/" />
        <MenuLink linkname="About" url="/aboutus" />
        <MenuLink linkname="Contact" url="/contactus" />
      </div>
    </div>
  );
};

export default CustomNavbar;
