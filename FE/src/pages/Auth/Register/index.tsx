import LoginImage from "@/assets/img/auth/login-background-1.jpg";
import React, { useEffect, useState } from "react";
import "./style.scss";

import { authAsyncAction } from "@/store/auth/action";
import { RegisterType } from "@/store/auth/type";
import { useAppDispatch } from "@/store/store";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { validateEmail, validatePassword } from "@/utils";

type Props = {};

const Register = (props: Props) => {
  const [message, setMessage] = useState<string | null>(null);
  const form = useForm<RegisterType>();

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const location = useLocation();
  const history = useHistory();

  const dispatch = useAppDispatch();

  const onSubmit = (data: RegisterType) => {
    dispatch(authAsyncAction.register(data))
      .then(() => history.push(`/sign-in`))
      .catch((err) => history.push(`/register?error=${err}`));
  };

  useEffect(() => {
    setMessage(new URLSearchParams(location.search).get("error"));
  }, [location]);

  return (
    <div id="register-page">
      <span className="back-icon" onClick={() => history.push("/home")}>
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          fill="black"
          height="50px"
          viewBox="0 0 447.243 447.243"
        >
          <path
            d="M420.361,192.229c-1.83-0.297-3.682-0.434-5.535-0.41H99.305l6.88-3.2c6.725-3.183,12.843-7.515,18.08-12.8l88.48-88.48
			c11.653-11.124,13.611-29.019,4.64-42.4c-10.441-14.259-30.464-17.355-44.724-6.914c-1.152,0.844-2.247,1.764-3.276,2.754
			l-160,160C-3.119,213.269-3.13,233.53,9.36,246.034c0.008,0.008,0.017,0.017,0.025,0.025l160,160
			c12.514,12.479,32.775,12.451,45.255-0.063c0.982-0.985,1.899-2.033,2.745-3.137c8.971-13.381,7.013-31.276-4.64-42.4
			l-88.32-88.64c-4.695-4.7-10.093-8.641-16-11.68l-9.6-4.32h314.24c16.347,0.607,30.689-10.812,33.76-26.88
			C449.654,211.494,437.806,195.059,420.361,192.229z"
          />
        </svg>
      </span>
      <img src={LoginImage} alt="" />
      <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div id="register-form-background"></div>
        <div className="form-wrapper">
          <h1 className="title">Register</h1>
          {message !== null && <div className="error-message">{message}</div>}
          <div className="form-control">
            <div className="label-wrapper">
              <label htmlFor="">Full name</label>
            </div>
            <input
              className="register-input"
              type="text"
              {...register("fullName", {
                required: "Please enter full name",
                minLength: 6,
              })}
            />
            <p className="field-message">{errors.fullName?.message}</p>
          </div>
          <div className="form-control">
            <div className="label-wrapper">
              <label htmlFor="">Username</label>
            </div>
            <input
              className="register-input"
              type="text"
              {...register("username", {
                required: "Please enter username",
                minLength: 6,
              })}
            />
            <p className="field-message">{errors.username?.message}</p>
          </div>
          <div className="form-control">
            <div className="label-wrapper">
              <label htmlFor="">Password</label>
            </div>
            <input
              className="register-input"
              type="password"
              {...register("password", {
                required: "Please enter password",
                validate: {
                  validFormat: (fieldValue) =>
                    validatePassword(fieldValue) ||
                    "At least 8 characters and doesn`t include special character",
                },
              })}
            />
            <p className="field-message">{errors.password?.message}</p>
          </div>
          <div className="form-control">
            <div className="label-wrapper">
              <label htmlFor="">Email</label>
            </div>
            <input
              className="register-input"
              type="text"
              {...register("email", {
                required: "Please enter email",
                minLength: 6,
                validate: {
                  isSimilar: (fieldValue) =>
                    validateEmail(fieldValue) || "Wrong email format",
                },
              })}
            />
            <p className="field-message">{errors.email?.message}</p>
          </div>
          <div className="form-control">
            <div className="label-wrapper">
              <label htmlFor="">Phone number</label>
            </div>
            <input
              className="register-input"
              type="text"
              {...register("phoneNum", {
                required: "Please enter phone number",
                minLength: 10,
                maxLength: 15,
              })}
            />
            <p className="field-message">{errors.phoneNum?.message}</p>
          </div>
          <button type="submit" className="register-btn">
            Register
          </button>
          <div className="dividing-line">
            <div className="line"></div>
            <div className="box">OR</div>
            <div className="line"></div>
          </div>
          <p className="login-text">You already have an account ?</p>
          <p onClick={() => history.push("/sign-in")} className="login-btn">
            Login
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
