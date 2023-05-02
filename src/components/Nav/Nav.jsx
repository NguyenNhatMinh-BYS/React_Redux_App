import React from "react";
import style from "./style.module.scss";

import NavHeader from "./Nav_header";
import Cart from "../Car/Cart";

const NavHome = () => {
  return (
    <div className={style.Nav}>
      <NavHeader />
      <Cart />
    </div>
  );
};

export default NavHome;
