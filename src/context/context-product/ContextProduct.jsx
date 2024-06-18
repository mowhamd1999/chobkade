import React, { createContext } from "react";
import { useReducer } from "react";

const initialState = {
  buys: [],
  itemCounter: 0,
  totalPrice: 0,
  isCheckout: false,
};
const sum = (item) => {
    const itemCounter = item.reduce((total , product) => total + product.quantity,0)
    const totalPrice = item.reduce((total , product) => total + product.price * product.quantity).toFixed(2)
    return {itemCounter , totalPrice}
}
const cardReducer = (state, action) => {
  switch (action.payload) {
    case "add_item":
      if (!state.buys.find((item) => item.id === action.payload.id)) {
        state.buys.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state, 
        buys : [...state.buys],
        ...sum(state.buys)
      }
    case "remove_item":
      const newBuys = state.buys.filter((item) => item.id == action.payload.id);
      return {
        ...state,
        buys: [...newBuys],
        ...sum(state.buys)
      };
    case "increase_item":
        const increaseItem = state.buys.findIndex(item => item.id == action.payload.id)
        state.buys[increaseItem].quantity++
        return{
            ...state,
            ...sum(state.buys)
        }
    case "decrease_item":
        const decreaseItem = state.buys.findIndex(item => item.id == action.payload.id)
        state.buys[decreaseItem].quantity--
        return{
            ...state,
            ...sum(state.buys)
        }
    case "checkout":
        return{
            buys: [],
            itemCounter: 0,
            totalPrice: 0,
            isCheckout: true ,
        }
    case "clear":
        return{
            buys: [],
            itemCounter: 0,
            totalPrice: 0,
            isCheckout: false ,
        }
    default:
        return state
  }
};
export const CartContext = createContext()
const ContextProduct = ({children}) => {
    const [state, dispatch] = useReducer(cardReducer , initialState)
  return (
    <CartContext.Provider value={{state , dispatch}} >
        {children}
    </CartContext.Provider>
  );
};

export default ContextProduct;
