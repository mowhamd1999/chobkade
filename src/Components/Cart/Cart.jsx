import React, { useContext } from "react";
import style from "./Cart.module.css";
import { CartContext } from "../../context/context-product/ContextProduct";
import { Link } from "react-router-dom";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { VscSymbolColor } from "react-icons/vsc";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { CiTrash } from "react-icons/ci";

const Cart = (props) => {
  const { state, dispatch } = useContext(CartContext);
  const data = state.buys.find((item) => item.id === props.product.id);

  if (!data) return null;

  const { picture, name, price, category, descriptions, color } = props.product;
  const { quantity } = data;

  const formatNumber = (num) => {
    if (!num) return "";
    return parseInt(num, 10).toLocaleString();
  };

  return (
    <div className={style.container}>
      <div className={style.right}>
        <div className={style.img_div}>
          <Link to={`/products/${props.product.id}`}>
            <img className={style.img} src={picture} alt="" />
          </Link>
        </div>
        <div className={style.div_btn}>
          <div className={style.btn}>
            <button
              onClick={() => dispatch({ type: "increase_item", payload: data })}
              className={style.btn_btn}
            >
              +
            </button>
            <span>{quantity}</span>
            {quantity === 1 ? (
              <button
                onClick={() =>
                  dispatch({ type: "remove_item", payload: props.product })
                }
                className={style.btn_btn}
              >
                <CiTrash />
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch({ type: "decrease_item", payload: props.product })
                }
                className={style.btn_btn}
              >
                -
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={style.left}>
        <div>
          <h4 className={style.h4}>
            {name} {category} {descriptions}
          </h4>
        </div>
        <div className={style.garenty}>
          <IoShieldCheckmarkOutline className={style.icons} />
          <p>گارانتی اصالت و سلامت فیزیکی کالا</p>
        </div>
        <div className={style.garenty}>
          <SiHomeassistantcommunitystore className={style.icons} />
          <p>چوبکده</p>
        </div>
        <div className={style.garenty}>
          <VscSymbolColor className={style.icons} />
          <p>{color}</p>
        </div>
        <div className={style.price_div}>
          <p className={style.price}>
            {formatNumber(price * quantity)}{" "}
            <span className={style.price_span}>تومان</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
