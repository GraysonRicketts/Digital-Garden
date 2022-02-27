import React from "react";
import { Link } from "remix";

export const Header: React.FC = () => {
  return (
    <header>
      <nav className="md:container mx-auto">
        <ul className="flex">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/posts">Writing</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
