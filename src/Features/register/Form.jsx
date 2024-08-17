import React, { useContext, useEffect, useState } from "react";
import style from "./Form.module.css";
import axios from "axios";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { ContextUserProvider } from "../../context/context-user/ContextUser";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
const Form = () => {
  const { user, setUser } = useContext(ContextUserProvider);
  const [isLogin, setIsLogin] = useState(false);
  const [actoken, setActoken] = useState("");
  const [reftoken, setRefctoken] = useState("");
  const navigate = useNavigate();
  const login = async (values) => {
    const info = { email: values.email, password: values.password };
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      info
    );
    console.log(response.data);
    setActoken(response.data.access_token);
    setRefctoken(response.data.refresh_token);
    setIsLogin(true);
    navigate("/");
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      avatar: "https://picsum.photos/800",
    },
    onSubmit: async (values) => {
      console.log(JSON.stringify(values));
      if (values.name && values.email && values.password) {
        try {
          const response = await axios.post(
            "https://api.escuelajs.co/api/v1/users/",
            values
          );
          await login(values);
          toast.success("ثبت نام شما با موفقیت انجام شد", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "inherient",
            style: { color: "black" },
          });
          setUser(response.data);
          console.log("User created:", response.data);
          setTimeout(() => {
            formik.resetForm();
          }, 1500);
        } catch (error) {
          if (error.response && error.response.status === 400) {
            console.log("خطای 400: درخواست نامعتبر است");
          } else {
            console.log(error);
          }
          toast.error("ثبت نام انجام نشد . لطفا بار دیگر تلاش کنید", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "inherient",
            style: { color: "black" },
          });
        }
      } else {
        toast.warn("اطلاعات به درستی وارد نشده، لطفا مجدد تلاش کنید", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "inherient",
          style: { color: "black" },
        });
      }
    },
    validationSchema: Yup.object({
      name: Yup.string().min(8, "باید بیش از ۸ کلمه باشد").required("الزامی"),
      email: Yup.string().email("ایمیل معتبر نیست!").required("الزامی"),
      password: Yup.string().min(8, "حداقل ۸ کارکتر باشد").required("الزامی"),
    }),
  });
  useEffect(() => {
    if (isLogin) {
      localStorage.setItem("access_token", actoken);
      localStorage.setItem("refresh_token", reftoken);
    }
  }, [isLogin, actoken, reftoken]);
  return (
    <div className={style.container}>
      <form onSubmit={formik.handleSubmit} className={style.form}>
        <h2 className={style.header}>ثبت نام</h2>
        <div className={style.div}>
          <label htmlFor="name" className={style.label}>
            نام و نام خانوادگی :
          </label>
          <div className={style.input_div}>
            <input
              type="text"
              id="name"
              className={style.input}
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <span className={style.span}>{formik.errors.name}</span>
            ) : null}
          </div>
        </div>
        <div className={style.div}>
          <label htmlFor="email" className={style.label}>
            ایمیل :
          </label>
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
          <label htmlFor="password" className={style.label}>
            رمز :
          </label>
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
      <ToastContainer
        position="top-right"
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

export default Form;
