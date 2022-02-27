import React from "react";
import { Link } from "remix/client";
import { toggleMode } from "~/utility/dark-mode.client";
import darkModeIcon from "./icons/dark-mode.svg";

export const Header: React.FC = () => {
  const linkClassNames = "rounded p-4 ring-gray-300 hover:ring-2";

  return (
    <header className="flex justify-between border-b-2">
      <nav className="md:container py-6">
        <ul className="flex divide-x">
          <li>
            <Link to="/" className={linkClassNames}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/posts" className={linkClassNames}>
              Writing
            </Link>
          </li>
        </ul>
      </nav>
      <img
        src={darkModeIcon}
        alt="dark-mode-toggle"
        onClick={() => toggleMode()}
        className="dark:invert"
      />
    </header>
  );
};
