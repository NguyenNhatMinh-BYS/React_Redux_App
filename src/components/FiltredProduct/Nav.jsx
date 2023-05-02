import React from "react";
import style from "./style.module.scss";

const Nav = ({ type }) => {
  return (
    <div className={style.nav}>
      <h1>{type}</h1>
    </div>
  );
};

export default Nav;
