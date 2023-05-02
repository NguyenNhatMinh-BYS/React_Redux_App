import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataAPI } from "../../app/feature/Product/SliceProduct";
import style from "./style.module.scss";
import picSales from "../../assets/img/sale50.jpg";
import { Link } from "react-router-dom";
import { filterProduct } from "../../app/feature/Slider/ProductSlice";
import ProducerFreeShip from "./ProducerFreeShip";
const Navigate = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product);
  const { value, status } = data;
  useEffect(() => {
    if (value.length === 0) {
      dispatch(dataAPI());
    }
  }, [dispatch, value]);
  const productSelector = (value) => {
    dispatch(
      filterProduct(value.name.charAt(0).toUpperCase() + value.name.slice(1))
    );
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={style.Navigate}>
      <div className={style.Navigate_header}>
        {value.length === 0 ? (
          <div style={{ textAlign: "center", margin: "1rem" }}>{status}...</div>
        ) : (
          <div style={{ textAlign: "center" }}>
            {value.map((value) => {
              return (
                <Link
                  style={{ color: "black" }}
                  key={value.id}
                  to={`/FiltredProduct/${
                    value.name.charAt(0).toUpperCase() + value.name.slice(1)
                  }`}
                >
                  <h3
                    onClick={() => productSelector(value)}
                    className={style.Navigate_title}
                  >
                    {value.name.toUpperCase()}
                  </h3>
                </Link>
              );
            })}
          </div>
        )}
        <div className={style.Navigate_header_sale}>SALES UP TO 50%</div>
        <img src={picSales} alt="sale" />
        <div className={style.Navigate_header_sale}>
          Free Shippng and returns
        </div>
        <ProducerFreeShip />
      </div>
    </div>
  );
};

export default Navigate;
