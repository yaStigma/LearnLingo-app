import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Modal from "../Modal/Modal";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import CSS from "./Header.module.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const getNavLinkClass = (props) => {
  return clsx(CSS.navLink, props.isActive && CSS.activeLink);
};

export default function Header() {
  const [modalType, setModalType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
        {user ? (
          <>
            <NavLink to="/favorites" className={getNavLinkClass}>
              Favorites
            </NavLink>
            <button
              type="button"
              className={CSS.logOut}
              onClick={() => {
                const auth = getAuth();
                auth.signOut();
              }}
            >
              <img src="/log-out-01.svg" alt="Log Out icon" /> Log out
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className={CSS.logIn}
              onClick={() => {
                setModalType("login");
                setIsModalOpen(true);
              }}
            >
              <img src="/log-in-01.svg" alt="log In icon" /> Log in
            </button>

            <button
              type="button"
              className={CSS.registration}
              onClick={() => {
                setModalType("register");
                setIsModalOpen(true);
              }}
            >
              Registration
            </button>
          </>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalType === "login" ? (
          <LoginForm closeModal={closeModal} />
        ) : (
          <RegisterForm closeModal={closeModal} />
        )}
      </Modal>
    </header>
  );
}
