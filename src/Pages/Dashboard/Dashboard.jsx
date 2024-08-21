import React, { useContext } from "react";
import style from "./Dashboard.module.css";
import { useFormik } from "formik";
import { ContextUserProvider } from "../../context/context-user/ContextUser";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Dashboard = () => {
  const { user, setUser } = useContext(ContextUserProvider);
  const userId = user.id;

  const formik = useFormik({
    initialValues: {
      name: user.name || "",
      email: user.email || "",
      role: user.role || "customer",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.put(`https://api.escuelajs.co/api/v1/users/${userId}`, {
          name: values.name,
          email: values.email,
          role: values.role,
          password: values.password,
        });
        if (response.status === 200) {
          setUser(response.data);
          console.log("User updated:", response.data);
          toast.success("تغییرات اعمال شد", {
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
        }
      } catch (error) {
        console.error("Error updating user:", error);
        toast.error("مشکلی در عملیات رخ داده لطفا مججد تلاش کنید", {
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
      }
    },
  });

  return (
    <div className={style.container}>
      <h2 className={style.h2}>ویرایش اطلاعات</h2>
      <div className={style.div}>
        <form onSubmit={formik.handleSubmit} className={style.form_form}>
          <div className={style.form}>
            <label className={style.label} htmlFor="name">
              نام و نام خانوادگی
            </label>
            <input
              className={style.input}
              type="text"
              id="name"
              {...formik.getFieldProps("name")}
              placeholder="نام و نام خانوادگی را وارد کنید"
            />
          </div>
          <div className={style.form}>
            <label className={style.label} htmlFor="email">
              ایمیل
            </label>
            <input
              className={style.input}
              type="text"
              id="email"
              {...formik.getFieldProps("email")}
              placeholder="ایمیل را وارد کنید"
            />
          </div>
          <div className={style.form}>
            <label className={style.label} htmlFor="role">
              نقش کاربر
            </label>
            <select
              className={style.input}
              id="role"
              {...formik.getFieldProps("role")}
            >
              <option value="customer">مشتری</option>
              <option value="admin">مدیر</option>
            </select>
          </div>
          <div className={style.form}>
            <label className={style.label} htmlFor="password">
              رمز عبور
            </label>
            <input
              className={style.input}
              type="password"
              id="password"
              {...formik.getFieldProps("password")}
              placeholder="رمز عبور جدید را وارد کنید"
            />
          </div>
          <button type="submit" className={style.btn}>ثبت تغییرات</button>
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

export default Dashboard;
