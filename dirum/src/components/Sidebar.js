import React from "react";
import { Link } from "react-router-dom";
import appLogo from "../imgs/questionClearLogo.png";

function Sidebar() {
  return (
    <div className="sideBarContainer">
      <img src={appLogo} alt="" className="img-fluid logo" />
      <ul>
        <li>
          <Link to="/dashboard" />
          Dashboard
        </li>
        <li>
          <Link to="/dashboard" />
          Offers / Notifications
        </li>
        <li>
          <Link to="/dashboard" />
          About App
        </li>
        <li>
          <Link to="/dashboard" />
          Terms & Conditions
        </li>
        <li>
          <Link to="/dashboard" />
          Privacy Policy
        </li>
        <li>
          <Link to="/dashboard" />
          Logout
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
