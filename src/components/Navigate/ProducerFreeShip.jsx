import React from "react";
import style from "./style.module.scss";

import { storeData } from "../../assets/data";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCart } from "../../app/feature/Slider/CartSlice";
import { toast } from "react-toastify";
const ProducerFreeShip = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLog = useSelector((state) => state.login.isLogined);
  const product = storeData.filter((item) => {
    return item.price === 25 || item.price === 85 || item.price === 425;
  });

  const hanldeAddCart = (item) => {
    if (isLog) {
      const product = {
        size: item.size ? item.size[0] : "Standard",
        color: item.color ? item.color[0] : "Original",
        name: item.name,
        price: item.price,
        id: item.id,
        img: item.img,
        title: item.text,
      };
      dispatch(addCart(product));
      toast.success("Add cart successfully");
    } else {
      toast.warning("You must Login !!!");
      navigate("/login");
    }
  };
  return (
    <div className={style.footer}>
      {product &&
        product.map((item) => {
          return (
            <div key={item.id} className={style.footter_item}>
              <div className={style.footter_item_img}>
                <img src={item.img} alt="" />
              </div>

              <h1 className={style.footter_item_title}>{item.name}</h1>
              <div>
                <p className={style.footter_item_detal}>{item.text}</p>
              </div>
              <div className={style.footter_item_footter}>
                <div className={style.footter_item_footter_price}>
                  {" "}
                  {item.size ? (
                    <div> Size: {item.size[0]}</div>
                  ) : (
                    <div> Size: Standard</div>
                  )}
                  <div>Price: ${item.price}</div>{" "}
                </div>

                <div>
                  <span>Color</span>
                  <span className={style.footter_item_footter_dot}>
                    <span style={{ backgroundColor: item.color[0] }}></span>
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={() => hanldeAddCart(item)}
                  className={style.add_to_cart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProducerFreeShip;
