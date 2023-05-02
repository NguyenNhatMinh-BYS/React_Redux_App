import React from "react";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleActive } from "../../app/feature/Slider/listCartSlice";
import { clear } from "../../app/feature/Slider/SliceSortProcuder";
import { useRef } from "react";
const NavHeader = () => {
  const show = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const avaterUser = useSelector((state) => state.login);
  const { isLogined, avatar, userName } = avaterUser;
  console.log(avaterUser);
  const handleLogin = () => {
    navigate("/login");
  };
  const homePage = () => {
    dispatch(clear());
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleShow = () => {
    show.current.classList.toggle(style.showInfor);
  };
  return (
    <div className={style.Nav_header}>
      <header>
        <div className={style.header_avar}>
          <div style={{ cursor: "pointer" }}>
            <img
              onClick={homePage}
              className={style.header_avar_img}
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/nike-shoes-logo-shoes-brand-design-template-ae19baeb1c788143732f6d14b5082ca3_screen.jpg?ts=1641233761"
              alt="shoes logo"
            />
            <div
              onClick={() => handleShow()}
              style={{
                color: "black",
                margin: "20px 0 0 0 ",
              }}
              className={style.control}
            >
              <i className="bi bi-justify"></i>
            </div>
          </div>
          <div
            ref={show}
            className={style.header_avar_title}
            style={{ height: "100%" }}
          >
            <div onClick={() => handleShow()} className={style.control}>
              <i className="bi bi-justify"></i>
            </div>
            {isLogined ? (
              <div className={style.avaterUserShow}>
                <img className={style.avaterUser} src={avatar} alt="img" />
                <span>{userName}</span>
              </div>
            ) : (
              ""
            )}
            <div>
              <i className="bi bi-heart"></i>
              <span>Whish List</span>
            </div>

            <div
              className={style.header_avar_cart}
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(handleActive())}
            >
              <i className="bi bi-cart"></i>
              <span>Shopping bag</span>
              {totalAmount === 0 ? (
                ""
              ) : (
                <span className={style.total_amount}>{totalAmount}</span>
              )}
            </div>
            {isLogined ? (
              <h4 onClick={() => handleLogin()}>Logout</h4>
            ) : (
              <h4 onClick={() => handleLogin()}>Login</h4>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavHeader;
