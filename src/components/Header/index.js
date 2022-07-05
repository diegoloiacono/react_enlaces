import React from "react";
import { Link } from "react-router-dom";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import Button from "../Button";
import "./style.css";

const Header = () => {
  const { token, setToken } = useUserTokenContext();
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
          {token && (
            <li>
              <Button
                onClick={() => {
                  setToken("");
                }}
              >
                Log out
              </Button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
