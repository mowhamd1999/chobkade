import React, { useContext } from "react";
import style from "./SideBar.module.css";
import { CartContext } from "../../context/context-product/ContextProduct";
const SideBar = ({ sidebar }) => {
    const {state , dispatch } = useContext(CartContext)
  console.log(sidebar);
  const formatNumber = (num) => {
    if (!num) return "";
    return parseInt(num, 10).toLocaleString();
  };
  return (
    <div className={style.container}>
      <div className={style.first}>
        <div className={style.right}>
          <p className={style.p}>قیمت کالاها</p>
          <p className={style.p}>({sidebar.itemCounter})</p>
        </div>
        <div className={style.left}>
          <p className={style.price}>
            {formatNumber(sidebar.totalPrice)},000{" "}
            <span className={style.price_span}>تومان</span>
          </p>
        </div>
      </div>
      <div className={style.first}>
        <div className={style.right}>
          <p className={style.p}>تخفیف ۲۰ درصد</p>
        </div>
        <div className={style.left}>
          <p className={style.off}>
            {formatNumber(sidebar.totalPrice * 0.2)},000{" "}
            <span className={style.price_span}>تومان</span>
          </p>
        </div>
      </div>
      <div className={style.first}>
        <div className={style.right}>
          <p className={style.p}>مجموع قابل پرداخت</p>
        </div>
        <div className={style.left}>
          <p className={style.price}>
            {formatNumber(sidebar.totalPrice - sidebar.totalPrice * 0.2)},000{" "}
            <span className={style.price_span}>تومان</span>
          </p>
        </div>
      </div>
      <div className={style.btn_div}>
        <button onClick={() => dispatch({type:'checkout'})} className={style.btn}>تایید و تکمیل سفارش</button>
      </div>
    </div>
  );
};

export default SideBar;
