import { NavLink } from "react-router";
import headerImage from "../assets/header-banner.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-brand">
          <h1>QUESTLOG</h1>
          <p>A CRESTEDGAMING PROJECT</p>
        </div>

        <nav aria-label="Main navigation">
          <ul>
            <li>
              <NavLink to="/games">All Games</NavLink>
            </li>
            <li>
              <NavLink to="/add-game" className="add-game-link">
                + Add Game
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <img
        className="header-img"
        src={headerImage}
        alt="CrestedGaming banner"
      />
    </header>
  );
};

export default Header;