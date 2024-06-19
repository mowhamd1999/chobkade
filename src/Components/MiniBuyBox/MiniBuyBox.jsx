import React, { useContext } from "react";
import style from "./MiniBuyBox.module.css";

import { CiCircleInfo } from "react-icons/ci";

import ContextProducts from "../../context/context-products/ContextProducts";

const MiniBuyBox = ({ product }) => {

  const {state , dispatch} = useContext(ContextProducts)


  return (
    <div className={style.bg}>
      <div className={style.sell_container_top}>
        <div className={style.bg}>
          <img className={style.sell_picture} src={product.picture} alt="" />
        </div>
        <div>
          <p className={style.p}>{product.name}</p>
          <p className={style.p}>{product.descriptions}</p>
        </div>
      </div>
      <div className={style.sell_container_center}>
        <CiCircleInfo className={style.icon} />
        <div className={style.sell_container_center}>
          <h3 className={style.h3}>{product.price}</h3>
          <p className={style.toman}>تومان</p>
        </div>
      </div>
      <button>افزودن به سبد خرید</button>
    </div>
  );
};

export default MiniBuyBox;
