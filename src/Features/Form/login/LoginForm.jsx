import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import style from "./Login.module.css";
import { ContextAuthProvider } from "../../../context/context-auth/ContextAuth";
import { useFormik } from "formik";
import { ContextUserProvider } from "../../../context/context-user/ContextUser";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
const LoginForm = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState({});
  const { setUser } = useContext(ContextUserProvider);
  const userInfo = async (token) => {
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
      setUser(response.data);
      formik.resetForm();
      setTimeout(() => {
        navigate("/");
      }, 3000);
      return response.data;
    } catch (error) {
      console.error(
        "Error fetching user profile:",
        error.response ? error.response.data : error.message
      );
    }
  };
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
          toast.success("خوش آمدید ، ورود شما با موفقیت انجام شد", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "inherient",
            style: { color: "black" },
          });
          console.log(response);
          setToken(response.data);
          setAuthentication(true);
          await userInfo(response.data.access_token);
        } catch (error) {
          toast.error("رمز و یا ایمیل معتبر نمی‌باشد، لطفا مججد تلاش کنید", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "inherient",
            style: { color: "black" },
          });
          console.log(error);
        }
      }
    },
    validationSchema: Yup.object({
      email: Yup.string().email("ایمیل معتبر نیست!").required("الزامی"),
      password: Yup.string().min(8, "حداقل ۸ کارکتر باشد").required("الزامی"),
    }),
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
            <div className={style.input_div}>
              <input
                type="email"
                id="email"
                className={style.input}
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <span className={style.span}>{formik.errors.email}</span>
              ) : null}
            </div>
          </div>
          <div className={style.div}>
            <label className={style.label}>رمز :</label>
            <div className={style.input_div}>
              <input
                type="password"
                id="password"
                className={style.input}
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <span className={style.span}>{formik.errors.password}</span>
              ) : null}
            </div>
          </div>

          <button type="submit" className={style.btn}>
            ثبت نام
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={true}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        richColors
      />
    </div>
  );
};

export default LoginForm;
