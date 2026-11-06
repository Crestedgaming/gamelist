import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/">Questlog</NavLink></li>
          <li><NavLink to="/games">Alla Spel</NavLink></li>
          <li><NavLink to="/games/new">Lägg Till Spel</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;