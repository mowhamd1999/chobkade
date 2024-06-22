import React, { useContext } from 'react'
import style from './Cart.module.css'
import { CartContext } from '../../context/context-product/ContextProduct'

import { IoShieldCheckmarkOutline } from "react-icons/io5";


const Cart = ({product}) => {
    const {state , dispatch} = useContext(CartContext)
    const quantity = state.buys.find(item=> item.id === product.id)
    console.log(quantity)
  return (
    <div className={style.container}>
      <div className={style.right}>
        <div className={style.img_div}>
            <img className={style.img} src={product.picture} alt="" />
        </div>
        <div className={style.div_btn}>
          <div className={style.btn}>
            <button onClick={() => dispatch({type:"increase_item" , payload:quantity})} className={style.btn_btn}>+</button>
            <span>{quantity.quantity}</span>
            <button onClick={() => dispatch({type:"decrease_item" , payload:quantity})} className={style.btn_btn}>-</button>
          </div>  
        </div>
      </div>
      <div className={style.left}>
        <div>
            <h4 className={style.h4}>{product.name} {product.category} {product.descriptions}</h4>
        </div>
        <div className={style.garenty}>
        <IoShieldCheckmarkOutline />
        </div>
      </div>
    </div>
  )
}

export default Cart
