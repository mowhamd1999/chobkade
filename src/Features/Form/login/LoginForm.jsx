import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import style from "./Login.module.css";
import { ContextAuthProvider } from "../../../context/context-auth/ContextAuth";

const LoginForm = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState({});
  const login = async (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
      try {
        const response = await axios.post(
          "https://api.escuelajs.co/api/v1/auth/login",
          userData
        );
        console.log(response);
        setToken(response.data);
        setAuthentication(true);
      } catch (error) {
        console.log(error);
      }
    }
    setTimeout(() => {
      setUserData({
        email: '',
        password: ''
      })
    }, 1000);
  };
  const { authentication, setAuthentication } = useContext(ContextAuthProvider);
  useEffect(() => {
    localStorage.setItem("access", token.access_token);
    localStorage.setItem("refresh", token.refresh_token);
    localStorage.setItem("email", userData.email);
    localStorage.setItem("password", userData.password);
  }, [authentication]);
  return (
    <div>
      <div className={style.container}>
        <form onSubmit={login} className={style.form}>
          <h2 className={style.header}>فرم ورود</h2>
          <div className={style.div}>
            <label className={style.label}>ایمیل :</label>
            <input
              type="email"
              className={style.input}
              onChange={(event) =>
                setUserData((prevState) => ({
                  ...prevState,
                  email: event.target.value,
                }))
              }
              value={userData.email}
            />
          </div>
          <div className={style.div}>
            <label className={style.label}>رمز :</label>
            <input
              type="password"
              className={style.input}
              onChange={(event) =>
                setUserData((prevState) => ({
                  ...prevState,
                  password: event.target.value,
                }))
              }
              value={userData.password}
            />
          </div>

          <button type="submit" className={style.btn}>
            ثبت نام
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
