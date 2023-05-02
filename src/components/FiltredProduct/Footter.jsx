import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../app/feature/Slider/SliceSortProcuder";
import { singleProduct } from "../../app/feature/Slider/SingleProductSlice";
const Footter = ({ dataType }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.sort.value);

  dataType = data && data.length !== 0 ? data : dataType;
  const handleClickProduct = (item) => {
    dispatch(singleProduct(item));
    dispatch(clear());
  };
  return (
    <div className={style.footer}>
      {dataType &&
        dataType.map((item) => {
          return (
            <Link
              key={item.id}
              onClick={() => handleClickProduct(item)}
              to={`/SingleProduct/${item.name}`}
              style={{ color: "black", textDecoration: "none" }}
            >
              <div className={style.footter_item}>
                <div className={style.footter_item_img}>
                  <img src={item.img} alt="" />
                </div>

                <h1 className={style.footter_item_title}>{item.name}</h1>
                <div> 
                  <p className={style.footter_item_detal}>{item.text}</p>
                </div>
                <div className={style.footter_item_footter}>
                  <span className={style.footter_item_footter_price}>
                    {" "}
                    {item.price}$
                  </span>
                  <div className={style.footter_item_footter_dot}>
                    {item.color.map((item) => {
                      return (
                        <span
                          key={item}
                          style={{ backgroundColor: item }}
                        ></span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Footter;
