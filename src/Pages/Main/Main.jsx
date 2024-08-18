import React, { useContext } from "react";
import style from "./Main.module.css";
import Swiper from "./../../Components/Swiper/Swiper";
import HeaderImages from './../../Components/headerImage/HeaderImages'
import MarqueeList from "../../Components/marqueeList/MarqueeList";
import { ContextUserProvider } from "../../context/context-user/ContextUser";
const Main = () => {
  const {user , setUser } = useContext(ContextUserProvider)
  console.log(user)
  return (
    <div className={style.container}>
      <h1 className={style.h1}>فضای اطرافت رو با چوبکده تغییر بده</h1>
      <HeaderImages />
      <MarqueeList />
      <div className={style.swiper}>
        <Swiper />
      </div>
    </div>
  );
};

export default Main;
