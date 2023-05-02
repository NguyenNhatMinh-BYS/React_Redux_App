import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "./Nav";
import Header from "./Header";
import Footter from "./Footter";

import NavHome from "../Nav/Nav";
const FiltredProduct = () => {
  const { type } = useParams();
  const dataType = useSelector((state) => state.filterProduct.filterProduct);
  console.log(dataType);
  const dataInitColor = (value) => {
    if (dataType.length !== 0) {
      let data = new Set();
      for (let i of dataType) {
        if (i[value] && i[value].length !== 0) {
          for (let j of i[value]) {
            data.add(j);
          }
        }
      }
      return data;
    }
    return "";
  };
  const dataColor = useRef(dataInitColor("color"));
  const dataSize = useRef(dataInitColor("size"));

  return (
    <div>
      <div style={{ height: "100px" }}>
        <NavHome />
      </div>

      <Nav type={type} />

      <Header
        dataType={dataType}
        dataColor={dataColor.current}
        dataSize={dataSize.current}
      />
      <Footter dataType={dataType} />
    </div>
  );
};

export default FiltredProduct;
