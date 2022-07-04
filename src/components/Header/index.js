import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h2>Enlaces Web</h2>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/register">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
