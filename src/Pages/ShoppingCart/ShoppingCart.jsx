import React, { useContext, useState } from "react";
import style from "./ShoppingCart.module.css";
import { CartContext } from "../../context/context-product/ContextProduct";
import Cart from "../../Components/Cart/Cart";
import SideBar from "../../Components/Cart/SideBar";
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
    </div>
  );
};

export default ShoppingCart;
