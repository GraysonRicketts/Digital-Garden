import { Link } from "remix";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="navigation__list">
          <li className="navigation__link">
            <Link to="/">🏡 Home</Link>
            <Link to="/posts">Writing</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
