import React, { useContext } from "react";
import style from "./Main.module.css";
import Swiper from "./../../Components/Swiper/Swiper";
import HeaderImages from "./../../Components/headerImage/HeaderImages";
import MarqueeList from "../../Components/marqueeList/MarqueeList";
import { ContextUserProvider } from "../../context/context-user/ContextUser";
import ProductsIcons from "../../Components/ProductsIcons/ProductsIcons";
const Main = () => {
  const { user, setUser } = useContext(ContextUserProvider);
  console.log(user);
  return (
    <div className={style.container}>
      <h1 className={style.h1}>فضای اطرافت رو با چوبکده تغییر بده</h1>
      <HeaderImages />
      <MarqueeList />
      <div>
        <h2 className={style.h2}>دسته بندی محصولات</h2>
        <div className={style.icons}>
          <ProductsIcons />
        </div>
      </div>
      <div className={style.div}>
        <h2 className={style.h2}>" نظر مشتریان "</h2>
        <div className={style.swiper}>
          <Swiper className={style.swiper_1} />
          
        </div>
      </div>
    </div>
  );
};

export default Main;
