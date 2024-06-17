import React from "react";
import style from "./CardProducts.module.css";
import { Link } from "react-router-dom";
const CardProducts = ({ product }) => {
  const id = product.id;
  return (
    <div className={style.product}>
      <Link className="join" to={`/products/${id}`}>
        <div className={style.card}>
          <img
            src={product.picture}
            alt={product.name}
            className={style.image}
          />
          <div className={style.info}>
            <h2 className={style.name}>{product.name}</h2>
            <p className={style.fix}>شروع قیمت از:</p>
            <p className={style.price}>{product.price},000 تومان</p>
            <div className={style.btn}>
              <button className={style.button}> + </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProducts;
