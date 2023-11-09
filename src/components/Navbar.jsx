import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import "./navbar.css";
import logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={logo} alt="nav logo" />
        </Link>
        <ul className="nav__links">
          {" "}
          {links.map(({ name, path }, index) => {
            return (
              <li>
                <NavLink to={path}>{name}</NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav__toggle-btn">
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
