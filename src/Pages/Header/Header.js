import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CiShoppingCart } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { ContextUserProvider } from "../../context/context-user/ContextUser";
import { ContextAuthProvider } from "../../context/context-auth/ContextAuth";
import { CartContext } from "../../context/context-product/ContextProduct";
import Search from "../../Components/SearchModal/Search";
const Header = () => {
  const [open, setOpen] = useState(false);
  const { authentication, setAuthentication } = useContext(ContextAuthProvider);
  const { user, setUser } = useContext(ContextUserProvider);
  const [logout, setLogout] = useState(false);
  const { state } = useContext(CartContext);
  const quantity = state.itemCounter;
  useEffect(() => {
    localStorage.setItem("access_token", "");
    localStorage.setItem("refresh_token", "");
  }, [logout]);

  const navigate = useNavigate();
  const logouted = (e) => {
    setLogout(true);
    setUser({});
    setAuthentication(false);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    navigate("/login");
  };
  return (
    <div className="header_container">
      <div className="header">
        <div className="header_logo_logo">
          <Link className="join" to={"/"}>
            <h1 className="header_logo">چوبکده</h1>
          </Link>
        </div>
        <div className="header_menu">
          {open ? (
            <IoCloseSharp className="menu" onClick={() => setOpen(!open)} />
          ) : (
            <FiMenu className="menu" onClick={() => setOpen(!open)} />
          )}
          <ul className={`${open ? "header_ui_true header_ui" : "header_ui"}`}>
            <Link className="join" to={"/"}>
              <li className="header_li">خانه</li>
            </Link>
            <Link className="join" to={"/products"}>
              <li className="header_li">محصولات</li>
            </Link>
            <Link className="join" to={"/about-us"}>
              <li className="header_li">درباره ما</li>
            </Link>
          </ul>
        </div>
        <div className="header_icons">
          <Search />
          <div className="header_shop_container">
            <div className="header_shop_span">
              <span className="header_shop_quantity">{quantity}</span>
            </div>
            <Link className="join" to={"/checkout/cart"}>
              <CiShoppingCart className="header_shop" />
            </Link>
          </div>
          {Object.entries(user).length > 0 || authentication === true ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link className="join">
                <span style={{ fontSize: "0.8rem" }}>{user.name}</span>
              </Link>
              <button className="logout" onClick={logouted}>
                خروج
              </button>
            </div>
          ) : (
            <div className="join_btn">
              <Link className="join_btn" to={"/register"}>
                <p className="join">ثبت نام</p>
              </Link>
              <span>&nbsp; / &nbsp;</span>
              <Link className="join_btn" to={"/login"}>
                <p className="join">ورود</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
