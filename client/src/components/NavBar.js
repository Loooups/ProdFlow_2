import React from "react";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li className="active">
          <a href="/">All Production Sites</a>
        </li>
        <li>
          <a href="/statistics">Statistics</a>
        </li>
        <li>
          <a href="/inbox">Inbox</a>
        </li>
        <li>
          <a href="/notifications">Notifications</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
