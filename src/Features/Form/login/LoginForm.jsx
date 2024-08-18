import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import style from "./Login.module.css";
import { ContextAuthProvider } from "../../../context/context-auth/ContextAuth";
import { useFormik } from "formik";
const LoginForm = () => {
  const [token, setToken] = useState({});
  ////
  const user = async (token) => {
    // const accessToken = localStorage.getItem("access_token");
    // if (!accessToken) {
    //   console.log("No access token found");
    //   return;
    // }
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("User Profile:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error fetching user profile:",
        error.response ? error.response.data : error.message
      );
    }
  };
  ////
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      if (values.email && values.password) {
        try {
          const response = await axios.post(
            "https://api.escuelajs.co/api/v1/auth/login",
            values
            );
            console.log(response);
            setToken(response.data);
            setAuthentication(true);
            await user(response.data.access_token);
        } catch (error) {
          console.log(error);
        }
      }
    },
  });
  const { authentication, setAuthentication } = useContext(ContextAuthProvider);
  useEffect(() => {
    localStorage.setItem("access_token", token.access_token);
    localStorage.setItem("refresh_token", token.refresh_token);

  }, [authentication]);
  return (
    <div>
      <div className={style.container}>
        <form onSubmit={formik.handleSubmit} className={style.form}>
          <h2 className={style.header}>فرم ورود</h2>
          <div className={style.div}>
            <label className={style.label}>ایمیل :</label>
            <input
              type="email"
              id="email"
              className={style.input}
              {...formik.getFieldProps("email")}
            />
          </div>
          <div className={style.div}>
            <label className={style.label}>رمز :</label>
            <input
              type="password"
              id="password"
              className={style.input}
              {...formik.getFieldProps("password")}
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
