import React, { useRef } from "react";
import style from "./style.module.scss";
import { useDispatch } from "react-redux";
import {
  filterFemale,
  filterMale,
  sortHighPrice,
  sortLowPrice,
  clear,
  sortColor,
  sortSize,
} from "../../app/feature/Slider/SliceSortProcuder";
const title = [
  "Male",
  "Female",
  "Low Price",
  "High Price",
  "Select a color",
  "Select a size",
];
const Header = ({ dataColor, dataSize, dataType }) => {
  const show = useRef(null);
  const dispatch = useDispatch();
  const Color_item = useRef([...dataColor]);
  const Size_item = useRef([...dataSize]);
  const handleShowSort = () => {
    show.current.classList.toggle(style.show);
  };
  const handleSort = (item) => {
    if (item === "Male") {
      dispatch(filterMale(dataType));
    } else if (item === "Female") {
      dispatch(filterFemale(dataType));
    } else if (item === "High Price") {
      dispatch(sortHighPrice(dataType));
    } else if (item === "Low Price") {
      dispatch(sortLowPrice(dataType));
    } else if (item === "Clear Filter") {
      dispatch(clear());
    }
  };
  const handleSortProperty = (value, title) => {
    if (title === "size") dispatch(sortSize({ value, dataType }));
    else if (title === "color") dispatch(sortColor({ value, dataType }));
  };
  return (
    <div style={{ width: "100%" }}>
      <div onClick={() => handleShowSort()} className={style.sort}>
        <i class="bi bi-filter-left"></i>
      </div>
      <div ref={show} className={style.header}>
        {title.map((item, index) => {
          return (
            <div key={index} className={style.Dropdown}>
              <p
                onClick={() => handleSort(item)}
                className={style.header_title}
                key={index}
              >
                {item.toLocaleUpperCase()}
              </p>
              {item === "Male" ||
              item === "Female" ||
              item === "High Price" ||
              item === "Low Price" ? (
                ""
              ) : item === "Select a color" ? (
                <ul className={style.list_item}>
                  {Color_item.current &&
                    Color_item.current.length !== 0 &&
                    Color_item.current.map((item) => {
                      return (
                        <li
                          onClick={() => handleSortProperty(item, "color")}
                          key={item}
                          style={{ color: item }}
                        >
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </li>
                      );
                    })}
                </ul>
              ) : (
                <ul className={style.list_item}>
                  {Size_item.current && Size_item.current.length !== 0 ? (
                    Size_item.current.map((item) => {
                      return (
                        <li
                          onClick={() => handleSortProperty(item, "size")}
                          key={item}
                        >
                          {item}
                        </li>
                      );
                    })
                  ) : (
                    <li>Standard</li>
                  )}
                </ul>
              )}
            </div>
          );
        })}
      </div>
      <div className={style.header_clearFilter}>
        <div onClick={() => handleSort("Clear Filter")}>CLEAR FILTER</div>
      </div>
    </div>
  );
};

export default Header;
