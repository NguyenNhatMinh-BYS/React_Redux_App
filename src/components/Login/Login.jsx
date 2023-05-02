import React from "react";
import style from "./app.module.scss";
import { useState } from "react";
import { logIned } from "../../app/feature/Slider/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const imgDefault =
  "https://i.pinimg.com/originals/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [img, setImg] = useState(imgDefault);
  let [name, setName] = useState("");
  let [pass, setPass] = useState("");
  const handleLogin = () => {
    if (name && pass) {
      dispatch(logIned({ img, name }));
      navigate("/");
    }
  };
  return (
    <div className={style.login}>
      <div className={style.login_avar}>
        <h2>WelCome Shop</h2>
      </div>
      <div className={style.box}>
        <form>
          <h1>Login</h1>
          <div className={style.inputBox}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required="required"
            />
            <span>User Name</span>
            <i className={style.i}></i>
          </div>
          <div className={style.inputBox}>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              required="required"
            />
            <span>Password</span>
            <i className={style.i}> </i>
          </div>
          <div className={style.inputBox}>
            <input
              value={img}
              onChange={(e) => setImg(e.target.value)}
              type="text"
              placeholder="defaut avatar"
            />
            <span>Url: (img avatar default) </span>
            <i className={style.i}></i>
          </div>
          <button
            className={style.loginButon}
            onClick={() => {
              handleLogin();
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
