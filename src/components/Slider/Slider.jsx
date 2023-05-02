import React from "react";
import {
  nextSlide,
  preSlide,
  dotSlide,
} from "../../app/feature/Slider/SliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { data } from "../../assets/data";
import style from "./style.module.scss";
const Slider = () => {
  const indexSlider = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();
  console.log(indexSlider);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      <div className={style.slider}>
        <button
          className={style.slider_next}
          onClick={() => dispatch(nextSlide(indexSlider + 1))}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
        <button
          className={style.slider_pre}
          onClick={() => dispatch(preSlide(indexSlider - 1))}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <div className={style.slider_deital}>
          {data &&
            data.map((item, index) => {
              return (
                <img
                  key={item.id}
                  className={`${style.slider_img} ${
                    index === indexSlider
                      ? style.slider_img_active
                      : style.slider_img_none
                  } `}
                  src={item.img}
                  alt="shoes"
                />
              );
            })}
        </div>
        <div className={style.slider_move}>
          {data &&
            data.map((item, index) => {
              return (
                <div
                  onClick={() => dispatch(dotSlide(index))}
                  key={index}
                  className={`${style.slider_move_dots} ${
                    index === indexSlider ? style.slider_move_dots_active : ""
                  }`}
                ></div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
