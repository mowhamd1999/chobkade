import React, { createContext } from "react";
import { useReducer } from "react";

const initialState = {
  buys: [],
  itemCounter: 0,
  totalPrice: 0,
  isCheckout: false,
};
const sum = (items) => {
  const itemCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const totalPrice = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCounter, totalPrice: parseFloat(totalPrice) };
};
const cardReducer = (state, action) => {
  switch (action.type) {
    case "Add_item":
      if (!state.buys.find((item) => item.id === action.payload.id)) {
        state.buys.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        buys: [...state.buys],
        ...sum(state.buys),
      };
      case "remove_item":
        const newBuys = state.buys.filter((item) => item.id !== action.payload.id);
        return {
          ...state,
          buys: [...newBuys],
          ...sum(newBuys),
        };
    case "increase_item":
      const increasedBuys = state.buys.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        buys: increasedBuys,
        ...sum(increasedBuys),
      };
      case "decrease_item":
        const decreasedBuys = state.buys
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);
        return {
          ...state,
          buys: decreasedBuys,
          ...sum(decreasedBuys), 
        };
    case "checkout":
      return {
        buys: [],
        itemCounter: 0,
        totalPrice: 0,
        isCheckout: true,
      };
    case "clear":
      return {
        buys: [],
        itemCounter: 0,
        totalPrice: 0,
        isCheckout: false,
      };
    default:
      return state;
  }
};
export const CartContext = createContext();
const ContextProduct = ({ children }) => {
  const [state, dispatch] = useReducer(cardReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProduct;
