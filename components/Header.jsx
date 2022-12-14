import React from "react";
import Logo from "../src/assets/logo.webp";
export default function Header() {
  return (
    <div className="header_styling">
      <img src={Logo} className="logo" alt="logo" />

      <nav>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Database</a>
          </li>
          <li>
            <a href="#">How we calculate</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
