import { Link, NavLink } from "react-router-dom";
import CSS from "./Header.module.css";
import clsx from "clsx";

const getNavLinkClass = (props) => {
  return clsx(CSS.navLink, props.isActive && CSS.activeLink);
};

export default function Header() {
  return (
    <header className={CSS.wrapper}>
      <Link to="/" className={CSS.logo}>
        <img src="/ukraine.svg" alt="Ukraine flag logo" />
        <p className={CSS.logoText}>LearnLingo</p>
      </Link>
      <nav className={CSS.nav}>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/teachers" className={getNavLinkClass}>
          Teachers
        </NavLink>
      </nav>
      <div className={CSS.auth}>
        <button type="button" className={CSS.logIn}>
          <img src="/log-in-01.svg" alt="log In icon" /> Log in
        </button>
        <button type="button" className={CSS.registration}>
          Registration
        </button>
      </div>
    </header>
  );
}
