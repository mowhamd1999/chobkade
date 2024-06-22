import React, { useContext, useEffect, useState } from "react";
import style from "./SideBar.module.css";
import { CartContext } from "../../context/context-product/ContextProduct";

const SideBar = ({ sidebar }) => {
  const { state, dispatch } = useContext(CartContext);
  const [currentSidebar, setCurrentSidebar] = useState(sidebar);

  useEffect(() => {
    setCurrentSidebar({
      itemCounter: state.buys.length,
      totalPrice: state.buys.reduce((acc, item) => acc + item.price * item.quantity, 0),
    });
  }, [state.buys]);

  const formatNumber = (num) => {
    if (!num) return "";
    return parseInt(num, 10).toLocaleString();
  };

  return (
    <div className={style.container}>
      <div className={style.first}>
        <div className={style.right}>
          <p className={style.p}>قیمت کالاها</p>
          <p className={style.p}>({currentSidebar.itemCounter})</p>
        </div>
        <div className={style.left}>
          <p className={style.price}>
            {formatNumber(currentSidebar.totalPrice)}{" "}
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
            {formatNumber(currentSidebar.totalPrice * 0.2)}{" "}
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
            {formatNumber(currentSidebar.totalPrice - currentSidebar.totalPrice * 0.2)}{" "}
            <span className={style.price_span}>تومان</span>
          </p>
        </div>
      </div>
      <div className={style.btn_div}>
        <button onClick={() => dispatch({ type: 'checkout' })} className={style.btn}>
          تایید و تکمیل سفارش
        </button>
      </div>
    </div>
  );
};

export default SideBar;
