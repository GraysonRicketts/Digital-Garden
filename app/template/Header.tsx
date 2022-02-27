import React from "react";
import { Link } from "remix";

export const Header: React.FC = () => {
  const linkClassNames = 'rounded p-4 ring-gray-300 hover:ring-2'
  return (
    <header>
      <nav className="md:container mx-auto border-b-2 py-6">
        <ul className="flex divide-x">
          <li>
            <Link to="/" className={linkClassNames}>Home</Link>
          </li>
          <li>
            <Link to="/posts" className={linkClassNames}>Writing</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
