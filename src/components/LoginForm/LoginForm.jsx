import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Eye, EyeOff } from "lucide-react";
import CSS from "./LoginForm.module.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
export default function LoginForm({ closeModal }) {
  const [showPassword, setShowPassword] = useState(false);
  const loginSchema = yup.object().shape({
    email: yup.string().email("Incorrect email").required("Required field"),
    password: yup
      .string()
      .min(6, "Minimum 6 characters")
      .required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      alert("Successfully!");
      closeModal();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2 className={CSS.title}>Log In</h2>
      <p className={CSS.text}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <form className={CSS.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={CSS.input}
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && (
          <p className={CSS.errorInput}>{errors.email.message}</p>
        )}

        <div className={CSS.passwordWrapper}>
          <input
            className={CSS.input}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
          />
          <button
            type="button"
            className={CSS.eyeButton}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        </div>
        {errors.password && (
          <p className={CSS.errorInput}>{errors.password.message}</p>
        )}

        <button className={CSS.btn}>Log In</button>
      </form>
    </div>
  );
}
LoginForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
