import "./App.css";
import Register from "./Pages/register/Register";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Pages/loggin/Login";
import React, { useContext, useEffect } from "react";
import Main from "./Pages/Main/Main";
import Products from "./Pages/Products/Products";
import ContextProducts from "./context/context-products/ContextProducts";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Product from "./Pages/Product/Product";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";

import { ContextAuthProvider } from "./context/context-auth/ContextAuth";

function App() {
  const { authentication } = useContext(ContextAuthProvider);

  const PrivateRoute = ({ children }) => {
    return authentication ? children : <Navigate to="/login" replace />;
  };

  return (
    <div className="App">
      <Header />
      <ContextProducts>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/checkout/cart" element={<ShoppingCart />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </ContextProducts>
      <Footer />
    </div>
  );
}

export default App;
