import React from "react";
import style from "./Notifi.module.css";
import { IoCloseCircleOutline } from "react-icons/io5";
const Notifi = ({ onhide, product }) => {
  console.log(product);
  return (
    <div className={`${style.notifi} ${style.active}`}>
      <div className={style.container}>
        <div className={style.header}>
          <p className={style.header_p}>این کالا به سبد خرید شما اضافه شد!</p>
          <IoCloseCircleOutline className={style.close} onClick={onhide} />
        </div>
        <div className={style.body}>
          <img className={style.pic} src={product.picture} alt={product.name} />
          <p className={style.body_p}>
            <span className={style.body_p}>{product.name}</span>{" "}
            <span className={style.body_p}>{product.category}</span>{" "}
            <span className={style.body_p}>{product.descriptions}</span>
          </p>
        </div>
        <button className={style.btn}>برو به سبد خرید</button>
      </div>
    </div>
  );
};

export default Notifi;
