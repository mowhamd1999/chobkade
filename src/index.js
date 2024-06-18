import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextAuth from "./context/context-auth/ContextAuth";
import ContextUser from "./context/context-user/ContextUser";
import CartContext from "./context/context-product/ContextProduct";

import ScrollToTop from "./helpers/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <CartContext>
        <ContextUser>
          <ContextAuth>
            <App />
          </ContextAuth>
        </ContextUser>
      </CartContext>
    </BrowserRouter>
  </React.StrictMode>
);
