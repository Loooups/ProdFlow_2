import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a className="active" href="/productionSite">
            ProductionLines
          </a>
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
    </div>
  );
};

//   <nav className="navigation">
//     <ul>
//       <NavLink to="/home">
//         <li>Home</li>
//       </NavLink>
//       <NavLink to="/productionSite">
//         <li className="active">ProductionSite</li>
//       </NavLink>
//       <NavLink to="/statistics">
//         <li>Statistics</li>
//       </NavLink>
//       <NavLink to="/inbox">
//         <li>Inbox</li>
//       </NavLink>
//       <NavLink to="/notifications">
//         <li>Notifications</li>
//       </NavLink>
//     </ul>
//   </nav>
// );
// };

export default Navigation;
