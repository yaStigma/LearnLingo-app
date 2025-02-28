import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Eye, EyeOff } from "lucide-react";
import CSS from "./RegisterForm.module.css";
import { useState } from "react";
import PropTypes from "prop-types";
export default function RegisterForm({ closeModal }) {
  const [showPassword, setShowPassword] = useState(false);
  const registerSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Minimum 2 characters")
      .required("Required field"),
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
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      alert("Successfully!");
      closeModal();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2 className={CSS.title}>Registration</h2>
      <p className={CSS.text}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <form className={CSS.form} onSubmit={handleSubmit(onSubmit)}>
        <input className={CSS.input} placeholder="Name" {...register("name")} />
        {errors.name && <p className={CSS.errorInput}>{errors.name.message}</p>}
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

        <button className={CSS.btn}>Sign Up</button>
      </form>
    </div>
  );
}
RegisterForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
