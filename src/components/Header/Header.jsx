import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";
import Modal from "../Modal/Modal";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import CSS from "./Header.module.css";

const getNavLinkClass = (props) => {
  return clsx(CSS.navLink, props.isActive && CSS.activeLink);
};

export default function Header() {
  const [modalType, setModalType] = useState(null);
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
        <button
          type="button"
          className={CSS.logIn}
          onClick={() => setModalType("login")}
        >
          <img src="/log-in-01.svg" alt="log In icon" /> Log in
        </button>
        <button
          type="button"
          className={CSS.registration}
          onClick={() => setModalType("register")}
        >
          Registration
        </button>
      </div>
      <Modal isOpen={modalType !== null} onClose={() => setModalType(null)}>
        {modalType === "login" ? <LoginForm /> : <RegisterForm />}
      </Modal>
    </header>
  );
}
