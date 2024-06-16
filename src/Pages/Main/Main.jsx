import React from "react";
import style from "./Main.module.css";
import Swiper from "./../../Components/Swiper/Swiper";
import HeaderImages from './../../Components/headerImage/HeaderImages'
import MarqueeList from "../../Components/marqueeList/MarqueeList";
const Main = () => {
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
