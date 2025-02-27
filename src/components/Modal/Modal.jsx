import { useEffect } from "react";
import CSS from "./Modal.module.css";
import PropTypes from "prop-types";

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className={CSS.overlay} onClick={onClose}>
      <div className={CSS.modal} onClick={(e) => e.stopPropagation()}>
        <button className={CSS.btnClose} onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};
