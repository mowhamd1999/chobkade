import React, { useContext, useEffect } from "react";
import style from "./MiniBuyBox.module.css";

import { CiCircleInfo } from "react-icons/ci";

import { CartContext } from "../../context/context-product/ContextProduct";
const MiniBuyBox = ({ product }) => {
  const { state, dispatch } = useContext(CartContext);
  console.log(state);

  useEffect(() => {
    console.log(state);
  }, [state]);
  const quantity = state.buys.find(item=> item.id === product.id)
  console.log(quantity)
  const data = product
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
      {state.buys.find((item) => item.id === product.id) ? (
        <div className={style.box}>
          <div className={style.quantity_box}>
            <button 
            className={style.increase_btn}
            onClick={() => dispatch({type:'decrease_item', payload:quantity})}
              >-</button>
            <p className={style.increase_btn}>{quantity.quantity}</p>
            <button 
            className={style.increase_btn}
            onClick={() => dispatch({type:'increase_item', payload:quantity})}
            >+</button>
          </div>
          <p className={style.increase_title}>تعداد در سبد خرید</p>
        </div>
      ) : (
        <button
          onClick={() => dispatch({ type: "Add_item", payload: data })}
          className={style.add_btn}
        >
          افزودن به سبد خرید
        </button>
      )}
    </div>
  );
};

export default MiniBuyBox;
