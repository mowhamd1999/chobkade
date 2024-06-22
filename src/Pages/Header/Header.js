import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { ContextAuthProvider } from "../../context/context-auth/ContextAuth";
import { ContextUserProvider } from "../../context/context-user/ContextUser";
import { CartContext } from "../../context/context-product/ContextProduct";
import Search from "../../Components/SearchModal/Search";
const Header = () => {
  const [open, setOpen] = useState(false);

  const { authentication, setAuthentication } = useContext(ContextAuthProvider);
  const { user } = useContext(ContextUserProvider);
  const [logout, setLogout] = useState(false);

  const { state } = useContext(CartContext);
  const quantity = state.itemCounter;
  useEffect(() => {
    setLogout(authentication);
  }, [authentication]);

  const navigate = useNavigate();
  const logouted = (e) => {
    setLogout(false);
    setAuthentication(false);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    navigate("/register");
    localStorage.setItem("access", "");
    localStorage.setItem("refresh", "");
  };

  return (
    <div className="header_container">
      <div className="header">
        <div>
          <Link className="join" to={"/"}>
            <h3>چوبکده</h3>
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
            <li className="header_li">سرویس‌ها</li>
          </ul>
        </div>
        <div className="header_icons">
          <Search />
          <div>
            <Link className="join" to={'/checkout/cart'}>
              <span className="header_shop_quantity">{quantity}</span>
              <CiShoppingCart className="header_shop" />
            </Link>
          </div>
          {logout ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "0.8rem" }}>{user.name}</span>
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
