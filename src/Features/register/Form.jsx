import React, { useContext, useEffect, useState } from "react";
import style from "./Form.module.css";
import axios from "axios";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { ContextUserProvider } from "../../context/context-user/ContextUser";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const { user, setUser } = useContext(ContextUserProvider);
  const navigate = useNavigate();
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
          console.log("User created:", response.data);
          setTimeout(() => {
            formik.resetForm();
            navigate("/login");
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
  });

  return (
    <div className={style.container}>
      <form onSubmit={formik.handleSubmit} className={style.form}>
        <h2 className={style.header}>ثبت نام</h2>
        <div className={style.div}>
          <label htmlFor="name" className={style.label}>
            نام و نام خانوادگی :
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={style.input}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div className={style.div}>
          <label htmlFor="email" className={style.label}>
            ایمیل :
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={style.input}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div className={style.div}>
          <label htmlFor="password" className={style.label}>
            رمز :
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className={style.input}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
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
