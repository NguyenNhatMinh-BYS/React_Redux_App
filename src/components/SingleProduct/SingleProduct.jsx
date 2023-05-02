import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../app/feature/Slider/CartSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./style.module.scss";
import { toast } from "react-toastify";

import NavHome from "../Nav/Nav";
const SingleProduct = () => {
  const navigate = useNavigate();
  const dataSingleProduct = JSON.parse(localStorage.getItem("singleProduct"));
  const isLog = useSelector((state) => state.login.isLogined);
  const [size, setSize] = useState(
    dataSingleProduct.size ? dataSingleProduct.size[0] : ""
  );
  const [color, setColor] = useState(
    dataSingleProduct.color ? dataSingleProduct.color[0] : ""
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!dataSingleProduct) {
      navigate("/");
    }
  }, [dataSingleProduct, navigate]);
  const hanldeAddCart = () => {
    if (isLog) {
      const product = {
        size: size === "" ? "Standard" : size,
        color,
        name: dataSingleProduct.name,
        price: dataSingleProduct.price,
        id: dataSingleProduct.id,
        img: dataSingleProduct.img,
        title: dataSingleProduct.text,
      };
      dispatch(addCart(product));
      toast.success("Add cart successfully");
    } else {
      toast.warning("You must Login !!!");
      navigate("/login");
    }
  };
  return (
    <div>
      <NavHome />

      <div className={style.single_product}>
        <div className={style.single_product_img}>
          <img src={dataSingleProduct.img} alt="img" />
        </div>
        <div className={style.single_product_detal}>
          <div className={style.single_product_detal_button}>
            <h1>{dataSingleProduct.name}</h1>
            <h2>15% OFF</h2>
            <p>{dataSingleProduct.text}</p>
            <label htmlFor="size" style={{ display: "inline-block" }}>
              Pick a size :
            </label>
            {size === "" ? (
              <span className={style.standard}>Standard</span>
            ) : (
              <select
                id="size"
                value={size}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              >
                {dataSingleProduct.size &&
                  dataSingleProduct.size.map((item) => {
                    return (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
            )}
            <label htmlFor="color">Pick a color</label>
            <select
              id="color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            >
              {dataSingleProduct.color &&
                dataSingleProduct.color.map((item) => {
                  return (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  );
                })}
            </select>
            <div onClick={() => hanldeAddCart()} className={style.add_to_cart}>
              ADD TO CART
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
