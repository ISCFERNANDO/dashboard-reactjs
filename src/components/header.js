import React from "react";
import "./header.css";
import SwitchDarkMode from "./switch-dark-mode";

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grid">
          <div>
            <h1>Social Media Dashboard</h1>
            <p className="header-total">Total Followers: 23, 004</p>
          </div>
          <SwitchDarkMode />
        </div>
      </div>
    </header>
  );
}

export default Header;
