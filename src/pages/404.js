import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container ">
      <div className="error__page">
        <h2>404</h2>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>

          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>

          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NotFound;
