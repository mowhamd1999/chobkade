import React, { useState, useEffect } from "react";

import Products from './products.json'

export const ContextProductsProvider = React.createContext();

const ContextProducts = ({ children }) => {
  const [products, setProducts] = useState(Products);
  
  return (
    <ContextProductsProvider.Provider value={{ products }}>
      {children}
    </ContextProductsProvider.Provider>
  );
};

export default ContextProducts;
