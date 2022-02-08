import React from "react";
import { Link } from "remix";

export const Header: React.FC = () => {
  return (
    <header className="container">
      <nav>
        <ul className="navigation__list">
          <li className="navigation__link">
            <Link to="/">🏡 Home</Link>
          </li>
          <li>
            <Link to="/posts">Writing</Link></li>
        </ul>
      </nav>
    </header>
  );
};
