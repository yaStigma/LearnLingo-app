import { Link, NavLink } from "react-router-dom";
import CSS from "./Header.module.css";
export default function Header() {
  return (
    <header className={CSS.wrapper}>
      <div className={CSS.logoBox}>
        <Link to="/" className={CSS.logo}>
          <img src="/ukraine.svg" alt="Ukraine flag logo" />
          LearnLingo
        </Link>
      </div>
      <nav className={CSS.nav}>
        <NavLink to="/" className={CSS.navLink}>
          Home
        </NavLink>
        <NavLink to="/teachers" className={CSS.navLink}>
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
