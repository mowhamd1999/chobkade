import React, { useContext, useState } from "react";
import style from "./ShoppingCart.module.css";
import { CartContext } from "../../context/context-product/ContextProduct";
import Cart from "../../Components/Cart/Cart";
import SideBar from "../../Components/Cart/SideBar";

import { Link } from "react-router-dom";
const ShoppingCart = () => {
  const { state, dispatch } = useContext(CartContext);
  const [product, setProduct] = useState(state.buys);
  const sidebar = state
  console.log(sidebar);
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2 className={style.h2}>سبد خرید</h2>
      </div>
      {product.length > 0 && (
        <div className={style.body}>
          <div className={style.content}>
            {product.map((item) => (
              <Cart product={item} />
            ))}
          </div>
          <div className={style.sidebar}>
            <SideBar sidebar={sidebar} />
          </div>
        </div>
      )}
      <div className={style.empty_div}>
        <h2 className={style.h2}>محصولی در سبد خرید شما یافت نشد</h2>
        <Link className="join" to={'/products'} >
              <p className={style.link}>رفتن به صفحه محصولات</p>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
