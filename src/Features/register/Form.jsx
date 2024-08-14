import React, { useContext, useEffect, useState } from "react";
import style from "./Form.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { ContextUserProvider } from "../../context/context-user/ContextUser";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const [islogin, setIslogin] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "https://picsum.photos/800",
  });
  const { user, setUser } = useContext(ContextUserProvider);

  const register = async (event) => {
    event.preventDefault();
    if (userData.name && userData.email && userData.password) {
      try {
        const response = await axios.post(
          "https://api.escuelajs.co/api/v1/users/",
          userData
        );
        setUser(userData);
        setIslogin(true);
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
      } catch (error) {
        console.log(error);
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
    setTimeout(() => {
      setUserData({
        name: "",
        email: "",
        password: "",
      });
    }, 1000);
  };
  useEffect(() => {
    localStorage.setItem("username", userData.name);
  }, [user]);

  return (
    <div className={style.container}>
      <form onSubmit={register} className={style.form}>
        <h2 className={style.header}>ثبت نام</h2>
        <div className={style.div}>
          <label className={style.label}>نام و نام خانوادگی :</label>
          <input
            type="text"
            className={style.input}
            onChange={(event) =>
              setUserData((prevState) => ({
                ...prevState,
                name: event.target.value,
              }))
            }
            value={userData.name}
          />
        </div>
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
