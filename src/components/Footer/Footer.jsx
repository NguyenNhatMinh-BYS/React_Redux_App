import React from "react";
import style from "./style.module.scss";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div>
        <img
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/nike-shoes-logo-shoes-brand-design-template-ae19baeb1c788143732f6d14b5082ca3_screen.jpg?ts=1641233761"
          alt="img"
        />
      </div>
      <div>
        <span>
          Project Shop Redux 2023{" "}
          <span style={{ opacity: "0.4" }}>from BYS</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
